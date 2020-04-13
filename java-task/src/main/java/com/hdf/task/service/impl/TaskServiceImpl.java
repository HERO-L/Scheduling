package com.hdf.task.service.impl;

import cn.hdf.common.utils.Sequence;
import com.hdf.task.entity.TaskTask;
import com.hdf.task.mapper.ITaskTaskMapper;
import com.hdf.task.service.TaskService;
import com.hdf.task.taskVo.TaskTaskVo;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service(value = "TaskService")
public class TaskServiceImpl implements TaskService {
    @Autowired
    private ITaskTaskMapper taskTaskMapper;

    @Override
    public void insert(TaskTaskVo vo) throws Exception {
        TaskTask v = new TaskTask();
        v.setCode(Sequence.nextId());
        v.setApiUrl(vo.getApiUrl());
        v.setCron(vo.getCron());
        v.setDeleteFlag("N");
        v.setStatus("N");
        v.setTaskDesc(vo.getTaskDesc());
        v.setRemark(StringUtils.isBlank(vo.getRemark()) ? "" : vo.getRemark());
        taskTaskMapper.getInsert(v);
    }

    @Override
    public int update(TaskTaskVo vo) throws Exception {
        TaskTask v = new TaskTask();
        v.setCode(vo.getCode());
        if (StringUtils.isNotBlank(vo.getTaskDesc())) {
            v.setTaskDesc(vo.getTaskDesc());
        }
        if (StringUtils.isNotBlank(vo.getApiUrl())) {
            v.setApiUrl(vo.getApiUrl());
        }
        if (StringUtils.isNotBlank(vo.getCron())) {
            v.setCron(vo.getCron());
        }
        if (StringUtils.isNotBlank(vo.getDeleteFlag())) {
            v.setDeleteFlag(vo.getDeleteFlag());
        }
        if (StringUtils.isNotBlank(vo.getRemark())) {
            v.setRemark(vo.getRemark());
        }
        if (StringUtils.isNotBlank(vo.getStatus())) {
            v.setStatus(vo.getStatus());
        }

        return taskTaskMapper.getUpdateBy(v);
    }

    @Override
    public List<TaskTask> getList() throws Exception {
        TaskTask v = new TaskTask();
        v.setDeleteFlag("N");
        return taskTaskMapper.getList(v);
    }

    @Override
    public void delete(TaskTaskVo vo) throws Exception {
        taskTaskMapper.getDelete(vo.getCode());
    }

    @Override
    public TaskTask selectByCode(String code) throws Exception {
        return taskTaskMapper.getBean(code);
    }
}
