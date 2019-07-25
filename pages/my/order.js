var parkSeq = sessionStorage.getItem('parkSeq'),
        userid = localStorage.getItem('userId'),
        stat = "",
        ent = "",
        hisstat = "",
        hisent = "",
        ajaxNum = 0,
        mydate = new Date(),
        j_hour = mydate.getHours(),
        j_min = mydate.getMinutes(),
        month = (mydate.getMonth() + 1) >= 10 ? mydate.getMonth() + 1 : "0" + (mydate.getMonth() + 1),//获取当前月份(0-11,0代表1月)
        date = mydate.getDate() >= 10 ? mydate.getDate() : "0" + mydate.getDate(),
        year = mydate.getFullYear(),
        arrs = [],
        noarr = 0,
        body = "预定车位",
        mobile = localStorage.getItem('mobile'),
        couponidstr = "",
        couponid = sessionStorage.getItem("couponId"),
        openId = localStorage.getItem('openid'),
        weekday = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六"),
        str = month >= 10 ? month : '0' + month + '月' + (date >= 10 ? date : '0' + date) + '日',
        date2 = new Date(mydate),
        arr1 = [];

$(".phoneNum").val(mobile);
var toUrl;
var city, lng, lat;

if (sessionStorage.getItem('lng') == undefined || sessionStorage.getItem('lat') == undefined) {
    get_ThisLocation(function (Res) {
        city = Res.city;
        lng = Res.lng;
        lat = Res.lat;
        sessionStorage.setItem('lng', lng);
        sessionStorage.setItem('lat', lat);
    });
} else {
    lng = sessionStorage.getItem('lng');
    lat = sessionStorage.getItem('lat');
}

//获得支付方式
function getPayType(yu, parkId, sharePrice) {
    $.ajax({
        type: "post",
        dataType: "json",
        async: false,
        url: url + "parkingSpace/getPayTypeList",
        data: {
            parkId: parkId,
        },
        success: function (result) {
            if (result.status == 0) {
                var moren = 0;
                var tUserParkingSpacePrice = result.tUserParkingSpacePrice;
                payIntegeration = sharePrice * 10;
                if (tUserParkingSpacePrice.payType.indexOf("0") > -1) {
                    if (moren == 0) {
                        $(".orderBtn").attr("data-type", "0");
                        $(".payTypePriceImg").attr("src", "img/wechat_icon_v4.8@2x.png");
                        $(".payName").html("微信支付");
                        $(".scoreNum").hide();
                        $(".feePrice").html("<i>" + sharePrice + "</i>元");
                        $(".weixin .payCheckedImg").show();
                        moren = 1;
                    }
                    $(".weixin .payTypeLine").attr("data-price", sharePrice);
                    $(".weixin").show();
                } else {
                    $(".weixin").hide();
                }
                if (tUserParkingSpacePrice.payType.indexOf("1") > -1) {
                    if (yu >= payIntegeration) {
                        if (moren == 0) {
                            $(".orderBtn").attr("data-type", "1-1");
                            $(".payTypePriceImg").attr("src", "img/integral_v4.8@2x.png");
                            $(".payName").html("积分支付");
                            $(".scoreNum").show();
                            $(".feePrice").html("<i>" + payIntegeration + "</i>积分");
                            $(".creditmore .payCheckedImg").show();
                            moren = 1;
                        }
                        $(".creditmore .payTypeLine").attr("data-price", payIntegeration);
                        $(".creditmore").show();
                    } else {
                        if (moren == 0) {
                            $(".orderBtn").attr("data-type", "1-2");
                            $(".payTypePriceImg").attr("src", "img/integral_v4.8@2x.png");
                            $(".payName").html("积分支付");
                            $(".scoreNum").show();
                            $(".feePrice").html("<i>" + payIntegeration + "</i>积分");
                            moren = 1;
                        }
                        $(".credit .payTypeLine").attr("data-price", payIntegeration);
                        $(".credit").show();
                    }
                } else {
                    $(".creditmore").hide();
                    $(".credit").hide();
                }
                if (tUserParkingSpacePrice.payType.indexOf("2") > -1) {
                    if (moren == 0) {
                        $(".orderBtn").attr("data-type", "2");
                        $(".payTypePriceImg").attr("src", "img/Alipay_v4.8@2x.png");
                        $(".payName").html("支付宝支付");
                        $(".scoreNum").hide();
                        $(".feePrice").html("<i>" + sharePrice + "</i>元");
                        $(".alipay .payCheckedImg").show();
                        moren = 1;
                    }
                    $(".alipay .payTypeLine").attr("data-price", sharePrice);
                    $(".alipay").show();
                } else {
                    $(".alipay").hide();
                }
            }
        },
    });
}


//获得计算价格,添加积分现金区分和剩余积分
function getprice(parkId, inTime, outTime, inp) {
    $.ajax({
        type: "post",
        dataType: "json",
        async: false,
        url: url + "space/getSharePrice.do",
        data: {
            parkId: parkId,
            inTime: inTime,
            outTime: outTime,
            userId: userid,
        },
        success: function (result) {
            if (result.status == 0) {
                $(".fee").show();
                $(".payTypeTab .scoreNum").text("(剩余" + result.banlance + "积分)");
                $(".payTypeTab .scoreNum").attr("data-num", result.banlance);
                $(".yuNum").text(result.banlance);
                if (inp == "newTime") {
                    getPayType(result.banlance, parkId, result.sharePrice);
                }
            } else {
                if (inp == "end") {
                    alert(result.message);
                    $(".end .timei").text("根据时间，系统会为您分配最合适的车位");
                    $(".end .timei").removeClass("changeI");
                } else if (inp == "start") {
                    alert(result.message);
                    $(".start .timei").text("请选择入场时间");
                    $(".start .timei").removeClass("changeI");
                } else if (inp == "all") {
                    if (j_hour < 10) {
                    } else {
                        alert(result.message);
                        $(".start .timei").text("请选择入场时间");
                        $(".start .timei").removeClass("changeI");
                    }
                }
            }
        },
    });
}


$(".payTypeTab").click(function () {
    $(".tg_g_pBox").show();
});


$(".close_tg_g_p").click(function () {
    $(".tg_g_pBox").hide();
});


$(".payTypeLine").click(function () {
    if ($(this).attr("data-id") == "0") {
        $(".orderBtn").attr("data-type", "0");
        $(".payTypePriceImg").attr("src", "img/wechat_icon_v4.8@2x.png");
        $(".payName").html("微信支付");
        $(".scoreNum").hide();
        $(".feePrice").html("<i>" + $(this).attr("data-price") + "</i>元");
        $(this).parent().parent().find(".payCheckedImg").hide();
        $(this).find(".payCheckedImg").show();
    } else if ($(this).attr("data-id") == "1-1") {
        $(".orderBtn").attr("data-type", "1-1");
        $(".payTypePriceImg").attr("src", "img/integral_v4.8@2x.png");
        $(".payName").html("积分支付");
        $(".scoreNum").show();
        $(".feePrice").html("<i>" + $(this).attr("data-price") + "</i>积分");
        $(this).parent().parent().find(".payCheckedImg").hide();
        $(this).find(".payCheckedImg").show();
    } else if ($(this).attr("data-id") == "1-2") {
        $(".orderBtn").attr("data-type", "1-2");
        $(".payTypePriceImg").attr("src", "img/integral_v4.8@2x.png");
        $(".payName").html("积分支付");
        $(".scoreNum").show();
        $(".feePrice").html("<i>" + $(this).attr("data-price") + "</i>积分");
        $(this).parent().parent().find(".payCheckedImg").hide();
    } else if ($(this).attr("data-id") == "2") {
        $(".orderBtn").attr("data-type", "2");
        $(".payTypePriceImg").attr("src", "img/Alipay_v4.8@2x.png");
        $(".payName").html("支付宝支付");
        $(".scoreNum").hide();
        $(".feePrice").html("<i>" + $(this).attr("data-price") + "</i>元");
        $(this).parent().parent().find(".payCheckedImg").hide();
        $(this).find(".payCheckedImg").show();
    }
    $(".tg_g_pBox").hide();
});


function historyajax() {
    if (sessionStorage.getItem("morencar") != null && sessionStorage.getItem("morencar") != "" && sessionStorage.getItem("morencar") != undefined) {
        sessionStorage.removeItem("morencar");
        getcar(0);
    }
}


var interval1 = setInterval(function () {
    historyajax();
}, 200);


var interval2 = setInterval(function () {
    if (ajaxNum == 6) {
        $(".upload").hide();
        clearInterval(interval2);
    }
}, 200);


function pushHistory() {
    var state = {
        title: "title",
        url: ""
    };
    window.history.pushState(state, "title", "");
}


Date.prototype.format = function (format) {
    var args = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(format))
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var i in args) {
        var n = args[i];
        if (new RegExp("(" + i + ")").test(format))
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
    }
    return format;
};


function getCredit() {
    $.ajax({
        type: "post",
        url: url + "gift/getMyIntegralRules",
        async: true,
        data: {
            userId: userid,
        },
        success: function (result) {
            if (result.code == 100) {
                $(".jifenContent").html("");
                result = result.data;
                for (let i = 0; i < result.chargeRules.length; i++) {
                    var intergrationMoney = result.chargeRules[i].intergrationMoney;
                    var obtainIntergrationNum = result.chargeRules[i].obtainIntergrationNum;
                    var presentIntergrationNum = result.chargeRules[i].presentIntergrationNum;
                    var span = '<span ' + (i == 0 ? 'class="jfon"' : '')
                            + '><p class="jftop ' + (presentIntergrationNum > 0 ? "" : "vertical") + '"><img src="img/' + (i > 0 ? "jifenimg" : "jinbi") + '.png"/>'
                            + obtainIntergrationNum + '积分</p><p class="zen orange">' +
                            (presentIntergrationNum > 0 ? ('赠送' + presentIntergrationNum + '积分') : "")
                            + '</p><p class="jfbottom">￥<i>'
                            + intergrationMoney + '</i></p></span>';
                    $(".jifenContent").append(span);
                }
            }
        }
    });
}

getCredit();


//获得车库默认车辆
function getcar(indc) {
    $.ajax({
        type: "post",
        dataType: "json",
        async: false,
        url: url + "usercar/getUserCarList.do",
        data: {
            userId: userid
        },
        success: function (result) {
            if (result.status == 0) {
                if (result.userCarInfoList != null) {
                    var morencar = 0;
                    $.each(result.userCarInfoList, function (index, ele) {
                        if (ele.isDefault == 1) {
                            $('.carno').text(ele.carNumber);
                            $('.carno').attr("data-val", ele.carNumber);
                            morencar++
                        }
                    });
                    if (!morencar) {
                        $('.carno').text("请选择默认车辆");
                        $('.carno').removeAttr("data-val");
                    }
                } else {
                    $('.carno').text("添加车辆");
                    $('.carno').attr("data-val", "");
                }
            }
            if (indc == 1) {
                ajaxNum++;
            }
        },
    });
}

getcar(1);

var dataFloorName;

//获得停车场详情
$.ajax({
    type: "post",
    // url: url + "park/getParkDetailsInfo.do",
    url: url + "park/getParkDetailsInfo",
    async: true,
    data: {
        parkSeq: parkSeq,
        lng: lng,
        lat: lat
    },
    success: function (result) {
        if (result.status == 0) {
            var data = result.parkDetailsInfo;
            dataFloorName = data.floorName;
            sessionStorage.setItem('dataFloorName',dataFloorName);
            $(".item-left .parkname").text(data.parkName);
            $(".item-left .address").text(data.parkAddress);
            // 如果停车场不支持在线选位，则不显示在线选位那一行
            // 如果停车场支持在线选位并支持列表和地图，优先地图
            if ($('.fee').css('display') == 'block') {
                if (data.isOnlineSelectLocation == 1) { //0不支持在线选位，1支持在线选位
                    $('.chooseSpaceLine').show();
                    if (data.isMapSelectLocation == 1) {  //0不支持地图，1支持地图
                        toUrl = 'chooseByMap'
                    } else {
                        toUrl = 'chooseByList'
                    }
                } else {
                    $('.chooseSpaceLine').hide();
                }
            } else {
                $('.chooseSpaceLine').hide();
            }

            ajaxNum++;
        } else {
            alert(result.message);
        }

    }
});


//获得当前日期
function getNowFormatDate(daten) {
    var seperator1 = "-";
    var year = daten.getYear();
    var month = daten.getMonth() + 1;
    var strDate = daten.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    var currentdate = month + seperator1 + strDate;
    return currentdate;
}


//进入我的车库
$(".line .carName").click(function (e) {
    if (!Number($(this).attr("data-btn"))) {
        $(this).attr("data-btn", "1");
        //跳转
        if (stat != null && stat != undefined && stat != "")
            sessionStorage.setItem("s_t", stat);
        if (ent != null && ent != undefined && ent != "")
            sessionStorage.setItem("e_t", ent);
        location.href = "myCar.html?a=123";
        $(this).attr("data-btn", "0");
    } else {
        console.log("进入我的车库");
    }
});


// 获得优惠券
if (couponid != "" && couponid != undefined && couponid != null) {
    //获得一张优惠券
    $.ajax({
        type: "post",
        url: url + "voucher/getVoucherById",
        async: true,
        data: {
            voucherId: couponid,
        },
        success: function (result) {
            if (result.code == 100) {
                $(".tg_g_o .coupon").html("￥<i>" + result.data.appuserVoucherValues.toFixed(0) + "</i>元");
                $(".tg_g_o .coupon").attr("data-type", result.data.appuserVoucherSeq);
                couponidstr = "&couponid=" + result.data.appuserVoucherSeq;
            }
            ajaxNum++;
        }
    });
} else {
    //获得优惠券
    $.ajax({
        type: "post",
        url: url + "scan/parkingVoucherList",
        async: true,
        data: {
            phone: mobile,
            parkId: parkSeq,
        },
        success: function (result) {
            if (result.data.userVoucherList != null && result.data.userVoucherList != undefined && result.data.userVoucherList != "") {
                $(".tg_g_o .coupon").html("￥<i>" + result.data.userVoucherList[0].appuserVoucherValues.toFixed(0) + "</i>元");
                $(".tg_g_o .coupon").attr("data-type", result.data.userVoucherList[0].appuserVoucherSeq);
                couponidstr = "&couponid=" + result.data.userVoucherList[0].appuserVoucherSeq;
            }
            ajaxNum++;
        }
    });
}


//同步获得可预定日期
var getAllowTimeres;

function getAllowTime() {
    $.ajax({
        type: "post",
        dataType: "json",
        async: false,
        url: url + "space/ selectReserveDate.do",
        data: {
            parkId: parkSeq
        },
        success: function (result) {
            if (result.status == 0) {
                getAllowTimeres = result.latelyList;
            }
        },
    });
}


//同步获得可用停车场时间段
var getAllowParkRes;

function getAllowPark(parkdate, ind) {
    $.ajax({
        type: "post",
        dataType: "json",
        async: false,
        url: url + "space/selectSameDayReserveTime.do",
        data: {
            parkId: parkSeq,
            dayTime: parkdate
        },
        success: function (result) {
            if (result.status == 0) {
                getAllowParkRes = result.todayReserveList;
            }
        },
    });
}


//首次加载务必查看
function wubi() {
    date2 = new Date(mydate);
    noarr = 0;
    getAllowTime();
    $('.time-box').html("");
    $.each(getAllowTimeres, function (index, ele) {
        var daytime = getNowFormatDate(date2),
                mon = daytime.split("-")[0],
                day = daytime.split("-")[1];
        if (index == 0) {
            if (Number(ele) == 1) {
                $('.time-box').append("<li class='ok' data-val='" + mon + " " + (day >= 10 ? day : "0" + day) + "'><span>今天</span><span>" + mon + "月" + (day >= 10 ? day : "0" + day) + "日</span><span>可定</span></li>");
                ok = mon + "月" + (day >= 10 ? day : "0" + day) + "日";
                arrs.push(year + "-" + mon + "-" + (day >= 10 ? day : "0" + day));
            } else if (Number(ele) == 2) {
                $('.time-box').append("<li class='off' data-val='" + mon + " " + (day >= 10 ? day : "0" + day) + "'><span>今天</span><span>" + mon + "月" + (day >= 10 ? day : "0" + day) + "日</span><span>不可定</span></li>").find('li').get(index).disabled = false;
                noarr++;
            }
        } else {
            var week = weekday[date2.getDay()];
            if (week == undefined) {
                week = weekday[date2.getDay()]
            }
            if (Number(ele) == 1) {
                $('.time-box').append("<li class='ok' data-val='" + mon + " " + (day >= 10 ? day : "0" + day) + "'><span>" + week + "</span><span></span>" + mon + "月" + (day >= 10 ? day : "0" + day) + "日<span>可定</span></li>");
                ok = mon + "月" + (day >= 10 ? day : "0" + day) + "日";
                arrs.push(year + "-" + mon + "-" + (day >= 10 ? day : "0" + day));
            } else if (Number(ele) == 2) {
                $('.time-box').append("<li class='off' data-val='" + mon + " " + (day >= 10 ? day : "0" + day) + "'><span>" + week + "</span><span>" + mon + "月" + (day >= 10 ? day : "0" + day) + "日</span><span>不可定</span></li>").find('li').get(index).disabled = false;
                noarr++;
            }
        }
        date2.setDate(date2.getDate() + 1);
    });
    if (arrs.length > 0) {
        getAllowPark(arrs[0], arrs.length);
        var dares = getAllowParkRes;
        $(".timeAllow-box").html("");
        $.each(dares, function (index, ele) {
            $(".timeAllow-box").append("<li><span>" + ele.shareTime.split(" ")[1].split("~")[0] + "</span>~<span>" + ele.shareTime.split(" ")[2] + "</span></li>");
            var st = ele.shareTime.split(" ")[1].split("~")[0].split(":");
            var et = ele.shareTime.split(" ")[2].split(":");
            $(".orderTime").text(st[0] + ":" + st[1] + "~" + et[0] + ":" + et[1]);
        });

    }
    //当插件数据为空时
    if (noarr == 7) {
        $(".s_t>ul").hide();
        $(".e_t>ul").hide();
    }
    $('.time-box').find('.ok').eq(0).addClass("on").siblings().removeClass("on");
    ajaxNum++;
}

wubi();


//初始化时间插件
function fun1() {
    for (var arri = 0; arri < arrs.length; arri++) {
        var today = arrs[arri];
        var monday = today.split("-")[1] + "月" + today.split("-")[2] + "日";
        $(".s_t>ul,.e_t>ul").append('<li data-val="' + today.split("-")[1] + "-" + today.split("-")[2] + '">' + monday + '</li>');
        getAllowPark(today, arri);
        var towres = getAllowParkRes;
        arr1.splice(0, arr1.length);
        $.each(towres, function (index, ele) {
            for (var k = Number(ele.shareTime.split(" ")[1].substr(0, 2)); k <= Number(ele.shareTime.split(" ")[2].substr(0, 2)); k++) {
                arr1.push(k);
            }
        });
        towres[0].shareTime.split(" ")[1].substr(3, 2)
        $.unique(arr1);
        $(".demo_sja>li").eq(arri).each(function (index, ele) {
            $(ele).append("<ul></ul>");
            for (var i = 0; i < arr1.length; i++) {
                if (arri == 0) {
                    if (arr1[i] == j_hour) {
                        var first = parseInt(towres[0].shareTime.split(" ")[1].substr(3, 2) / 10) * 10;
                        if ((parseInt(j_min / 10 + 1) * 10 < 60) && (first >= parseInt(j_min / 10 + 1) * 10)) {
                            $(ele).find("ul").eq(0).append("<li class='one j_hour' data-val='" + (arr1[i] >= 10 ? arr1[i] : "0" + arr1[i]) + "'>" + (arr1[i] >= 10 ? arr1[i] : "0" + arr1[i]) + "<ul></ul></li>");
                            for (var jf = first; jf < 60;) {
                                if (jf >= first) {
                                    $(ele).find("ul").eq(0).find(".one").find('ul').append("<li data-val='" + (jf >= 10 ? jf : "0" + jf) + "'>" + (jf >= 10 ? jf : "0" + jf) + "</li>");
                                    jf += 10;
                                }
                            }
                        } else if ((parseInt(j_min / 10 + 1) * 10 < 60) && (first < parseInt(j_min / 10 + 1) * 10)) {
                            $(ele).find("ul").eq(0).append("<li class='one j_hour' data-val='" + (arr1[i] >= 10 ? arr1[i] : "0" + arr1[i]) + "'>" + (arr1[i] >= 10 ? arr1[i] : "0" + arr1[i]) + "<ul></ul></li>");
                            for (var jt = parseInt(j_min / 10 + 1) * 10; jt < 60;) {
                                if (jt > j_min) {
                                    $(ele).find("ul").eq(0).find(".one").find('ul').append("<li data-val='" + (jt >= 10 ? jt : "0" + jt) + "'>" + (jt >= 10 ? jt : "0" + jt) + "</li>");
                                    jt += 10;
                                }
                            }
                        }
                    } else if (arr1[i] > j_hour) {
                        if (i != 0) {
                            $(ele).find("ul").eq(0).append("<li class='tow' data-val='" + (arr1[i] >= 10 ? arr1[i] : "0" + arr1[i]) + "'>" + (arr1[i] >= 10 ? arr1[i] : "0" + arr1[i]) + "<ul></ul></li>");
                            for (var j = 0; j < 60;) {
                                $(ele).find("ul").eq(0).find(".tow").find('ul').append("<li data-val='" + (j >= 10 ? j : "0" + j) + "'>" + (j >= 10 ? j : "0" + j) + "</li>");
                                j += 10;
                            }
                        } else {
                            var firstmin = towres[0].shareTime.split(" ")[1].substr(3, 2);
                            $(ele).find("ul").eq(0).append("<li class='tow' data-val='" + (arr1[i] >= 10 ? arr1[i] : "0" + arr1[i]) + "'>" + (arr1[i] >= 10 ? arr1[i] : "0" + arr1[i]) + "<ul></ul></li>");
                            for (var j2 = parseInt(firstmin / 10) * 10; j2 < 60;) {
                                $(ele).find("ul").eq(0).find(".tow").find('ul').append("<li data-val='" + (j2 >= 10 ? j2 : "0" + j2) + "'>" + (j2 >= 10 ? j2 : "0" + j2) + "</li>");
                                j2 += 10;
                            }
                        }
                    }
                } else {
                    $(ele).find("ul").eq(0).append("<li class='tow' data-val='" + (arr1[i] >= 10 ? arr1[i] : "0" + arr1[i]) + "'>" + (arr1[i] >= 10 ? arr1[i] : "0" + arr1[i]) + "<ul></ul></li>");
                    for (var j3 = 0; j3 < 60;) {
                        $(ele).find("ul").eq(0).find(".tow").find('ul').append("<li data-val='" + (j3 >= 10 ? j3 : "0" + j3) + "'>" + (j3 >= 10 ? j3 : "0" + j3) + "</li>");
                        j3 += 10;
                    }
                }
            }
        })
        $(".demo_sjb>li").eq(arri).each(function (index, ele) {
            var endj_min = j_min + 10;
            $(ele).append("<ul></ul>");
            for (var i = 0; i < arr1.length; i++) {
                if (arri == 0) {
                    if (arr1[i] == j_hour) {
                        var first = parseInt(towres[0].shareTime.split(" ")[1].substr(3, 2) / 10) * 10;
                        if ((parseInt(endj_min / 10 + 1) * 10 < 60) && (first >= parseInt(endj_min / 10 + 1) * 10)) {
                            $(ele).find("ul").eq(0).append("<li class='one j_hour' data-val='" + (arr1[i] >= 10 ? arr1[i] : "0" + arr1[i]) + "'>" + (arr1[i] >= 10 ? arr1[i] : "0" + arr1[i]) + "<ul></ul></li>");
                            for (var jf = first; jf < 60;) {
                                if (jf >= first) {
                                    $(ele).find("ul").eq(0).find(".one").find('ul').append("<li data-val='" + (jf >= 10 ? jf : "0" + jf) + "'>" + (jf >= 10 ? jf : "0" + jf) + "</li>");
                                    jf += 10;
                                }
                            }
                        } else if ((parseInt(endj_min / 10 + 1) * 10 < 60) && (first < parseInt(endj_min / 10 + 1) * 10)) {
                            $(ele).find("ul").eq(0).append("<li class='one j_hour' data-val='" + (arr1[i] >= 10 ? arr1[i] : "0" + arr1[i]) + "'>" + (arr1[i] >= 10 ? arr1[i] : "0" + arr1[i]) + "<ul></ul></li>");
                            for (var jt = parseInt(endj_min / 10 + 1) * 10; jt < 60;) {
                                if (jt > endj_min) {
                                    $(ele).find("ul").eq(0).find(".one").find('ul').append("<li data-val='" + (jt >= 10 ? jt : "0" + jt) + "'>" + (jt >= 10 ? jt : "0" + jt) + "</li>");
                                    jt += 10;
                                }
                            }
                        }
                    } else if (arr1[i] > j_hour) {
                        if (i != 0) {
                            $(ele).find("ul").eq(0).append("<li class='tow' data-val='" + (arr1[i] >= 10 ? arr1[i] : "0" + arr1[i]) + "'>" + (arr1[i] >= 10 ? arr1[i] : "0" + arr1[i]) + "<ul></ul></li>");
                            for (var j = 0; j < 60;) {
                                $(ele).find("ul").eq(0).find(".tow").find('ul').append("<li data-val='" + (j >= 10 ? j : "0" + j) + "'>" + (j >= 10 ? j : "0" + j) + "</li>");
                                j += 10;
                            }
                        } else {
                            var firstmin = towres[0].shareTime.split(" ")[1].substr(3, 2);
                            $(ele).find("ul").eq(0).append("<li class='tow' data-val='" + (arr1[i] >= 10 ? arr1[i] : "0" + arr1[i]) + "'>" + (arr1[i] >= 10 ? arr1[i] : "0" + arr1[i]) + "<ul></ul></li>");
                            for (var j2 = parseInt(firstmin / 10) * 10; j2 < 60;) {
                                $(ele).find("ul").eq(0).find(".tow").find('ul').append("<li data-val='" + (j2 >= 10 ? j2 : "0" + j2) + "'>" + (j2 >= 10 ? j2 : "0" + j2) + "</li>");
                                j2 += 10;
                            }
                        }
                    }
                } else {
                    $(ele).find("ul").eq(0).append("<li class='tow' data-val='" + (arr1[i] >= 10 ? arr1[i] : "0" + arr1[i]) + "'>" + (arr1[i] >= 10 ? arr1[i] : "0" + arr1[i]) + "<ul></ul></li>");
                    for (var j3 = 0; j3 < 60;) {
                        $(ele).find("ul").eq(0).find(".tow").find('ul').append("<li data-val='" + (j3 >= 10 ? j3 : "0" + j3) + "'>" + (j3 >= 10 ? j3 : "0" + j3) + "</li>");
                        j3 += 10;
                    }

                }
            }
        })
        //出入场时间同时加载，在入场时间选择之后即$('.demo_sja')的onSelect方法中根据选择的入场时间过滤出场时间
        $('.demo_sja').mobiscroll().treelist({
            theme: 'mobiscroll',
            lang: 'zh',
            display: 'bottom',
            onSelect: function () {

            },
            onCancel: function () {
                return false;
            }
        });
        $('.demo_sjb').mobiscroll().treelist({
            theme: 'mobiscroll',
            lang: 'zh',
            display: 'bottom',
            onSelect: function () {


            },
            onCancel: function () {
                return false;
            }
        });
    }
    ajaxNum++;
}

fun1();


$(".NotTime_tbn").click(function () {
    $('.NotificationBox').css("top", "100%");
    $('.NotificationBox').hide();
});


//10.10修改出入场时间初始化
function newTime() {
    var newj_min;
    var newj_hour;
    //10.23十点前提示
    if (j_hour < 10) {
        newj_hour = 10;
        newj_min = "00";
        // $('.NotificationBox').css("top", "0");
        // $('.NotificationBox').show();
    } else {
        if (j_min >= 55) {
            newj_hour = (j_hour + 1) >= 10 ? (j_hour + 1) : "0" + (j_hour + 1);
            newj_min = "0" + (j_min - 55);
        } else {
            newj_hour = j_hour >= 10 ? j_hour : "0" + j_hour;
            newj_min = ((j_min + 5) >= 10 ? j_min + 5 : "0" + (j_min + 5));
        }
    }

    $('.s_t').find(".timei").text(year + "-" + month + "-" + date + " " + newj_hour + ":" + newj_min);
    sessionStorage.setItem("s_t", year + "-" + month + "-" + date + " " + newj_hour + ":" + newj_min);
    stat = sessionStorage.getItem("s_t");
    $('.s_t').find(".timei").addClass('changeI');
    $('.e_t').find(".timei").text(year + "-" + month + "-" + date + " 23:00");
    sessionStorage.setItem("e_t", year + "-" + month + "-" + date + " 23:00");
    ent = sessionStorage.getItem("e_t");
    $('.e_t').find(".timei").addClass('changeI');
    var inTime = $(".start .timei").text();
    var outTime = $(".end .timei").text();
    getprice(parkSeq, inTime, outTime, "newTime");
}

newTime();


//入场时间变化事件
$('.s_t').change(function () {
    var ks_time = $.trim($(this).children('input').val()),
            mont = ks_time.split(" ")[0].split("-")[0],
            aday = ks_time.split(" ")[0].split("-")[1],
            hour = ks_time.split(" ")[1],
            mint = ks_time.split(" ")[2];
    $(this).find(".timei").text(year + "-" + mont + "-" + aday + " " + hour + ":" + mint);
    sessionStorage.setItem("s_t", year + "-" + mont + "-" + aday + " " + hour + ":" + mint);
    dataId = undefined;
    $('.toChoose').text('系统自动分配');
    stat = sessionStorage.getItem("s_t");
    $(this).find(".timei").addClass('changeI');
    if (($(".start .changeI").text() != null && $(".start .changeI").text() != undefined && $(".start .changeI").text() != "") && ($(".end .changeI").text() != null && $(".end .changeI").text() != undefined && $(".end .changeI").text() != "")) {
        var inTime = $(".start i").text();
        var outTime = $(".end i").text();
        getprice(parkSeq, inTime, outTime, "start");
    }
});


//出场时间变化事件
$('.e_t').change(function () {
    var ks_time = $.trim($(this).children('input').val()),
            mont = ks_time.split(" ")[0].split("-")[0],
            aday = ks_time.split(" ")[0].split("-")[1],
            hour = ks_time.split(" ")[1],
            mint = ks_time.split(" ")[2];
    $(this).find(".timei").text(year + "-" + mont + "-" + aday + " " + hour + ":" + mint);
    sessionStorage.setItem("e_t", year + "-" + mont + "-" + aday + " " + hour + ":" + mint);
    dataId = undefined;
    $('.toChoose').text('系统自动分配');
    ent = sessionStorage.getItem("e_t");
    $(this).find(".timei").addClass('changeI');
    var inTime = $(".start .timei").text();
    var outTime = $(".end .timei").text();
    getprice(parkSeq, inTime, outTime, "end");
});


//11.19待定  现金支付
function moneyPay() {
    console.log("现金支付");
    var t1 = $(".start .changeI").text() + ":00";
    var d1 = t1.replace(/\-/g, "/");
    var dt1 = new Date(d1);
    var t2 = $(".end .changeI").text() + ":00";
    var d2 = t2.replace(/\-/g, "/");
    var dt2 = new Date(d2);
    if (($(".phoneNum").val() != null && $(".phoneNum").val().length == 11) && ((dt2 - dt1) > 0 && (dt1 - new Date()) > 0) && ($(".fee span i").text() != "") && ($('.carno').attr("data-val") != null && $('.carno').attr("data-val") != undefined && $('.carno').attr("data-val") != "")) {
        $(".thickbox").css("top", "0");
        $(".tg_g_o .orderFee i").text($(".feePrice i").text());
        if ($(".coupon").has("i").length != 0) {
            var f1 = $(".tg_g_o .orderFee i").text();
            var f2 = $(".coupon i").text();
            //6.29临时判断一元停车活动
            // if(f1<f2){
            // 	$(".coupon i").text('0');
            // 	f2 = 0;
            // 	couponidstr="";
            // }
            //6.29临时需求
            $(".tg_g_o .reverse i").text((parseFloat(f1) - parseFloat(f2)).toFixed(0));
        } else {
            $(".tg_g_o .reverse i").text($(".tg_g_o .orderFee i").text());
        }
    } else {
        //提示不可预定，选择项错误（无页面）
        alert("请确认车辆、出入场时间、手机号无误！");
    }
}


//-----------------------选中积分支付调用下面的方法（liuli）---------------------
//11.19待定 积分支付
function jifenPay() {
    // 用getParkSpaceNum()函数先查询车场剩余车位，如果有则支付，无则弹出暂无车位
    if (getParkSpaceNum()) {
        console.log("积分支付判断");
        var t1 = $(".start .changeI").text() + ":00";
        var d1 = t1.replace(/\-/g, "/");
        var dt1 = new Date(d1);
        var t2 = $(".end .changeI").text() + ":00";
        var d2 = t2.replace(/\-/g, "/");
        var dt2 = new Date(d2);
        if (($(".phoneNum").val() != null && $(".phoneNum").val().length == 11) && ((dt2 - dt1) > 0 && (dt1 - new Date()) > 0) && ($(".feePrice i").text() != "") && ($('.carno').attr("data-val") != null && $('.carno').attr("data-val") != undefined && $('.carno').attr("data-val") != "")) {
            getBookPayOrder();
        } else {
            //提示不可预定，选择项错误（无页面）
            alert("请确认车辆、出入场时间、手机号无误！");
        }
    } else {
        alert("暂无车位！");
    }
}


//点击立即预定
$(".btn .orderBtn").click(function () {
    if (!Number($(this).attr("data-btn"))) {
        $(this).attr("data-btn", "1");

        if ($(this).attr("data-type") == "0") {  //直接用现金进行支付
            moneyPay();
        } else if ($(this).attr("data-type") == "1-1") { // 积分足够，直接进行支付
            jifenPay();
        } else if ($(this).attr("data-type") == "1-2") {  // 积分不足去充值
            var interval = setInterval(function () {
                if (sessionStorage.getItem("payBack") == 0) {
                    var inTime = $(".start .timei").text();
                    var outTime = $(".end .timei").text();
                    getprice(parkSeq, inTime, outTime, "all");
                    clearInterval(interval);
                }
            }, 200);
            sessionStorage.setItem("payBack", 1);
            window.location.href = "myCredit.html?myCredit=1&payBack=1";
        } else if ($(this).attr("data-type") == "2") {  // 支付宝支付

        } else {
            alert("此时段不可预定，请查看可预定时间段！");
        }
        $(this).attr("data-btn", "0");
    } else {
        console.log("点击立即预定");
    }
})


//点击详情
$(".park a").click(function () {
    if (!Number($(this).attr("data-btn"))) {
        $(this).attr("data-btn", "1");
        if (stat != null && stat != undefined && stat != "")
            sessionStorage.setItem("s_t", stat);
        if (ent != null && ent != undefined && ent != "")
            sessionStorage.setItem("e_t", ent);
        //10.24查找车场新参数修改
        location.href = "parkinfo.html?parkid=" + parkSeq + '&isYD=1';
        $(this).attr("data-btn", "0");
    } else {
        console.log("点击详情");
    }

})


//关闭立即预定
$(".close").click(function () {
    $(".thickbox").css("top", "100%");
})


//可用******************现金下单--------选择现金点击立即支付--------------------
$(".tg_g_o .pay").click(function () {
    if (!Number($(this).attr("data-btn"))) {
        $(this).attr("data-btn", "1");
        var moneyPayOrder = bookParkOrder(parkSeq, $(".start").find("i").text(), $(".tg_g_o .reverse i").text(), $(".phoneNum").val(), userid, $(".carName .carno").attr("data-val"), 2, $(".end").find("i").text());
        if (moneyPayOrder != null && moneyPayOrder != undefined) {
            if (moneyPayOrder.status == 0) {
                var paydate = new Date().format("yyyy-MM-dd hh:mm:ss");
                //8.10删掉电话参数
                var att = "{type=reservePay&orderId=" + moneyPayOrder.orderId + "&creatime=" + paydate + couponidstr + "&n=" + paydate + "&payType=normal}";
                var moneyResult = getpayid(0, $(".reverse i").text(), $(".orderFee i").text(), moneyPayOrder.orderId, att.toString());
                if (moneyResult != null && moneyResult != undefined) {
                    if (moneyResult.status == 1001) {
                        sessionStorage.removeItem("couponId");
                        $(".thickbox").css("top", "100%");
                        location.href = "orderSuccess.html?orderid=" + moneyPayOrder.orderId;
                    } else if (moneyResult.status == 0) {
                        weiXinPay(moneyResult, moneyPayOrder.orderId);
                    } else {
                    }
                    $(".tg_g_o .pay").attr("data-btn", "0");
                } else {
                    $(".tg_g_o .pay").attr("data-btn", "0");
                }
            } else if(moneyPayOrder.status == 101){  // 这是车位被其他人预定了
                $('.msgText').text(moneyPayOrder.message);
                $('.msgCover').show();
                $(".tg_g_o .pay").attr("data-btn", "0");
            } else {
                alert(moneyPayOrder.message);
                $(".tg_g_o .pay").attr("data-btn", "0");
            }
        } else {
            $(".tg_g_o .pay").attr("data-btn", "0");
        }
    } else {
        console.log("正在支付，不可重复下单！");
    }
});


$('.openSelectTime').click(function () {
    wubi();
    $('.selectTime').css("top", "0");
    $('.selectTime').show();
});


$('.time_tbn').click(function () {
    $('.selectTime').css("top", "100%");
    $('.selectTime').hide();
});


////预定查看日期点击事件(ul委托事件)（动态加载）
$(".time-box").on("click", "li", function () {
    $(this).addClass("on").siblings().removeClass("on");
    $(this).attr("data-val").split(" ")[0]
    getAllowPark(year + "-" + $(this).attr("data-val").split(" ")[0] + "-" + $(this).attr("data-val").split(" ")[1], arrs.length);
    var dares = getAllowParkRes;
    $(".timeAllow-box").html("");
    $.each(dares, function (index, ele) {
        $(".timeAllow-box").append("<li><span>" + ele.shareTime.split(" ")[1].split("~")[0] + "</span>~<span>" + ele.shareTime.split(" ")[2] + "</span></li>");
    });
});


//获得未支付订单
//8.24调试未支付订单支付
$.ajax({
    type: "post",
    dataType: "json",
    async: false,
    url: url + "order/ getUnpaidOrderDetail.do",
    data: {
        userId: userid
    },
    success: function (result) {
        if (result.status == 0) {
            if (result.unpaidOrderDetail != null) {
                $('.parkname').text(result.unpaidOrderDetail.parkName);
                $('.Carno').text(result.unpaidOrderDetail.carNumber);
                $('.enter').text(result.unpaidOrderDetail.inTime);
                $('.payFee').html("￥<i>" + result.unpaidOrderDetail.payPrice + "</i>元");
                $(".opera .cancel").attr("data-type", result.unpaidOrderDetail.orderId);
                $(".opera .pay").attr("data-type", result.unpaidOrderDetail.orderId);
                $('.waitPay').css("top", "0");
                $('.waitPay').show();
                $('.selectTime').css("top", "100%");
                $('.selectTime').hide();
            }
        }
        ajaxNum++;
    },
})


//取消未支付订单
$(".opera .cancel").click(function () {
    if (!Number($(this).attr("data-btn"))) {
        $(this).attr("data-btn", "1");
        $.ajax({
            type: "post",
            url: url + "order/cancleBookOrder.do",
            async: true,
            data: {
                orderId: $(this).attr("data-type"),
            },
            success: function (result) {
                if (result.status == 0) {//能取消
                    $('.waitPay').css("top", "100%");
                    $('.waitPay').hide();
                    $(".opera .cancel").attr("data-btn", "0");
                } else {
                    alert(result.message);
                    $(".opera .cancel").attr("data-btn", "0");
                }
            },
        });
    } else {
        console.log("取消订单");
    }
});


//未支付订单去支付
$(".opera .pay").click(function () {
    if (!Number($(this).attr("data-btn"))) {
        $(this).attr("data-btn", "1");
        var paydate = new Date().format("yyyy-MM-dd hh:mm:ss");
        var att = "{type=reservePay&orderId=" + $(this).attr("data-type") + "&creatime=" + paydate + "&n=" + paydate + "&payType=normal}";
        var weiPayResult = getpayid(1, $('.payFee i').text(), $('.payFee i').text(), $(this).attr("data-type"), att.toString());
        if (weiPayResult != null && weiPayResult != undefined) {
            if (weiPayResult.status == 0) {
                weiXinPay(weiPayResult, $(this).attr("data-type"));
            } else {
            }
        } else {
        }
    } else {
        console.log("正在支付，不可重复下单！");
    }
    $(this).attr("data-btn", "0");
});
historyajax();


//12.03----------------------这是现金支付创建订单（liuli）--------------------
function bookParkOrder(parkSeq, intime, realprice, vmobile, userId, carNumber, reserveType, outTime) {
    console.log("bookParkOrder");
    var bookParkOrdereResult = null;
    $.ajax({
        type: "post",
        dataType: "json",
        async: false,
        url: url + "order/postBookParkOrder",  // 这里去掉了接口末尾的.do(liuli)
        data: {
            parkSeq: parkSeq,
            intime: intime,
            realprice: realprice,
            mobile: vmobile,
            userId: userid,
            carNumber: carNumber,
            reserveType: reserveType,
            outTime: outTime,
            spaceId: dataId
        },
        success: function (result) {
            bookParkOrdereResult = result;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("网络错误，请稍候尝试！");
        }
    });
    console.log(bookParkOrdereResult);
    return bookParkOrdereResult;
}


//获得支付id -------------这是现金支付调起微信支付（liuli）-----------------------
// 积分充值及预订支付(沿用微信公众号支付,注意参数值)支付类型0直接支付1未支付订单支付2积分支付(积分充值传0)
function getpayid(type, price, totalFee, outTradeNo, attach) {
    console.log("getpayid");
    var getpayidResult = null;
    $.ajax({
        type: "post",
        dataType: "json",
        async: false,
        //8.10修改为下一行
        url: url + "weixinPay/h5CwydPrePay",
        data: {
            type: type,//0"去支付"/1"未支付订单支付、2积分支付（不调起微信支付）"
            price: price,
            userId: userid,
            openId: openId,
            body: "预定车位",
            outTradeNo: outTradeNo,
            totalFee: totalFee,
            attach: attach,
        },
        success: function (result) {
            getpayidResult = result;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("网络错误，请稍候尝试！");
        }
    });
    console.log(getpayidResult);
    return getpayidResult;
}


function weiXinPay(result, orderNo) {
    WeixinJSBridge.invoke('getBrandWCPayRequest', {
                //************************需要后台添加appId和timeStamp参数*******************
                //这里是调用微信需要的返回的参数
                "appId": result.appId,
                'timeStamp': result.timeStamp,
                'nonceStr': result.nonceStr,
                'package': result.packageStr,
                'signType': "MD5",
                'paySign': result.paySign,
            },
            function (res) {
                WeixinJSBridge.log(res.err_msg);
                if (res.err_msg == "get_brand_wcpay_request:ok") {  // 如果支付成功进入支付成功页面并传入订单id
                    $(".thickbox").css("top", "100%");
                    $(".thickbox").css("top", "100%");
                    location.href = "orderSuccess.html?orderid=" + orderNo;
                    if (typeof WeixinJSBridge == "undefined") {
                        if (document.addEventListener) {
                            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                        } else if (document.attachEvent) {
                            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
                        }
                    } else {
                        onBridgeReady();
                    }
                } else if (res.err_msg == "get_brand_wcpay_request:cancel") {// 如果未支付进入订单详情待支付状态
                    $(".thickbox").css("top", "100%");
                    $(".thickbox").css("top", "100%");
                    location.href = "orderDetail.html?orderid=" + orderNo;
                } else {
                    alert(JSON.stringify(res));
                    WeixinJSBridge.call('closeWindow');
                }
            });
}

//获得支付id  ------------------积分下单支付一起进行接口-----------------------------------
// type=0时判断orderType订单支付类型1：积分充值(无跳转)2：现金支付
function getBookPayOrder() {
    $.ajax({
        type: "post",
        dataType: "json",
        async: false,
        //12.14修改为下一行
        url: url + "order/postIntegraBookPayOrder",
        data: {
            outTime: $(".end").find("i").text(),
            channel: "",
            parkSeq: parkSeq,
            intime: $(".start").find("i").text(),
            realprice: $(".feePrice i").text(),
            mobile: $(".phoneNum").val(),
            userId: userid,
            openId: openId,
            carNumber: $(".carName .carno").attr("data-val"),
            reserveType: 2,
            spaceId: dataId
        },
        success: function (result) {
            console.log(result);
            if (result != null && result != undefined) {
                if (result.status == 1001) {
                    $(".payTypeTab .scoreNum").attr("data-num", Number($(".payTypeTab .scoreNum").attr("data-num")) - Number($(".feePrice i").text()));
                    $(".payTypeTab .scoreNum").text("(剩余" + $(".payTypeTab .scoreNum").attr("data-num") + "积分)");
                    $(".yuNum").text($(".payTypeTab .scoreNum").attr("data-num"));
                    location.href = "orderSuccess.html?orderid=" + result.orderId;
                } else {
                    alert(result.message);
                }
            } else {
                alert(result.message);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("网络错误，请稍候尝试！");
        }
    });
}

// 查询车场剩余车位,返回的数值就是剩余的车位数
function getParkSpaceNum() {
    var resultOk;
    $.ajax({
        type: "post",
        dataType: "json",
        async: false,
        url: url + "order/getParkSpaceNum",
        data: {
            parkId: parkSeq,
        },
        success: function (result) {
            if (result > 0) {
                resultOk = true;
            } else {
                resultOk = false;
            }
        },
    });
    return resultOk;
}

//获得url参数开始
function GetRequest() {
    var url = location.search;//获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            // 使用decodeURI 解码就不会中文乱码
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

var dataType = GetRequest()['dataType'];
var dataId = GetRequest()['dataId'];
var dataName = GetRequest()['dataName'];
var inTimeMap = GetRequest()['inTime'];
var outTimeMap = GetRequest()['outTime'];

console.log(dataType, dataName, dataId, inTimeMap);
if (dataType != undefined && dataId != undefined && dataName != undefined) {
    $('.toChoose').text(`${sessionStorage.getItem('dataFloorName')}层-${dataType} ${dataName}`);
}
// else{
//     dataId = undefined;
//     dataType = undefined;
//     dataName = undefined;
// }

if (dataType != undefined && dataId != undefined) {  // 这表明已经选位（liuli）
    $('.start .timei').text(inTimeMap);
    $('.end .timei').text(outTimeMap);
}

//进入在线选位
$(".chooseSpace").click(function () {
    location.href = `${toUrl}.html?parkSeq=${parkSeq}`;
    // if(dataType == undefined && dataId == undefined){  // 这表明未进去选位（liuli）
    //     location.href = `${toUrl}.html?parkSeq=${parkSeq}`;
    // }else{  // 这表明已经选位，想重新选择(liuli)
    //     window.history.go(-1);
    // }
});

// 这是如果车位被别人先预定了，会弹出来提示框，点击知道了，关闭弹框。
$('.msgKnow').click(function(){
    $('.msgCover').hide();
});