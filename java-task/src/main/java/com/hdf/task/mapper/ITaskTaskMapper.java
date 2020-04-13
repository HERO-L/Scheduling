package com.hdf.task.mapper;

import java.util.List;
import java.util.Map;

import com.hdf.task.entity.TaskTask;
import org.apache.ibatis.annotations.Mapper;


/**
 * @实体名称
 * @数据库表 TASK_TASK
 * @开发日期 2019-03-07
 * @技术服务 www.fwjava.com
 */
@Mapper
public interface ITaskTaskMapper {

    /**
     * 1.新增一条数据
     * 注: 根据Bean实体执行新增操作.
     *
     * @param taskTask -
     * @throws Exception - 异常捕捉
     */
    public void getInsert(TaskTask taskTask) throws Exception;


    /**
     * 2.删除一条数据
     * 注: 根据Bean实体的主键ID执行删除操作.
     *
     * @param code - 将主键当做线程ID
     * @return int        - 执行结果
     * @throws Exception - 异常捕捉
     */
    public int getDelete(String code) throws Exception;


    /**
     * 3.变更一条数据
     * 注: 根据Bean实体的主键ID执行变更操作.
     *
     * @param taskTask -
     * @return int        - 执行结果
     * @throws Exception - 异常捕捉
     */
    public int getUpdate(TaskTask taskTask) throws Exception;


    /**
     * 4.获取一个Bean实体
     * 注: 根据Bean实体的主键ID获取一个Bean实体.
     *
     * @param code - 将主键当做线程ID
     * @return TaskTask   - 执行结果
     * @throws Exception - 异常捕捉
     */
    public TaskTask getBean(String code) throws Exception;


    /**
     * 5.条件查询
     * 注: 支持多条件查询、模糊查询、日期比较查询等操作.
     *
     * @param taskTask -
     * @return List<TaskTask>  - 执行结果
     * @throws Exception - 异常捕捉
     */
    public List<TaskTask> getList(TaskTask taskTask) throws Exception;


    /**
     * 6.分页查询
     * 注: 支持分页查询、多条件查询、模糊查询、日期比较查询等操作.
     *
     * @param map - 及分页信息
     *            <br>[参数说明] 如下 , map中有3个固定Key , 且区分大小写.
     *            <br>[键1] bean -  (实体)
     *            <br>[键2] offset - 偏移量 (分页信息)
     *            <br>[键3] rows - 数目 (分页信息)
     * @return List<TaskTask>  - 执行结果
     * @throws Exception - 异常捕捉
     */
    public List<TaskTask> getPageList(Map<String, Object> map) throws Exception;


    /**
     * 7.删除数据
     * 注: 根据Bean实体的主键ID执行删除操作.
     *
     * @param taskTask -
     * @return int        - 执行结果
     * @throws Exception - 异常捕捉
     */
    public int getDeleteBean(TaskTask taskTask) throws Exception;


    /**
     * 8.删除多条数据
     * 注: 根据拼接有限个主键ID执行多条数据的删除操作.
     *
     * @param codes - 将主键当做线程ID
     * @return int        - 执行结果
     * @throws Exception - 异常捕捉
     */
    public int getDeleteIn(String[] codes) throws Exception;


    /**
     * 9.条件删除数据
     * 注: 根据多种条件执行批量删除操作.
     *
     * @param taskTask -
     * @return int        - 执行结果
     * @throws Exception - 异常捕捉
     */
    public int getDeleteBy(TaskTask taskTask) throws Exception;


    /**
     * 10.验证一条数据是否存在
     * 注: 根据主键ID验证该数据是否存在 ,并返回数据量.
     *
     * @param code - 将主键当做线程ID
     * @return int        - 存在数量
     * @throws Exception - 异常捕捉
     */
    public int getCheck(String code) throws Exception;


    /**
     * 11.验证多条件数据是否存在
     * 注: 根据多条件验证该数据是否存在 ,并返回数据量.
     *
     * @param taskTask -
     * @return int        - 存在数量
     * @throws Exception - 异常捕捉
     */
    public int getCheckBy(TaskTask taskTask) throws Exception;


    /**
     * 12.按条件变更一条数据
     * 注: 根据Bean实体的主键ID,只对部分字段执行变更操作.
     *
     * @param taskTask -
     * @return int        - 执行结果
     * @throws Exception - 异常捕捉
     */
    public int getUpdateBy(TaskTask taskTask) throws Exception;


    /**
     * 13.InsertBatch - 批量新增数据
     * 注: 根据List对象执行批量新增操作.
     *
     * @param list - List
     * @throws Exception - 异常捕捉
     */
    public void getInsertBatch(List<TaskTask> list) throws Exception;


    /**
     * 14.UpdateBatch - 批量更新数据
     * 注: 根据List对象执行批量更新操作.
     *
     * @param list - List
     * @throws Exception - 异常捕捉
     */
    public void getUpdateBatch(List<TaskTask> list) throws Exception;


}
