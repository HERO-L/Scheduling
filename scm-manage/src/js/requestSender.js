/**
 * 请求数据统一接口
 *
 * @param url 请求地址
 * @param data 请求参数
 * @param success_callback 成功回调
 * @param error_callback 异常回调
 * @param isLoading 是否显示加载效果
 */
function _sendRequest(url, data, success_callback, error_callback, isLoading) {
    $.ajax({
        type: 'post',
        headers: {'Cookie': document.cookie},
        url: url,
        xhrFields: {withCredentials: true},
        crossDomain: true,
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: 'json',
        beforeSend: function (XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader("paasloginUserId", getCookie("paasloginUserId"));
            XMLHttpRequest.setRequestHeader("paasloginUserName", getCookie("paasloginUserName"));
            if (isLoading != false) {
                _showLoading();
            }
        },
        success: function (reData) {
            success_callback(reData);
        },
        error: function (XMLHttpRequest, errorMsg, errorObj) {
            //alert("请求错误，请重试");
        },
        complete: function () {
            if (isLoading != false) {
                _hideLoading();
            }
        }
    })
};

/**
 * 请求过程中显示加载效果
 */
var _showLoading = function () {
    var html = '<div id="loading" style="position: fixed;width: 100%;height: 100%;left:0;top:0;z-index:9;">' +
        '<img src="../../images/loading.gif" ' +
        'style="position: absolute;left:50%;top:50%;margin-left: -60px;margin-top:-120px;width: 120px;z-index: 999;"/>' +
        '<div class="mask" style="position: absolute;width: 100%;height: 100%;z-index: 2;background: rgba(0, 0, 0, .4);z-index: 99;"></div>' +
        '</div>';
    $('body').append(html);
    //$("#loading").show();
};

/**
 * 请求结束时消除加载效果
 */
var _hideLoading = function () {
    $("#loading").remove();
};

function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
} 

