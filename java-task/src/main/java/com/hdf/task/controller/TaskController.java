package com.hdf.task.controller;

import com.hdf.task.entity.TaskTask;
import com.hdf.task.service.TaskService;
import com.hdf.task.taskVo.TaskTaskVo;
import com.hdf.task.utils.TaskThread;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.scheduling.support.CronTrigger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ScheduledFuture;

/**
 * @description:
 * @author: Admin
 * @date: 2019-03-07 9:11
 */
@Controller
@RequestMapping(value = "/hdf/task")
public class TaskController extends cn.hdf.common.controller.base.Controller {
    private static Logger log = LoggerFactory.getLogger(TaskController.class);
    @Autowired
    private ThreadPoolTaskScheduler threadPoolTaskScheduler;
    @Autowired
    private TaskService taskService;


    public static Map<String, ScheduledFuture<?>> taskmap = new HashMap<>();

    @Bean
    public ThreadPoolTaskScheduler threadPoolTaskScheduler() {
        return new ThreadPoolTaskScheduler();
    }

    @RequestMapping("/list")
    @ResponseBody
    public String list(@RequestBody TaskTaskVo vo) throws Exception {
        List<TaskTask> list = taskService.getList();
        return success(list);
    }

    /**
     * @description: 增加
     * @author: LCH
     * @date: 2019-03-07 10:57
     */
    @RequestMapping("/insert")
    @ResponseBody
    public String insert(@RequestBody TaskTaskVo vo) throws Exception {
        if (StringUtils.isBlank(vo.getCron()) ||
                StringUtils.isBlank(vo.getApiUrl()) || StringUtils.isBlank(vo.getTaskDesc())) {
            return fail("参数不完整");
        }
        taskService.insert(vo);
        return success();
    }

    /**
     * @description: 修改
     * @author: LCH
     * @date: 2019-03-07 10:58
     */
    @RequestMapping("/update")
    @ResponseBody
    public String update(@RequestBody TaskTaskVo vo) throws Exception {
        if (StringUtils.isBlank(vo.getCode())) {
            return fail("code不能为空");
        }
        vo.setStatus("Y");
        int count = taskService.update(vo);
        if (count == 0) {
            return fail("修改失败");
        }

        TaskTask taskTask = taskService.selectByCode(vo.getCode());
        // 先停止，在开启.
        ScheduledFuture<?> futureTemp = taskmap.get(taskTask.getTaskDesc());
        if (futureTemp != null) {
            futureTemp.cancel(true);
        }
        //启动
        ScheduledFuture<?> future = taskmap.get(taskTask.getTaskDesc());
        TaskThread tt = new TaskThread(taskTask.getCode(), taskTask.getTaskDesc(), taskTask.getApiUrl());
        future = threadPoolTaskScheduler.schedule(tt, new CronTrigger(taskTask.getCron()));
        log.info("任务重置" + taskTask.getCode() + "  " + taskTask.getTaskDesc());
        return success();
    }

    /**
     * @description: 删除
     * @author: LCH
     * @date: 2019-03-07 10:58
     */
    @RequestMapping("/delete")
    @ResponseBody
    public String delete(@RequestBody TaskTaskVo vo) throws Exception {
        if (StringUtils.isBlank(vo.getCode())) {
            return fail("code不能为空");
        }
        TaskTask taskTask = taskService.selectByCode(vo.getCode());
        ScheduledFuture<?> future = taskmap.get(taskTask.getTaskDesc());
        if (future != null) {
            future.cancel(true);
        }
        taskService.delete(vo);
        return success();
    }

    /**
     * @description: 任务开始
     * @author: LCH
     * @date: 2019-03-07 10:59
     */
    @RequestMapping("/start")
    @ResponseBody
    public String start(@RequestBody TaskTaskVo vo) throws Exception {
        if (StringUtils.isBlank(vo.getCode())) {
            return fail("code不能为空");
        }
        TaskTask taskTask = taskService.selectByCode(vo.getCode());
        TaskThread tt = new TaskThread(taskTask.getCode(), taskTask.getTaskDesc(), taskTask.getApiUrl());
        ScheduledFuture<?> future = threadPoolTaskScheduler.schedule(tt, new CronTrigger(taskTask.getCron()));
        taskmap.put(taskTask.getTaskDesc(), future);
        log.info("开始");
        TaskTaskVo v = new TaskTaskVo();
        v.setStatus("Y");
        v.setCode(vo.getCode());
        int count = taskService.update(v);
        return success();
    }

    /**
     * @description: 结束
     * @author: LCH
     * @date: 2019-03-07 10:59
     */
    @RequestMapping("/stop")
    @ResponseBody
    public String stop(@RequestBody TaskTaskVo vo) throws Exception {
        if (StringUtils.isBlank(vo.getCode())) {
            return fail("code不能为空");
        }
        TaskTask taskTask = taskService.selectByCode(vo.getCode());
        ScheduledFuture<?> future = taskmap.get(taskTask.getTaskDesc());
        if (future != null) {
            future.cancel(true);
        }
        TaskTaskVo v = new TaskTaskVo();
        v.setStatus("N");
        v.setCode(vo.getCode());
        int count = taskService.update(v);
        log.info("ID【" + taskTask.getCode() + "】任务【" + taskTask.getTaskDesc() + "】停止");
        return success();
    }

    /**
     * @description: 刷新
     * @author: LCH
     * @date: 2019-03-07 11:00
     */
    //@RequestMapping("/change")
    @ResponseBody
    public String change(@RequestBody TaskTaskVo vo) throws Exception {
        if (StringUtils.isBlank(vo.getCode())) {
            return fail("code不能为空");
        }
        TaskTask taskTask = taskService.selectByCode(vo.getCode());
        // 先停止，在开启.
        ScheduledFuture<?> futureTemp = taskmap.get(taskTask.getTaskDesc());
        if (futureTemp != null) {
            futureTemp.cancel(true);
        }
        //启动
        ScheduledFuture<?> future = taskmap.get(taskTask.getTaskDesc());
        TaskThread tt = new TaskThread(vo.getCode(), taskTask.getTaskDesc(), taskTask.getApiUrl());
        future = threadPoolTaskScheduler.schedule(tt, new CronTrigger(taskTask.getCron()));
        log.info("任务重置" + taskTask.getCode() + "  " + taskTask.getTaskDesc());
        return success();
    }

}
