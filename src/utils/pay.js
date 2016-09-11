export default function weipay(option, cb, errorCb){
	wx.config({
		debug : true,
		appId : option.appId,
		timestamp : option.timestamp1,
		nonceStr : option.nonceStr1,
		signature : option.signature,
		jsApiList : [ 'chooseWXPay' ]
	});
	wx.ready(function() {
    wx.chooseWXPay({
      timestamp : option.timestamp2,
      nonceStr : option.nonceStr2,
      package : option.package,
      signType : 'MD5',
      paySign : option.paySign,
      success : function(res) {
        if (res.errMsg == 'chooseWXPay:ok') {
          cb && cb();
        } else {
          errorCb && errorCb();
        }
      }
    });
	});
	wx.error(function(res) {
		alert(res.errMsg);
	});
}