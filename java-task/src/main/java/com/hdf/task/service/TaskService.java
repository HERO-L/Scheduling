package com.hdf.task.service;


import com.hdf.task.entity.TaskTask;
import com.hdf.task.taskVo.TaskTaskVo;

import java.util.List;

public interface TaskService {

    void insert(TaskTaskVo vo) throws Exception;

    int update(TaskTaskVo vo) throws Exception;

    List<TaskTask> getList() throws Exception;

    void delete(TaskTaskVo vo) throws Exception;

    TaskTask selectByCode(String code) throws Exception;
}
