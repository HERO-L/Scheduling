package com.hdf.task.utils;

import cn.hdf.common.utils.DateUtils;
import cn.hdf.common.utils.ExceptionUtil;
import cn.hdf.common.utils.HttpUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Date;

/**
 * @description:
 * @author: Admin
 * @date: 2019-03-07 9:16
 */
public class TaskThread implements Runnable {
    private static Logger log = LoggerFactory.getLogger(TaskThread.class);
    private String id;
    private String taskDesc;
    private String apiUrl;

    public TaskThread(String id, String taskDesc, String apiUrl) {
        this.id = id;
        this.taskDesc = taskDesc;
        this.apiUrl = apiUrl;
    }

    @Override
    public void run() {
        //根据传来的参数执行要定时的任务
//        log.info("任务"+id + new Date()+"执行");
        log.info("ID【" + id + "】的任务【" + taskDesc + "】执行>>>时间为+" + DateUtils.getCurrDateTimeStr());
        try {
            String s = HttpUtil.sendGet(apiUrl, "");
            log.info("响应结果" + s);
        } catch (Exception e) {
            log.error("【异常信息】" + ExceptionUtil.getMessage(e));
        }

    }
}
