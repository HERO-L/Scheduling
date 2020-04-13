package com.hdf.task.taskVo;


import java.io.Serializable;


/**
 * @实体名称
 * @数表名称 TASK_TASK
 * @开发日期 2019-03-07
 * @技术服务 www.fwjava.com
 */
public class TaskTaskVo {

    /**
     * 将主键当做线程ID(必填项)(主键ID)
     */
    private String code = null;
    /**
     * 任务name
     */
    private String taskDesc = null;
    /**
     * cron表达式
     */
    private String cron = null;
    /**
     * 运行状态Y正在运行N未运行
     */
    private String status = null;
    /**
     * 是否删除Y已删除N未删除
     */
    private String deleteFlag = null;
    /**
     * 接口地址
     */
    private String apiUrl = null;
    /**
     * 任务描述
     */
    private String remark = null;
    /**
     * 排序
     */
    private String orderBy = null;

    /*
     *--------------------------------------------------
     * Getter方法区
     *--------------------------------------------------
     */

    /**
     * 将主键当做线程ID(必填项)(主键ID)
     */
    public String getCode() {
        return code;
    }

    /**
     * 任务name
     */
    public String getTaskDesc() {
        return taskDesc;
    }

    /**
     * cron表达式
     */
    public String getCron() {
        return cron;
    }

    /**
     * 运行状态Y正在运行N未运行
     */
    public String getStatus() {
        return status;
    }

    /**
     * 是否删除Y已删除N未删除
     */
    public String getDeleteFlag() {
        return deleteFlag;
    }

    /**
     * 接口地址
     */
    public String getApiUrl() {
        return apiUrl;
    }

    /**
     * 任务描述
     */
    public String getRemark() {
        return remark;
    }

    /**
     * 排序
     */
    public String getOrderBy() {
        return orderBy;
    }

    /*
     *--------------------------------------------------
     * Setter方法区
     *--------------------------------------------------
     */

    /**
     * 将主键当做线程ID(必填项)(主键ID)
     */
    public void setCode(String code) {
        this.code = code;
    }

    /**
     * 任务name
     */
    public void setTaskDesc(String taskDesc) {
        this.taskDesc = taskDesc;
    }

    /**
     * cron表达式
     */
    public void setCron(String cron) {
        this.cron = cron;
    }

    /**
     * 运行状态Y正在运行N未运行
     */
    public void setStatus(String status) {
        this.status = status;
    }

    /**
     * 是否删除Y已删除N未删除
     */
    public void setDeleteFlag(String deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    /**
     * 接口地址
     */
    public void setApiUrl(String apiUrl) {
        this.apiUrl = apiUrl;
    }

    /**
     * 任务描述
     */
    public void setRemark(String remark) {
        this.remark = remark;
    }

    /**
     * 排序
     */
    public void setOrderBy(String orderBy) {
        this.orderBy = orderBy;
    }


    /*
     *--------------------------------------------------
     * 常用自定义字段
     *--------------------------------------------------
     */


    /*
     *--------------------------------------------------
     * 应用小方法
     *--------------------------------------------------
     */

    /**
     * serialVersionUID
     */
    private static final long serialVersionUID = 1L;


}


/**
 * ------------------------------------------------------
 * Copy专用区
 * ------------------------------------------------------
 * <p>
 * ------------------------------------------------------------------------------------------------------------
 * Setter方法
 * ------------------------------------------------------------------------------------------------------------
 * <p>
 * //
 * TaskTask taskTask = new TaskTask();
 * <p>
 * // 将主键当做线程ID(必填项)(主键ID)
 * taskTask.setCode(  );
 * // 任务name
 * taskTask.setTaskDesc(  );
 * // cron表达式
 * taskTask.setCron(  );
 * // 运行状态Y正在运行N未运行
 * taskTask.setStatus(  );
 * // 是否删除Y已删除N未删除
 * taskTask.setDeleteFlag(  );
 * // 接口地址
 * taskTask.setApiUrl(  );
 * // 任务描述
 * taskTask.setRemark(  );
 * <p>
 * <p>
 * //------ 自定义部分 ------
 * <p>
 * <p>
 * <p>
 * ------------------------------------------------------------------------------------------------------------
 * Getter方法
 * ------------------------------------------------------------------------------------------------------------
 * <p>
 * //
 * TaskTask taskTask = new TaskTask();
 * <p>
 * // 将主键当做线程ID(必填项)(主键ID)
 * taskTask.getCode();
 * // 任务name
 * taskTask.getTaskDesc();
 * // cron表达式
 * taskTask.getCron();
 * // 运行状态Y正在运行N未运行
 * taskTask.getStatus();
 * // 是否删除Y已删除N未删除
 * taskTask.getDeleteFlag();
 * // 接口地址
 * taskTask.getApiUrl();
 * // 任务描述
 * taskTask.getRemark();
 * <p>
 * <p>
 * //------ 自定义部分 ------
 * <p>
 * <p>
 * <p>
 * ------------------------------------------------------------------------------------------------------------
 * Getter Setter方法
 * ------------------------------------------------------------------------------------------------------------
 * <p>
 * //
 * TaskTask taskTask = new TaskTask();
 * <p>
 * // 将主键当做线程ID(必填项)(主键ID)
 * taskTask.setCode( taskTask2.getCode() );
 * // 任务name
 * taskTask.setTaskDesc( taskTask2.getTaskDesc() );
 * // cron表达式
 * taskTask.setCron( taskTask2.getCron() );
 * // 运行状态Y正在运行N未运行
 * taskTask.setStatus( taskTask2.getStatus() );
 * // 是否删除Y已删除N未删除
 * taskTask.setDeleteFlag( taskTask2.getDeleteFlag() );
 * // 接口地址
 * taskTask.setApiUrl( taskTask2.getApiUrl() );
 * // 任务描述
 * taskTask.setRemark( taskTask2.getRemark() );
 * <p>
 * <p>
 * //------ 自定义部分 ------
 * <p>
 * <p>
 * <p>
 * <p>
 * ------------------------------------------------------------------------------------------------------------
 * HTML标签区
 * ------------------------------------------------------------------------------------------------------------
 * <p>
 * ------------------------------------------------------------------------------------------------------------
 * 属性区
 * ------------------------------------------------------------------------------------------------------------
 * <p>
 * <!-- 将主键当做线程ID -->
 * <input name="code" value="" type="text" maxlength="32"/>
 * <!-- 任务name -->
 * <input name="taskDesc" value="" type="text" maxlength="255"/>
 * <!-- cron表达式 -->
 * <input name="cron" value="" type="text" maxlength="32"/>
 * <!-- 运行状态Y正在运行N未运行 -->
 * <input name="status" value="" type="text" maxlength="1"/>
 * <!-- 是否删除Y已删除N未删除 -->
 * <input name="deleteFlag" value="" type="text" maxlength="1"/>
 * <!-- 接口地址 -->
 * <input name="apiUrl" value="" type="text" maxlength="500"/>
 * <!-- 任务描述 -->
 * <input name="remark" value="" type="text" maxlength="255"/>
 * <p>
 * <p>
 * ------------------------------------------------------------------------------------------------------------
 * 表名 + 属性区
 * ------------------------------------------------------------------------------------------------------------
 * <p>
 * <!-- 将主键当做线程ID -->
 * <input name="taskTask.code" value="" type="text" maxlength="32"/>
 * <!-- 任务name -->
 * <input name="taskTask.taskDesc" value="" type="text" maxlength="255"/>
 * <!-- cron表达式 -->
 * <input name="taskTask.cron" value="" type="text" maxlength="32"/>
 * <!-- 运行状态Y正在运行N未运行 -->
 * <input name="taskTask.status" value="" type="text" maxlength="1"/>
 * <!-- 是否删除Y已删除N未删除 -->
 * <input name="taskTask.deleteFlag" value="" type="text" maxlength="1"/>
 * <!-- 接口地址 -->
 * <input name="taskTask.apiUrl" value="" type="text" maxlength="500"/>
 * <!-- 任务描述 -->
 * <input name="taskTask.remark" value="" type="text" maxlength="255"/>
 * <p>
 * <p>
 * ------------------------------------------------------------------------------------------------------------
 * ID + 属性区
 * ------------------------------------------------------------------------------------------------------------
 * <p>
 * <!-- 将主键当做线程ID -->
 * <input id="TT_CODE" name="code" value="" type="text" maxlength="32"/>
 * <!-- 任务name -->
 * <input id="TT_TASK_DESC" name="taskDesc" value="" type="text" maxlength="255"/>
 * <!-- cron表达式 -->
 * <input id="TT_CRON" name="cron" value="" type="text" maxlength="32"/>
 * <!-- 运行状态Y正在运行N未运行 -->
 * <input id="TT_STATUS" name="status" value="" type="text" maxlength="1"/>
 * <!-- 是否删除Y已删除N未删除 -->
 * <input id="TT_DELETE_FLAG" name="deleteFlag" value="" type="text" maxlength="1"/>
 * <!-- 接口地址 -->
 * <input id="TT_API_URL" name="apiUrl" value="" type="text" maxlength="500"/>
 * <!-- 任务描述 -->
 * <input id="TT_REMARK" name="remark" value="" type="text" maxlength="255"/>
 * <p>
 * <p>
 * ------------------------------------------------------------------------------------------------------------
 * ID + 表名 + 属性区
 * ------------------------------------------------------------------------------------------------------------
 * <p>
 * <!-- 将主键当做线程ID -->
 * <input id="TT_CODE" name="taskTask.code" value="" type="text" maxlength="32"/>
 * <!-- 任务name -->
 * <input id="TT_TASK_DESC" name="taskTask.taskDesc" value="" type="text" maxlength="255"/>
 * <!-- cron表达式 -->
 * <input id="TT_CRON" name="taskTask.cron" value="" type="text" maxlength="32"/>
 * <!-- 运行状态Y正在运行N未运行 -->
 * <input id="TT_STATUS" name="taskTask.status" value="" type="text" maxlength="1"/>
 * <!-- 是否删除Y已删除N未删除 -->
 * <input id="TT_DELETE_FLAG" name="taskTask.deleteFlag" value="" type="text" maxlength="1"/>
 * <!-- 接口地址 -->
 * <input id="TT_API_URL" name="taskTask.apiUrl" value="" type="text" maxlength="500"/>
 * <!-- 任务描述 -->
 * <input id="TT_REMARK" name="taskTask.remark" value="" type="text" maxlength="255"/>
 * <p>
 * <p>
 * <p>
 * <p>
 * --------------------------------------------------------
 */


    