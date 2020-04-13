/*
 * @description 入口启动脚本
 * @author	wufeng
 * @createtime	2018/01/15
 */

//环境配置
var DEBUG = window.location.host == 'sysweb.scm.zhongpin.cn' ? false : true;

//商品中心API
var SERVER_URL_ITEM_CENTER = DEBUG ? 'http://qa-item.scm.zhongpin.cn' : 'http://item.scm.zhongpin.cn';
//组织中心API
var SERVER_URL_SALEREGION_CENTER = DEBUG ? 'http://qa-user.scm.zhongpin.cn' : 'http://user.scm.zhongpin.cn';
//客户中心API
var SERVER_URL_CUSTOMER_CENTER = DEBUG ? 'http://qa-customer.scm.zhongpin.cn' : 'http://customer.scm.zhongpin.cn';
//定价中心API
var SERVER_URL_PRICE_CENTER = DEBUG ? 'http://qa-price.scm.zhongpin.cn' : 'http://price.scm.zhongpin.cn';
//支付中心API
var SERVER_URL_PAY_CENTER = DEBUG ? 'http://qa-pay.scm.zhongpin.cn' : 'http://pay.scm.zhongpin.cn';
//var SERVER_URL_PAY_CENTER = DEBUG ? 'http://dev-web.zhongpin.cn/src' : 'http://pay.scm.zhongpin.cn';
//订单中信
var SERVER_URL_ORDER_CENTER = DEBUG ? 'http://qa-order.scm.zhongpin.cn' : 'http://order.scm.zhongpin.cn';

//图片服务器	正式 http://pic.gyl.zhongpin.cn/scm-item/original/
var IMG_SERVER_URL = DEBUG ? 'http://qa-pic.scm.zhongpin.cn:8888/scm-item/original/' : 'http://pic.gyl.zhongpin.cn/scm-item/original/';

var PAGE_SIZE = 10;

var PICKER_OPTIONS = {
    shortcuts: [{
        text: '今天',
        onClick(picker) {
            picker.$emit('pick', new Date());
        }
    }, {
        text: '昨天',
        onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
        }
    }, {
        text: '一周前',
        onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
        }
    }]
};

/*
 * @description	接口定义
 */
var API_DOC = {

    //采购-采购订单-根据工厂查商品
    purchselectItemByFactory() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchOrderHead/selectItemByFactory';
    },
    //采购-采购订单-审核
    purchOrderHeadreview() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchOrderHead/review';
    },
    //采购-采购订单-列表
    purchOrderHeadList() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchOrderHead/list';
    },
    //采购-采购订单新增
    purchOrderHeadCreate() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchOrderHead/create';
    },
    //采购-采购订单-产看
    purchOrderHeadQuery() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchOrderHead/detail';
    },
    //采购-采购订单-编辑2018-10-25 17:25:51
    purchOrderHeadUpdate() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchOrderHead/update';
    },

    //采购-采购入库单-列表-删除
    purchorderwareinDelete() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchorderwarein/delete';
    },
    //采购-采购入库单-列表-冲销
    purchorderwareinwriteoff() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchorderwarein/writeoff';
    },
    //采购-采购入库单-审核
    purchorderwareinreview() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchorderwarein/review';
    },
    //采购-采购入库单-列表
    purchorderwareinList() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchorderwarein/list';
    },
    //采购-采购入库单新增
    purchorderwareinCreate() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchorderwarein/create';
    },
    //采购-采购入库单-产看
    purchorderwareinQuery() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchorderwarein/query';
    },
    //采购-采购入库单-编辑2018-10-24 16:28:52
    purchorderwareinUpdate() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchorderwarein/update';
    },


    //采购-采购管理-供应商-列表-删除
    purchDealerDelete() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchDealer/purchDealerDelete';
    },
    //采购-采购管理-供应商-列表-停用
    purchDealerDisable() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchDealer/purchDealerDisable';
    },
    //采购-采购管理-供应商-列表-启用
    purchDealerEnable() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchDealer/purchDealerEnable';
    },
    //采购-采购管理-供应商-列表
    purchDealerList() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchDealer/purchDealerList';
    },
    //采购-采购管理-供应商新增-缩写
    purchDealerSimpleName() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchDealer/purchDealerSimpleName';
    },
    //采购-采购管理-供应商新增-验重复
    purchDealerCheckDealerNameOrSap() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchDealer/purchDealerCheckDealerNameOrSap';
    },
    //采购-采购管理-供应商新增
    purchDealerCreate() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchDealer/purchDealerCreate';
    },
    //采购-采购管理-供应商-产看
    purchDealerQuery() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchDealer/purchDealerQuery';
    },
    //采购-采购管理-供应商编辑2018-10-23 15:22:15
    purchDealerUpdate() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchDealer/purchDealerUpdate';
    },

    //采购-采购管理-供应商资质-编辑保存
    purchDealerTypeZZCreate() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchDealer/purchDealerTypeZZCreate';
    },

    //定价-申请定价-工厂定价 2018-10-22 17:25:27
    applyFacitemImport() {
        return SERVER_URL_PRICE_CENTER + '/scm/price/applyFac/itemImport';
    },

    //采购-采购管理-采购订单类型-列表-启用
    purchOrderTypeEnable() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchOrderType/enable';
    },
    //采购-采购管理-采购订单类型-列表-禁用
    purchOrderTypeDisable() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchOrderType/disable';
    },
    //采购-采购管理-采购订单类型-列表
    purchOrderTypeTypeList() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchOrderType/list';
    },
    //采购-库存管理-采购订单类型新增-编号校验重复
    checkTypeOrName() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchOrderType/checkTypeOrName';
    },
    //采购-库存管理-采购订单类型新增
    purchOrderTypeTypeCreate() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchOrderType/create';
    },
    //采购-库存管理-采购订单类型-产看
    purchOrderTypeTypeQuery() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchOrderType/query';
    },
    //采购-库存管理-采购订单类型编辑
    purchOrderTypeUpdate() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchOrderType/update';
    },

    //采购-采购管理-供应商类型-列表-启用
    purchDealerTypeEnable() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchDealer/purchDealerTypeEnable';
    },
    //采购-采购管理-供应商类型-列表-禁用
    purchDealerTypeDisable() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchDealer/purchDealerTypeDisable';
    },
    //采购-采购管理-供应商类型-列表
    purchDealerTypeList() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchDealer/purchDealerTypeList';
    },
    //采购-库存管理-供应商类型新增-编号校验重复
    purchDealerTypeCheckTypeOrName() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchDealer/purchDealerTypeCheckTypeOrName';
    },
    //采购-库存管理-供应商类型新增
    purchDealerTypeCreate() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchDealer/purchDealerTypeCreate';
    },
    //采购-库存管理-供应商类型-产看
    purchDealerTypeQuery() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchDealer/purchDealerTypeQuery';
    },
    //采购-库存管理-供应商类型编辑
    purchDealerTypeUpdate() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/purchDealer/purchDealerTypeUpdate';
    },


    //库存-库存 中心-出库管理-ru库单-冲销
    stockwareinwriteoff() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockwarein/writeoff';
    },
    //库存-库存 中心-出库管理-ru库单-删除
    stockwareindelete() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockwarein/delete';
    },
    //库存-库存 中心-出库管理-chu库单-冲销
    stockwareoutwriteoff() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockWareOut/waitOff';
    },
    //库存-库存 中心-出库管理-chu库单-删除
    stockwareoutdelete() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockWareOut/delete';
    },
    //库存-库存 中心-出库管理-出库单-审核-保存
    stockWareOutSave() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockWareOut/save';
    },
    //库存-库存 中心-出库管理-出库单-审核-审核
    stockWareOutreview() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockWareOut/review';
    },
    //库存-库存 中心-出库管理-出库单-查看
    stockWareOutDetail() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockWareOut/detail';
    },
    //库存-库存 中心-出库管理-出库单-编辑
    stockWareOutupdate() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockWareOut/update';
    },
    //库存-库存 中心-出库管理-出库单-新增
    stockWareOutcreate() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockWareOut/create';
    },
    //库存-库存 中心-出库管理-出库单-新增-筛选商品
    stockWareOutFilter() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockWareOut/filter';
    },
    //库存-库存 中心-出库管理-出库单列表
    stockWareOutlist() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockWareOut/list';
    },

    //库存-库存 中心-入库管理-入库单-审核
    stockwareinreview() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockwarein/review';
    },
    //库存-库存 中心-入库管理-入库单-查看
    stockwareinquery() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockwarein/query';
    },
    //库存-库存 中心-入库管理-入库单-编辑
    stockwareinupdate() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockwarein/update';
    },
    //库存-库存 中心-入库管理-入库单-新增
    stockwareincreate() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockwarein/create';
    },
    //库存-库存 中心-入库管理-入库单-新增-筛选商品
    stockwareinitemlist() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockwarein/itemlist';
    },
    //库存-库存 中心-入库管理-入库单列表
    stockWareinList() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockwarein/list';
    },

    //库存-仓库管理-仓库商品管理-查看-库存数量
    stockWareTotalQty() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stock/stockWareTotalQty';
    },
    //库存-仓库管理-仓库商品管理-查看
    stockQuery() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stock/stockQuery';
    },
    //库存-仓库管理-仓库商品管理-列表
    stockList() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stock/stockList';
    },
    //库存-库存管理-出库调拨-修改
    stockRuleUpdate() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stock/stockRuleUpdate';
    },
    //库存-库存管理-出库调拨-查看
    stockRuleQuery() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stock/stockRuleQuery';
    },
    //库存-库存管理-出库调拨-删除
    stockRuleDelete() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stock/stockRuleDelete';
    },
    //库存-库存管理-出库调拨-列表
    stockRuleList() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stock/stockRuleList';
    },
    //库存-库存管理-出库调拨-创建
    stockRuleCreate() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stock/stockRuleCreate';
    },
    //库存-库存管理-出库调拨-创建-工厂-对应的仓库品类
    stockRuleFactoryItemTypeAndWare() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stock/stockRuleFactoryItemTypeAndWare';
    },
    //库存-库存管理-出库调拨-创建-工厂列表
    stockRuleFactory() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stock/stockRuleFactory';
    },
    //库存-库存管理-出库库类型-列表-启用
    stockWareOutEnable() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stock/stockWareOutEnable';
    },
    //库存-库存管理-出库类型-列表-禁用
    stockWareOutDisable() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stock/stockWareOutDisable';
    },
    //库存-库存管理-出库库类型-列表
    stockWareOutList() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stock/stockWareOutList';
    },
    //库存-库存管理-出库类型新增
    stockWareOutCreate() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stock/stockWareOutCreate';
    },
    //库存-库存管理-入库库类型-列表-启用
    stockWareInEnable() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stock/stockWareInEnable';
    },
    //库存-库存管理-入库类型-列表-禁用
    stockWareInDisable() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stock/stockWareInDisable';
    },
    //库存-库存管理-入库库类型-列表
    stockWareInList() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stock/stockWareInList';
    },
    //库存-库存管理-入库类型新增
    stockWareInCreate() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stock/stockWareInCreate';
    },

    //定价-工厂定价-审核
    applyFacUpdate() {
        return SERVER_URL_PRICE_CENTER + '/scm/price/applyFac/update';
    },
    //定价-工厂定价-审核
    applyFacReview() {
        return SERVER_URL_PRICE_CENTER + '/scm/price/applyFac/review';
    },
    //定价-工厂定价-查看
    applyFacQuery() {
        return SERVER_URL_PRICE_CENTER + '/scm/price/applyFac/query';
    },
    //定价-工厂定价新增
    applyFacCreate() {
        return SERVER_URL_PRICE_CENTER + '/scm/price/applyFac/create';
    },
    //定价-工厂定价新增-商品对应单位
    applyFacItemList() {
        return SERVER_URL_PRICE_CENTER + '/scm/price/applyFac/itemList';
    },
    //定价-工厂定价新增-工厂对应商品
    factoryItemList() {
        return SERVER_URL_PRICE_CENTER + '/scm/price/applyFac/factoryItemList';
    },

    //物流定价-特殊客户运距-修改
    specialListUpdate() {
        return SERVER_URL_PRICE_CENTER + '/scm/price/special/update';
    },
    //物流定价-特殊客户运距-详情
    specialListDetail() {
        return SERVER_URL_PRICE_CENTER + '/scm/price/special/detail';
    },
    //物流定价-特殊客户运距-新增
    specialListCreate() {
        return SERVER_URL_PRICE_CENTER + '/scm/price/special/create';
    },
    //物流定价-特殊客户运距-列表
    specialList() {
        return SERVER_URL_PRICE_CENTER + '/scm/price/special/list';
    },
    //物流定价特殊商品
    specialItemList() {
        return SERVER_URL_PRICE_CENTER + '/scm/price/special/specialItemList';
    },

    //大区所对应办事处
    listEnableList() {
        return SERVER_URL_PRICE_CENTER + '/scm/price/fac/listEnable';
    },
    //办事处下拉选择列表
    handleSelectList() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/saleHandle/list';
    },

    //装运点-装运点列表
    stockSpotList() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockSpot/spotlist';
    },
    //装运点-装运点新增
    stockSpotCreate() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockSpot/create';
    },
    //装运点-装运点新增-工厂对应二级品类
    selectPitemTypeAndItemType() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockSpot/selectPitemTypeAndItemType';
    },
    //装运点-装运点新增-工厂对应仓库和品类
    factoryNoBindItemTypeAndWare() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockSpot/factoryNoBindItemTypeAndWare';
    },
    //装运点-装运点新增-检查装运点-编号是否重复
    stockSpotCreateIsSpotIdenCode() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockSpot/isSpotIdenCode';
    },
    //装运点-装运点新增-检查装运点-名称是否重复
    stockSpotCreateIsSpotName() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockSpot/isSpotName';
    },
    //装运点-装运点新增-检查工厂对应-品类是否重复
    stockSpotCreateIsItemType() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockSpot/isItemType';
    },
    //装运点-装运点新增-检查工厂对应-仓库是否重复
    stockSpotCreateIsWare() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockSpot/isWare';
    },
    //装运点-装运点查看
    stockSpotQuery() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockSpot/query';
    },
    //装运点-装运点编辑
    stockSpotUpdate() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockSpot/update';
    },
    //装运点-装运点删除
    stockSpotDelete() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockSpot/delete';
    },

    // 库存-仓库列表-启用
    wareEnable() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockWare/wareEnable';
    },
    // 库存-仓库列表-禁用
    wareDisable() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockWare/wareDisable';
    },
    //库存-仓库列表-绑定工厂 
    bindFactory() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockWare/bindFactory';
    },
    //库存-列表查询
    queryWareList() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockWare/query/warelist';
    },
    //库存-仓库列表
    stockWareList() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockWare/warelist';
    },
    //库存-仓库新增
    stockWareCreate() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockWare/create';

    },
    //库存-仓库新增-检查仓库名字是否重复
    stockWareCreateIsWareName() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockWare/isWareName';
    },
    //库存-仓库新增-检查sap是否重复
    stockWareCreateIsSapCode() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockWare/isSapCode';
    },
    //库存-仓库新增-检查仓库编号
    stockWareCreateIsIdenCode() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockWare/isIdenCode';
    },
    //库存-仓库查看
    stockWareQuery() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockWare/query';

    },
    //库存-仓库编辑
    stockWareUpdate() {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/stockWare/update';
    },


    //返利费用单-新建
    payCostCreate: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/payCost/create';
    },
    //返利费用单-列表
    payCostList: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/payCost/list';
    },
    //返利费用单-编辑
    payCostTypeUpdate: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/payCost/update';
    },
    //返利费用单-查看
    payCostQuery: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/payCost/query';
    },
    //返利费用单-删除
    payCostDelete: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/payCost/deleteForHead';
    },
    //返利费用单-删除I详细
    payCostDeleteDetail: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/payCost/deleteForDetail';
    },
    //返利费用单-审核
    payCostReview: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/payCost/review';
    },

    //距离-列表
    saleFactoryHandleDistanceType: function () {
        return SERVER_URL_CUSTOMER_CENTER + '/scm/customer/saleFactoryHandleDistance/list';
    },
    //距离-新增
    saleFactoryHandleDistanceCreate: function () {
        return SERVER_URL_CUSTOMER_CENTER + '/scm/customer/saleFactoryHandleDistance/create';
    },
    //距离-修改
    saleFactoryHandleDistanceUpdate: function () {
        return SERVER_URL_CUSTOMER_CENTER + '/scm/customer/saleFactoryHandleDistance/update';
    },
    //距离-删除
    saleFactoryHandleDistanceDelete: function () {
        return SERVER_URL_CUSTOMER_CENTER + '/scm/customer/saleFactoryHandleDistance/delete';
    },
    //距离-查看
    saleFactoryHandleDistanceQuery: function () {
        return SERVER_URL_CUSTOMER_CENTER + '/scm/customer/saleFactoryHandleDistance/queryDistance';
    },

    //鲜品返利系统-调整单-新增-导入
    promotionRebateImport: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/promotionRebateGrain/batchimport';
    },
    //肉粒系统-调整单-新增-导入
    promotionMeatImport: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/promotionMeatGrainAdjust/batchimport';
    },

    //反馈内容-列表
    cusDealerFeedbackList: function () {
        return SERVER_URL_CUSTOMER_CENTER + '/scm/customer/cusDealerFeedback/list';
    },
    //反馈内容-查看
    cusDealerFeedbackQuery: function () {
        return SERVER_URL_CUSTOMER_CENTER + '/scm/customer/cusDealerFeedback/query';
    },
    //反馈内容-处理
    cusDealerFeedbackProcess: function () {
        return SERVER_URL_CUSTOMER_CENTER + '/scm/customer/cusDealerFeedback/process';
    },
    //反馈类型-列表
    cusDealerFeedbackListType: function () {
        return SERVER_URL_CUSTOMER_CENTER + '/scm/customer/cusDealerFeedback/listType';
    },
    //反馈类型-新增
    cusDealerFeedbackCreate: function () {
        return SERVER_URL_CUSTOMER_CENTER + '/scm/customer/cusDealerFeedback/create';
    },
    //反馈类型-修改
    cusDealerFeedbackUpdate: function () {
        return SERVER_URL_CUSTOMER_CENTER + '/scm/customer/cusDealerFeedback/update';
    },
    //反馈类型-删除
    cusDealerFeedbackDelete: function () {
        return SERVER_URL_CUSTOMER_CENTER + '/scm/customer/cusDealerFeedback/delete';
    },

    //申请修改手机号列表
    cusDealerApplicationEditList: function () {
        return SERVER_URL_CUSTOMER_CENTER + '/scm/customer/cusDealerApplication/list';
    },
    //申请修改手机号-新增
    cusDealerApplicationCreate: function () {
        return SERVER_URL_CUSTOMER_CENTER + '/scm/customer/cusDealerApplication/create';
    },
    //申请修改手机号-新增-查询是否已存在
    cusDealerApplicationIsMobile: function () {
        return SERVER_URL_CUSTOMER_CENTER + '/scm/customer/cusDealerApplication/isMobile';
    },
    //申请修改手机号-编辑
    cusDealerApplicationUpdate: function () {
        return SERVER_URL_CUSTOMER_CENTER + '/scm/customer/cusDealerApplication/update';
    },
    //申请修改手机号-查看
    cusDealerApplicationQuery: function () {
        return SERVER_URL_CUSTOMER_CENTER + '/scm/customer/cusDealerApplication/query';
    },
    //申请修改手机号-审核
    cusDealerApplicationReview: function () {
        return SERVER_URL_CUSTOMER_CENTER + '/scm/customer/cusDealerApplication/review';
    },
    //申请修改手机号-删除
    cusDealerApplicationDelete: function () {
        return SERVER_URL_CUSTOMER_CENTER + '/scm/customer/cusDealerApplication/delete';
    },

    //客户中心--经销商客户--门店审核--门店编号校验唯一性
    getcheckSapCode: function () {
        return SERVER_URL_CUSTOMER_CENTER + '/scm/customer/cusDealerStore/checkSapCode';
    },

    //工厂调价单--导入
    priceFacItemImport: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/fac/itemImport/';
    },

    //工厂调价单--SAP导入
    priceFacItemSAPImport: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/fac/itemImportFromSap/';
    },

    //客户申请定价--导入
    priceDealItemImport: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/deal/itemImport';
    },

    //肉粒系统--使用规则--列表
    promotionMeatGrainRuleList: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/promotionMeatGrainRule/list';
    },

    //肉粒系统--使用规则--创建
    promotionMeatGrainRuleCreate: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/promotionMeatGrainRule/create';
    },

    //肉粒系统--使用规则--品类是否重复
    promotionMeatGrainRuleIsPitemTypeName: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/promotionMeatGrainRule/isPitemTypeName';
    },

    //肉粒系统--使用规则--删除
    promotionMeatGrainRuleDelete: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/promotionMeatGrainRule/delete';
    },

    //肉粒系统--肉粒调整单--列表
    promotionMeatGrainAdjustList: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/promotionMeatGrainAdjust/list';
    },

    //肉粒系统--肉粒调整单--创建
    promotionMeatGrainAdjustCreate: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/promotionMeatGrainAdjust/create';
    },

    //肉粒系统--肉粒调整单--回显
    promotionMeatGrainAdjustListDetail: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/promotionMeatGrainAdjust/listDetail';
    },

    //肉粒系统--肉粒调整单--编辑
    promotionMeatGrainAdjustUpdate: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/promotionMeatGrainAdjust/update';
    },

    //肉粒系统--肉粒调整单--审核
    promotionMeatGrainAdjustReview: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/promotionMeatGrainAdjust/review';
    },

    //肉粒系统--肉粒调整单--删除
    promotionMeatGrainAdjustDelete: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/promotionMeatGrainAdjust/delete';
    },

    //肉粒系统--客户肉粒--列表
    deaMeatGrainList: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/deaMeatGrain/list';
    },

    //肉粒系统--客户肉粒--全部
    deaMeatGrainMeatGrainlist: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/deaMeatGrain/meatGrainlist';
    },

    //肉粒系统--客户肉粒--查看历史记录
    deaMeatGrainMeatGrainQueryMeatGrain: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/deaMeatGrain/queryMeatGrain';
    },

    //肉粒系统--客户肉粒--查看整体历史记录
    deaMeatGrainMeatGrainWholePromotionMeatGrain: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/deaMeatGrain/wholePromotionMeatGrain';
    },


    //返利系统--使用规则--列表
    promotionRebateGrainRuleList: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/promotionRebateGrainRule/list';
    },
    //返利系统--使用规则--创建
    promotionRebateGrainRuleCreate: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/promotionRebateGrainRule/create';
    },
    //返利系统--使用规则--品类是否重复
    promotionRebateGrainRuleIsPitemTypeName: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/promotionRebateGrainRule/isPitemTypeName';
    },
    //返利系统--使用规则--删除
    promotionRebateGrainRuleDelete: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/promotionRebateGrainRule/delete';
    },
    //返利系统--鲜品调价单--列表
    promotionRebateGrainAdjustList: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/promotionRebateGrain/list';
    },
    //返利系统--鲜品调价单--创建
    promotionRebateGrainAdjustCreate: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/promotionRebateGrain/create';
    },
    //返利系统--鲜品调价单--查看回显
    promotionRebateGrainAdjustListDetail: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/promotionRebateGrain/query';
    },
    //返利系统--鲜品调价单--编辑
    promotionRebateGrainAdjustUpdate: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/promotionRebateGrain/update';
    },
    //返利系统--鲜品调价单--审核
    promotionRebateGrainAdjustReview: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/promotionRebateGrain/review';
    },
    //返利系统--鲜品调价单--删除
    promotionRebateGrainAdjustDelete: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/promotionRebateGrain/delete';
    },
    //返利系统--返利金额--列表
    deaRebateGrainList: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/deaRebateGrain/list';
    },
    //返利系统--返利金额--全部
    deaRebateGrainRebateGrainlist: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/deaRebateGrain/rebateGrains';
    },
    //返利系统--返利金额--查看历史记录
    deaRebateGrainRebateGrainQueryRebateGrain: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/deaRebateGrain/queryRebateGrain';
    },
    //返利系统--返利金额--查看整体历史记录
    deaRebateGrainRebateGrainWholePromotionRebateGrain: function () {
        return SERVER_URL_PAY_CENTER + '/scm/pay/deaRebateGrain/quryWholeRebateGrain';
    },


    //定价中心--合同定价--列表
    contractListEnable: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/con/listEnable';
    },

    //定价中心--合同定价--调价单列表
    contractlistHead: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/con/listHead';
    },

    //定价中心--合同定价--调价单列表--查看详情
    contractlistHeadDetail: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/con/listDetail';
    },

    //定价中心--合同定价--调价单列表--查看详情---价格详情
    contractItemlistDetail: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/con/ItemlistDetail';
    },

    //定价中心--合同定价--新增--筛选
    contractlistConByMap: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/con/listConByMap';
    },

    //定价中心--合同定价--新增--筛选--点击确定
    contractlistItemByPitemTypeCode: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/con/listItemByPitemTypeCode';
    },
    //定价中心--合同定价--新增--筛选--点击确定
    conListItemByPitemTypeCodeForScreen: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/con/listItemByPitemTypeCodeForScreen';
    },

    //定价中心--合同定价--新增--提交
    contractcreate: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/con/create';
    },

    //合同定价--调价单详情--修改使用
    priceConAdjustDetail: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/con/adjustDetail';
    },

    //合同定价--修改调价单
    priceConUpdate: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/con/update';
    },

    //定价中心--物流定价--配置列表
    priceDisList: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/dis/list';
    },

    //定价中心--物流定价--配置列表
    priceDisList: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/dis/list';
    },

    //定价中心--物流定价--配置--新增
    priceDisCreateAdjust: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/dis/createAdjust';
    },

    //定价中心--物流定价--配置--修改
    priceDisUpdateAdjust: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/dis/updateAdjust';
    },

    //定价中心--物流定价--配置--删除
    priceDisDeleteAdjust: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/dis/deleteAdjust';
    },

    //定价中心--物流定价--调价单--列表
    priceDisListHead: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/dis/listHead';
    },

    //定价中心--物流定价--列表
    priceDisListEnable: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/dis/listEnable';
    },

    //定价中心--物流定价--调价单--新增
    priceDisListItem: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/dis/listItem';
    },

    //定价中心--物流定价--调价单--新增--保存
    priceDisCreate: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/dis/create';
    },

    //定价中心--物流定价--调价单--查看
    priceListDetail: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/dis/listDetail';
    },

    //定价中心--物流定价--调价单--修改--保存
    priceDisUpdate: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/dis/update';
    },

    //定价中心--物流定价--列表--审核
    priceDisAdjustReview: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/adjust/review';
    },

    //定价中心--物流定价--新增--配置获取
    priceDisListAdjust: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/dis/listAdjust';
    },

    //工厂定价--工厂维护区域价格--列表
    priceFacRegList: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/facReg/list';
    },

    //工厂定价--工厂维护区域价格--新增
    priceFacRegCreate: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/facReg/create';
    },

    //工厂定价--工厂维护区域价格--查看
    priceFacRegQuery: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/facReg/query';
    },

    //工厂定价--工厂维护区域价格--修改
    priceFacRegUpdate: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/facReg/update';
    },

    //申请定价--列表
    priceDealList: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/deal/list';
    },

    //申请定价--新增
    priceDealCreate: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/deal/create';
    },

    //申请定价--修改
    priceDealUpdate: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/deal/update';
    },

    //申请定价--审核
    priceDealReview: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/deal/review';
    },

    //申请定价--查看
    priceDealQuery: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/deal/query';
    },

    //申请定价--查看商品信息
    dealItemList: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/item/dealItemList';
    },

    //申请定价--查看商品信息
    dealItemListWithEnable: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/item/dealItemListWithEnable';
    },

    //渠道定价--筛选
    priceChaListChaByMap: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/cha/listChaByMap';
    },

    //渠道定价-创建-商品调价
    dealChaListItemByPitemTypeCode: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/cha/listItemByPitemTypeCode';
    },
    //渠道定价-创建-商品调价
    chaListItemByPitemTypeCodeForScreen: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/cha/listItemByPitemTypeCodeForScreen';
    },

    //渠道定价--创建调价单
    priceChaCreate: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/cha/create';
    },

    //渠道定价--调价单列表
    priceChaListHead: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/cha/listHead';
    },

    //渠道定价--调价单详情
    priceChaListDetail: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/cha/listDetail';
    },

    //渠道定价--调价单详情--修改使用
    priceChaAdjustDetail: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/cha/adjustDetail';
    },

    //渠道定价--修改调价单
    priceChaUpdate: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/cha/update';
    },

    //申请定价--查看商品价格详情
    dealItemlistDetail: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/cha/ItemlistDetail';
    },

    //申请定价--渠道定价列表
    dealItemlistEnable: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/cha/listEnable';
    },

    //申请定价--导入
    dealItemImport: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/deal/itemImport';
    },

    //客户申请定价--SAP导入
    dealItemSAPImport: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/deal/priceImportFromSAPThread/';
    },

    //客户申请定价--SAP阶梯价导入
    dealItemSAPLadderImport: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/deal/priceLadderImportFromSAP/';
    },

    //申请定价--批量审核/批量驳回
    dealReviewList: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/deal/reviewList';
    },

    //商品组管理--获取分类集合
    queryPitemType: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/itemType/queryPitemType';
    },

    //商品组管理--获取计量单位
    itemUnit: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/itemUnit/list';
    },

    //商品组管理--获取规格集合
    queryItemTypeSpec: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/itemType/queryItemTypeSpec';
    },

    //商品组管理--获取最大商品编号
    selectMaxTitemIdenCode: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/item/selectMaxTitemIdenCode';
    },

    //商品组管理--创建商品
    itemCreate: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/item/create';
    },

    //商品组管理--创建商品--商品组名称校验
    itemCheckPitemIdenCode: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/item/checkPitemIdenCode';
    },

    //商品组管理--创建商品--商品编码校验
    itemCheckItemIdenCode: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/item/checkItemIdenCode';
    },

    //商品组管理--创建商品--商品SAP编码校验
    itemCheckSapCode: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/item/checkSapCode';
    },

    //商品组管理--创建商品--商品名称校验
    itemCheckItemName: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/item/checkItemName';
    },

    //商品组管理--创建商品--上传图片
    itemCreateUploadPic: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/item/uploadPic';
    },

    //商品管理---列表
    titemRegionList: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/titemRegion/list';
    },

    //营销区域列表
    saleRegionRegionList: function () {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/saleRegion/regionList';
    },

    //工厂列表
    saleFactoryList1: function () {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/saleFactory/list';
    },

    //大区办事处列表
    saleRegionRegionAndHandleList: function () {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/saleRegion/regionAndHandleList';
    },

    //大区列表
    saleRegionList: function () {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/saleRegion/list';
    },

    //渠道列表
    salechannelList: function () {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/salechannel/list';
    },

    //区域查询办事处
    saleRegionQuery: function () {
        return SERVER_URL_SALEREGION_CENTER + '/scm/user/saleRegion/query';
    },

    //经销商基本资料
    cusDealervaletOrder: function () {
        return SERVER_URL_CUSTOMER_CENTER + '/scm/customer/cusDealer/cusDealervaletOrder';
    },

    //经销商手机号
    queryAllDealerByMobile: function () {
        return SERVER_URL_CUSTOMER_CENTER + '/scm/customer/cusDealer/queryAllDealerByMobile';
    },

    //经销商手机号-主客户
    primaryDealerMobile: function () {
        return SERVER_URL_CUSTOMER_CENTER + '/scm/customer/cusDealer/primaryDealerMobile';
    },

    //商品组管理---删除
    itemPitemDelete: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/pitem/delete';
    },

    //商品管理---上下架
    itemUpdateEnable: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/titemRegion/updateEnable';
    },
    //商品管理---批量上架
    itemBatchSJ: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/titemRegion/itemBatchSJ';
    },
    //商品管理---批量下架
    itemBatchXJ: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/titemRegion/itemBatchXJ';
    },

    //商品管理---查看
    titemRegionQuery: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/titemRegion/query';
    },

    //商品维护--列表
    itemList: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/item/list';
    },

    //商品维护--启用/禁用
    itemUpdateEnableOne: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/item/updateEnable';
    },

    //商品维护--删除
    itemDelete: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/item/delete';
    },

    //商品维护--校验是否上架/下架
    deleteItem: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/item/deleteItem';
    },

    //商品组维护--列表
    itemPitemList: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/pitem/list';
    },

    //商品组维护--回显
    itemQuery: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/item/query';
    },

    //商品组维护--修改
    itemUpdate: function () {
        return SERVER_URL_ITEM_CENTER + '/scm/item/item/update';
    },

    //组织体系--销售公司--列表
    salesCompanyList: function () {
        return 'http://qa-user.scm.zhongpin.cn/scm/user/saleCompany/listjson';
    },

    //组织体系--销售公司--添加
    salesCompanyAdd: function () {
        return 'http://qa-user.scm.zhongpin.cn/scm/user/saleCompany/insert';
    },

    //组织体系--销售公司--编辑
    salesCompanyEdit: function () {
        return 'http://qa-user.scm.zhongpin.cn/scm/user/saleCompany/update';
    },

    //组织体系--销售公司--查看
    salesCompanyView: function () {
        return 'http://qa-user.scm.zhongpin.cn/scm/user/saleCompany/query';
    },

    //组织体系--销售公司--导出
    salesCompanyExport: function () {
    },

    //组织体系--办事处--列表
    officeList: function () {
        return 'http://qa-user.scm.zhongpin.cn/scm/user/handle/listjson';
    },

    //组织体系--办事处--大区列表
    officeListDQ: function () {
        return 'http://qa-user.scm.zhongpin.cn/scm/user/handle/saleRegional';
    },

    //组织体系--办事处--添加
    officeAdd: function () {
        return 'http://qa-user.scm.zhongpin.cn/scm/user/handle/insert';
    },

    //组织体系--办事处--编辑
    officeEdit: function () {
        return 'http://qa-user.scm.zhongpin.cn/scm/user/handle/update';
    },

    //组织体系--办事处--查看
    officeView: function () {
        return 'http://qa-user.scm.zhongpin.cn/scm/user/handle/query';
    },

    //组织体系--办事处--导出
    officeExport: function () {
    },

    //组织体系--办事处--校验包含的城市是否存在
    isIncludeCity: function () {
        return 'http://qa-user.scm.zhongpin.cn/scm/user/handle/isIncludeCity';
    },

    //组织体系--销售工厂--列表
    saleFactoryList: function () {
        return 'http://qa-user.scm.zhongpin.cn/scm/user/saleFactory/listjson';
    },

    //组织体系--销售工厂--添加
    saleFactoryAdd: function () {
        return 'http://qa-user.scm.zhongpin.cn/scm/user/saleFactory/insert';
    },

    //组织体系--销售工厂--编辑
    saleFactoryEdit: function () {
        return 'http://qa-user.scm.zhongpin.cn/scm/user/saleFactory/update';
    },

    //组织体系--销售工厂--查看
    saleFactoryView: function () {
        return 'http://qa-user.scm.zhongpin.cn/scm/user/saleFactory/querySaleFactory';
    },

    //经营品类
    salesFactoryItemTypeList: function () {
        return 'http://qa-user.scm.zhongpin.cn/scm/user/saleFactory/salesFactoryItemType';
    },

    //组织体系--销售工厂--导出
    saleFactoryExport: function () {
    },

    //组织体系--销售区域--列表
    saleRegionalList: function () {
        return 'http://qa-user.scm.zhongpin.cn/scm/user/saleRegional/listjson';
    },

    //组织体系--销售区域--添加
    saleRegionalAdd: function () {
        return 'http://qa-user.scm.zhongpin.cn/scm/user/saleRegional/insert';
    },

    //组织体系--销售区域--编辑
    saleRegionalEdit: function () {
        return 'http://qa-user.scm.zhongpin.cn/scm/user/saleRegional/update';
    },

    //组织体系--销售区域--查看
    saleRegionalView: function () {
        return 'http://qa-user.scm.zhongpin.cn/scm/user/saleRegional/query';
    },

    //组织体系--销售区域--关联工厂
    saleRegionalUpdateFactory: function () {
        return 'http://qa-user.scm.zhongpin.cn/scm/user/saleRegional/updateFactory';
    },

    //组织体系--销售区域--导出
    saleRegionalExport: function () {
    },

    //经营范围列表
    scopeBusinessListIN: function () {
        return 'http://qa-user.scm.zhongpin.cn/scm/user/saleCompany/scopeBusinessEnum';
    },

    //销售渠道列表
    salesChannelsListIN: function () {
        return 'http://qa-price.scm.zhongpin.cn/scm/price/dealersChannel/list';
    },

    //经销商定价--品类定价规则--列表
    categoryList: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/itemPriceAdjustRule/listjson';
    },

    //经销商定价--品类定价规则--修改
    categoryUpdate: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/itemPriceAdjustRule/update';
    },

    //经销商定价--品类定价规则--绑定
    categoryUpdatesave: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/itemPriceAdjustRule/save';
    },

    //经销商定价--品类定价规则--修改--回显数据
    categoryToUpdate: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/itemPriceAdjustRule/toUpdate';
    },

    //经销商定价--品类定价规则--修改--下拉框
    categoryenumlToList: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/itemPriceAdjustRule/enumToList';
    },

    //经销商定价--申请定价--列表
    applicationPricingList: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/itemPriceDeal/listjson';
    },

    //经销商定价--申请定价--审核/驳回
    applicationPricingUpdateStatus: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/itemPriceDeal/updateStatus';
    },

    //经销商定价--申请定价--修改保存
    applicationPricingUpdate: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/itemPriceDeal/update';
    },

    //经销商定价--申请定价--修改--回显数据
    applicationPricingtoUpdate: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/itemPriceDeal/toUpdate';
    },

    //经销商定价--申请定价--添加
    applicationPricingAdd: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/itemPriceDeal/save';
    },

    //经销商定价--申请定价--添加--下拉框选项
    applicationPricingAddtoList: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/itemPriceDeal/toList';
    },

    //经销商定价--申请定价--新增--下拉框选项--客户账号/名称  dealersList
    applicationPricingAdddealersUserjson: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/itemPriceDeal/dealersUserJson';
    },

    //经销商定价--申请定价--新增--下拉框选项--商品信息  itemList
    applicationPricingAdditemjson: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/itemPriceDeal/itemjson';
    },

    //经销商定价--客户属性--渠道因素--列表
    channelMaintenancelistEnable: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/cha/listEnable';
    },

    //经销商定价--客户属性--渠道因素--调价单列表
    channelMaintenancelistHead: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/cha/listHead';
    },

    //经销商定价--客户属性--渠道因素--调价单列表--新增--筛选(商品列表)
    channelMaintenancelistItem: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/cha/listItem';
    },

    //经销商定价--客户属性--渠道因素--调价单列表--新增
    channelMaintenancecreate: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/cha/create';
    },

    //经销商定价--客户属性--渠道因素--调价单列表--查看详情
    channelMaintenancelistDetail: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/cha/listDetail';
    },

    //经销商定价--客户属性--渠道因素--调价单列表--编辑
    channelMaintenanceupdate: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/cha/update';
    },

    //经销商定价--客户属性--渠道因素--渠道维护--列表
    channelMaintenanceList: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/dealersChannel/listjson';
    },

    //经销商定价--客户属性--渠道因素--渠道维护--列表--启用/禁用
    channelMaintenanceupdateStatus: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/dealersChannel/updateStatus';
    },

    //经销商定价--客户属性--渠道因素--渠道维护--新增
    channelMaintenanceAdd: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/dealersChannel/save';
    },

    //经销商定价--客户属性--渠道因素--渠道维护--新增--判断是否重复
    channelMaintenancecheckName: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/dealersChannel/checkName';
    },

    //经销商定价--客户属性--合同因素--列表
    agreementList: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/itemPriceAdjustContract/toList';
    },

    //经销商定价--客户属性--合同因素--列表--下拉框
    agreementLists: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/itemPriceAdjustContract/lists';
    },

    //经销商定价--客户属性--合同因素--调价单列表
    agreementheadList: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/itemPriceAdjustContract/headList';
    },

    //经销商定价--客户属性--合同因素--调价单列表--新增--筛选弹窗
    agreementheadtoSearch: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/itemPriceAdjustContract/toSearch';
    },

    //经销商定价--客户属性--合同因素--调价单列表--新增
    agreementheadsave: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/itemPriceAdjustContract/save';
    },

    //经销商定价--客户属性--合同因素--调价单列表--编辑
    agreementupdate: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/itemPriceAdjustContract/update';
    },

    //经销商定价--客户属性--合同因素--调价单列表--查看详情
    agreementheaddetail: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/itemPriceAdjustContract/detail';
    },

    //经销商定价--物流因素--列表
    logisticstoList: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/dis/toList';
    },

    //经销商定价--物流因素--调价单列表
    logisticstoheadList: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/dis/headList';
    },

    //经销商定价--物流因素--调价单--分类列表
    logisticsttoSearch: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/dis/toSearch';
    },

    //经销商定价--物流因素--调价单--新增
    logisticstSave: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/dis/save';
    },

    //经销商定价--物流因素--调价单--详情
    logisticstdetail: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/dis/detail';
    },

    //经销商定价--物流因素--调价单--编辑
    logisticstUpdate: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/dis/update';
    },

    //经销商定价--营销区域因素--列表(当前生效单明细)
    arealistEnable: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/reg/listEnable';
    },

    //经销商定价--营销区域因素--调价单列表(单据列表)
    arealistlistHead: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/reg/listHead';
    },

    //经销商定价--营销区域因素--调价单--新增(商品列表)
    arealistlistlistItem: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/reg/listItem';
    },

    //经销商定价--营销区域因素价--新增
    priceRegCreate: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/reg/create';
    },

    //经销商定价--营销区域因素价--修改
    priceRegUpdate: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/reg/update';
    },

    //经销商定价--营销区域因素价--详情
    priceRegListDetail: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/reg/listDetail';
    },

    //经销商定价--单据--审核
    priceAdjustReview: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/adjust/review';
    },

    //经销商定价--单据--复制
    priceAdjustCopy: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/adjust/copyAdjust';
    },


    //经销商定价--工厂基础价--当前生效单明细
    priceFacListEnable: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/adjust/review';
    },

    //经销商定价--工厂基础价--单据列表
    priceFacListHead: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/fac/listHead';
    },

    //经销商定价--工厂基础价--商品列表
    priceFacListHItem: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/fac/listItem';
    },

    //经销商定价--工厂基础价--新增
    priceFacCreate: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/fac/create';
    },

    //经销商定价--工厂基础价--详情
    priceFacListDetail: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/fac/listDetail';
    },

    //经销商定价--工厂基础价--编辑
    priceFacUpdate: function () {
        return SERVER_URL_PRICE_CENTER + '/scm/price/fac/update';
    },

    //商品品类
    itemTypeList: function () {
        // return 'http://qa-item.scm.zhongpin.cn/scm/itemType/allList.html';
        // return SERVER_URL_PRICE_CENTER + '/scm/itemType/allList';
    },
    //订单中心-订单列表-确定使用返利金额
    updateOrderReabate: function () {
        return SERVER_URL_ORDER_CENTER + '/scm/order/order/updateOrderReabate';
    },

};

/**
 * app类
 **/
(function (Vue, owner) {

    /*
     * @description 校验类
     */
    owner.validate = {
        //是否为保留两位数字
        price: function (str) {
            var reg = /^\d{0,8}\.{0,1}(\d{1,2})?$/;
            if (!(reg.test(str))) {
                return false;
            }
            return true;
        },


        //正整数
        inte: function (str) {
            if (!(/^[0-9]*[1-9][0-9]*$/.test(str))) {
                return false;
            }
            return true;
        },

        //正整数包含零
        inteZero: function (str) {
            if (!(/^[0-9]+$/.test(str))) {
                return false;
            }
            return true;
        },

        //中英文数字
        cnEnNum: function (str) {
            if (!(/^[A-Za-z0-9\u4e00-\u9fa5]+$/.test(str))) {
                return false;
            }
            return true;
        },

        //匹配字符串中任何位置出现的空格
        spaceStr: function (str) {
            if (!(/(^\s+)|(\s+$)|\s+/g.test(str))) {
                return false;
            }
            return true;
        },

        //检验手机号
        phoneNum: function (str) {
            if (!(/^1[34578]\d{9}$/.test(str))) {
                return false;
            }
            return true;
        }
    }

    /**
     * 判断数组里是否有重复元素 -- 通过哈希
     var ary = newArray("111","22","33","111","22");
     alert(isRepeat(ary));
     // 验证重复元素，有重复返回true；否则返回false
     * @param {Object} arr
     */
    owner.isRepeat = function (arr) {
        var hash = {};
        for (var i in arr) {
            if (hash[arr[i]]) {
                return true;
            }
            // 不存在该元素，则赋值为true，可以赋任意值，相应的修改if判断条件即可
            hash[arr[i]] = true;
        }
        return false;
    }

    /**
     * JavaScript类型判断
     * @param {Object} obj
     * @example    https://github.com/mqyqingfeng/Blog/issues/30
     */
    owner.isPlainObject = function (obj) {

        // 上节中写 type 函数时，用来存放 toString 映射结果的对象
        var class2type = {};

        // 相当于 Object.prototype.toString
        var toString = class2type.toString;

        // 相当于 Object.prototype.hasOwnProperty
        var hasOwn = class2type.hasOwnProperty;


        return (function () {
            var proto, Ctor;

            // 排除掉明显不是obj的以及一些宿主对象如Window
            if (!obj || toString.call(obj) !== "[object Object]") {
                return false;
            }

            /**
             * getPrototypeOf es5 方法，获取 obj 的原型
             * 以 new Object 创建的对象为例的话
             * obj.__proto__ === Object.prototype
             */
            proto = Object.getPrototypeOf(obj);

            // 没有原型的对象是纯粹的，Object.create(null) 就在这里返回 true
            if (!proto) {
                return true;
            }

            /**
             * 以下判断通过 new Object 方式创建的对象
             * 判断 proto 是否有 constructor 属性，如果有就让 Ctor 的值为 proto.constructor
             * 如果是 Object 函数创建的对象，Ctor 在这里就等于 Object 构造函数
             */
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;

            // 在这里判断 Ctor 构造函数是不是 Object 构造函数，用于区分自定义构造函数和 Object 构造函数
            return typeof Ctor === "function" && hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object);
        })();

    }

    /**
     * @description 复制对象
     * @param {Object} obj
     * @example    https://segmentfault.com/a/1190000010183865
     */
    owner.extend = function () {

        var _this = this;

        // 默认不进行深拷贝
        var deep = false;
        var name, options, src, copy, clone, copyIsArray;
        var length = arguments.length;
        // 记录要复制的对象的下标
        var i = 1;
        // 第一个参数不传布尔值的情况下，target 默认是第一个参数
        var target = arguments[0] || {};
        // 如果第一个参数是布尔值，第二个参数是 target
        if (typeof target == 'boolean') {
            deep = target;
            target = arguments[i] || {};
            i++;
        }
        // 如果target不是对象，我们是无法进行复制的，所以设为 {}
        if (typeof target !== "object" && !isFunction(target)) {
            target = {};
        }

        // 循环遍历要复制的对象们
        for (; i < length; i++) {
            // 获取当前对象
            options = arguments[i];
            // 要求不能为空 避免 extend(a,,b) 这种情况
            if (options != null) {
                for (name in options) {
                    // 目标属性值
                    src = target[name];
                    // 要复制的对象的属性值
                    copy = options[name];

                    // 解决循环引用
                    if (target === copy) {
                        continue;
                    }

                    // 要递归的对象必须是 plainObject 或者数组
                    if (deep && copy && (_this.isPlainObject(copy) ||
                        (copyIsArray = Array.isArray(copy)))) {
                        // 要复制的对象属性值类型需要与目标属性值相同
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && Array.isArray(src) ? src : [];

                        } else {
                            clone = src && _this.isPlainObject(src) ? src : {};
                        }

                        target[name] = _this.extend(deep, clone, copy);

                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }

        return target;
    }

    /**
     * @description 请求数据的公共类
     * @param {Object} url
     * @param {Object} requestType【get|post】
     * @param {Object} options
     * @param {Object} callback
     */
    owner.httpRequest = function (url, requestType, options, callback) {

        var _this = this;

        var defaults = {
            emulateJSON: false,
            headers: {
                "paasloginUserId": get_cookie("paasloginUserId"),
                "paasloginUserName": get_cookie("paasloginUserName")
            },
            responseType: 'json',
            _timeout: 50000,
//				//拦截timeout方法2
//				onTimeout: (request) => {
//  	        	console.log('timeout');
//				},
//				timeout: 10000,
            before: function (request) {
            }
        };

        options = _this.extend(true, defaults, options);

        options.params.appid = '12345';

        /**
         * 参考：https://segmentfault.com/q/1010000005800495
         * 拦截器--拦截timeout方法1
         */
        Vue.http.interceptors.push((request, next) = > {
            var timeout;
        // 這裡改用 _timeout ，就不會觸發原本的
        if (request._timeout) {
            // 一樣綁定一個定時器，但是這裡是只要觸發了，就立即返回 response ， 並且這邊自定義了 status 和 statusText
            timeout = setTimeout(() = > {
                next(request.respondWith(request.body, {
                    status: 408,
                    statusText: 'Request Timeout'
                })
        )
            ;
        },
            request._timeout
        )
            ;
        }

        next((response) = > {
            clearTimeout(timeout);
    })
        ;
    })

//		/**
//		 * 参考：https://segmentfault.com/q/1010000005800495
//		 * 拦截器--拦截timeout方法2
//		 */
//		Vue.http.interceptors.push((request, next) => {
//		    var timeout;
//			// 這裡改用 _timeout ，就不會觸發原本的
//		    if (request._timeout) {
//		    	// 一樣綁定一個定時器，但是這裡是只要觸發了，就立即返回 response ， 並且這邊自定義了 status 和 statusText
//		        timeout = setTimeout(() => {
//		            if(request.onTimeout) request.onTimeout(request)
//					request.abort()
//		        }, request._timeout);
//		    }
//		
//		    next((response) => {
//		        clearTimeout(timeout);
//		    });
//		})

        switch (requestType) {
            //get
            case 'get':

                Vue.http.get(url, options)
                    .then(
                        response = > {
                    // get body data

                    var data = response.body;

                if (data != null && data.returnCode != null) {
                    //回调函数
                    callback(data);
                } else {
                    var data = {
                        returnCode: 500,
                        returnDesc: '接口数据格式错误',
                        returnData: ''
                    };
                    callback(data);
                }

        }
    ,
        response =
    >
        {
            // error callback
            var data = {
                returnCode: 500,
                returnDesc: '请求服务器失败',
                returnData: ''
            };
            callback(data);
        }
    ).
        catch(function (error) {

            //catch
            var data = {
                returnCode: 500,
                returnDesc: '程序异常',
                returnData: ''
            };
            callback(data);
        });

        break;
        //post
    case
        'post'
    :

        var params = options.params;
        options.params = {};

        Vue.http.post(url, params, options)
            .then(
                response = > {

            // get body data
            var data = response.body;

        if (data != null && data.returnCode != null) {
            //回调函数
            callback(data);
        } else {
            var data = {
                returnCode: 500,
                returnDesc: '接口数据格式错误',
                returnData: ''
            };
            callback(data);
        }

    },
        response =
    >
        {

            // error callback
            var data = {
                returnCode: 500,
                returnDesc: '请求服务器失败',
                returnData: ''
            };

            callback(data);
        }
    ).
        catch(function (error) {
            //catch
            var data = {
                returnCode: 500,
                returnDesc: '程序异常',
                returnData: ''
            };
            callback(data);
        });

        break;

    }

    }

    /**
     * @description 获取url中的参数
     * @param string name
     */
    owner.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var search = decodeURI(decodeURI(window.location.search));
        var r = search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
    }

})(Vue, window.app = {});

/*
 * @description 格式化时间
 * @param fmt string			格式："yyyy-MM-dd h:m:s"
 */
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/*
 * @description 格式化时间
 * @param fmt string			格式："yyyy-MM-dd h:m:s"
 */
function TimeFn() {
    var date = new Date();
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y + M + D + h + m + s;
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}

//获取用户登录信息
function get_cookie(Name) {
    var search = Name + "="//查询检索的值
    var returnvalue = "";//返回值
    if (document.cookie.length > 0) {
        sd = document.cookie.indexOf(search);
        if (sd != -1) {
            sd += search.length;
            end = document.cookie.indexOf(";", sd);
            if (end == -1)
                end = document.cookie.length;
            //unescape() 函数可对通过 escape() 编码的字符串进行解码。
            returnvalue = unescape(document.cookie.substring(sd, end))
        }
    }
    return returnvalue;
}