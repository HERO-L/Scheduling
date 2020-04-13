// 定义一个混入对象
var myMixin = {
    created() {
        let option = this.doNotInitListQuery
        if (!option) {
            this._baseVueInitListQuery()
        }
    },
    methods: {
        _baseVueInitListQuery() {
            // 增加传递参数处理，传递当前的listQuery对象，保证页面返回的时候，还携带原始数据
            if (this.query !== undefined && this.query !== '' && !this.isEmptyObject(this.query)) {
                var queryObj = this.query
                Object.keys(queryObj).forEach(function (v, i) {
                    if (v === 'page' || v === 'rows') {
                        queryObj[v] = Number(queryObj[v])
                    }
                })
                this.listQuery = queryObj
            }
        },
        // 分页页面处理更改
        handleSizeChange(val) {
            this.listQuery.page.pageSize = val
            this.listQuery.page.pageNum = 1
            this.getList()
        },
        // 分页页面处理更改
        handleCurrentChange(val) {
            this.listQuery.page.pageNum = val
            this.getList()
        },
        // 顶部的统一搜索处理
        handleFilter() {
            this.getList()
        },
        // 表格的复选框处理
        handleRowHandle(row, event, column) {
            this.$refs.multipleTable.toggleRowSelection(row)
        },
        handleSelectionChange(val) {
            this.multipleSelection = val
        },
        isEmptyObject(obj) {
            var name
            for (name in obj) {
                return false
            }
            return true
        },
        // 使用此方法跳转页面之前，为了避免中文乱码，需要优先将跳转的URL 进行 encodeURL 操作
        getQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURI(r[2]);
            return null;
        },
        formatDate(strTime) {
            var date = new Date(strTime)
            return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
        },
        // 商品品类相关处理, 初始化一级品类的数据， 处理商品品类集合数据
        initItemTypeOptions() {
            _sendRequest(itemWebSite + '/scm/item/itemType/queryPitemType', {}, this.pitemType_list_success_callback, this.error_callback);
        },
        pitemType_list_success_callback(data) {
            this.itemTypeOptions = data.returnData;
        },
        initSaleCompanyOptions() {
            _sendRequest(userWebSite + '/scm/user/saleCompany/list', {}, this.saleCompany_list_success_callback, this.error_callback);
        },
        saleCompany_list_success_callback(data) {
            this.saleCompanyOptions = data.returnData;
        },
        initSaleRegionOptions() {
            _sendRequest(userWebSite + '/scm/user/saleRegion/list', {}, this.saleRegion_list_success_callback, this.error_callback);
        },
        saleRegion_list_success_callback(data) {
            this.regionOptions = data.returnData;
        },
        initSaleHandleOptions() {
            _sendRequest(userWebSite + '/scm/user/saleHandle/list', {}, this.saleHandle_list_success_callback, this.error_callback);
        },
        initSaleHandleOptions(data) {
            _sendRequest(userWebSite + '/scm/user/saleHandle/list', {"userType": data}, this.saleHandle_list_success_callback, this.error_callback);
        },
        saleHandle_list_success_callback(data) {
            this.handleOptions = data.returnData;
        },
        initSaleManagerOptions() {
            _sendRequest(userWebSite + '/scm/user/saleManager/list', {}, this.saleManager_list_success_callback, this.error_callback);
        },
        saleManager_list_success_callback(data) {
            this.saleManagerOptions = data.returnData;
        },
        initSaleChannelOptions() {
            _sendRequest(userWebSite + '/scm/user/salechannel/list', {}, this.saleChannel_list_success_callback, this.error_callback);
        },
        saleChannel_list_success_callback(data) {
            this.saleChannelOptions = data.returnData;
        },
        initSaleFactoryOptions() {
            _sendRequest(userWebSite + '/scm/user/saleFactory/list', {}, this.saleFactory_list_success_callback, this.error_callback);
        },
        saleFactory_list_success_callback(data) {
            this.saleFactoryOptions = data.returnData;

            if (typeof (listQueryFactoryCode) == 'undefined') {
                var listQueryFactoryCode_ = false;
            } else {
                listQueryFactoryCode_ = true;
            }
            if (listQueryFactoryCode_) {
                for (var i in this.saleFactoryOptions) {
                    if (i == 0) {
                        Vue.set(this.listQuery, 'factoryCode', this.saleFactoryOptions[i].code);
                        break;
                    }
                }

                this.getList();

            }

        },
        selectAreaNameByAreaCode(areaCodeArrayInput) {
            var areaNameArray = ['', '', ''];
            for (var proIndex = 0; proIndex < this.areajsonOptions.length; proIndex++) {
                if (this.areajsonOptions[proIndex].id == areaCodeArrayInput[0]) {
                    areaNameArray[0] = this.areajsonOptions[proIndex].name
                    var cityOptionsTemp = this.areajsonOptions[proIndex].children;
                    // 如果省市全部只有一级，需进行判断
                    if (cityOptionsTemp != undefined) {
                        for (var cityIndex = 0; cityIndex < cityOptionsTemp.length; cityIndex++) {
                            if (cityOptionsTemp[cityIndex].id == areaCodeArrayInput[1]) {
                                areaNameArray[1] = cityOptionsTemp[cityIndex].name
                                var areaOptionsTemp = cityOptionsTemp[cityIndex].children;
                                // 如果省市全部只有二级，需进行判断
                                if (areaOptionsTemp != undefined) {
                                    for (var areaIndex = 0; areaIndex < areaOptionsTemp.length; areaIndex++) {
                                        if (areaOptionsTemp[areaIndex].id == areaCodeArrayInput[2]) {
                                            areaNameArray[2] = areaOptionsTemp[areaIndex].name
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return areaNameArray;
        },
        isInArray(arr, value) {
            for (var i = 0; i < arr.length; i++) {
                if (value === arr[i]) {
                    return true;
                }
            }
            return false;
        },
        indexOfArray(arr, val) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == val) {
                    return i;
                }
            }
            return -1;
        },
        removeItemInArray(arr, val) {
            var index = this.indexOfArray(arr, val);
            if (index > -1) {
                arr.splice(index, 1);
            }
        },
        // 数组元素是否包含重复元素
        isRepeat(arr) {
            var hash = {};
            for (var i in arr) {
                if (hash[arr[i]]) {
                    return true;
                }
                hash[arr[i]] = true;
            }
            return false;
        }
    }
}