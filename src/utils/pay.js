export default function weipay(option){
	wx.config({
		debug : true,
		appId : option.appId,
		timestamp : option.timestamp1,
		nonceStr : option.nonceStr1,
		signature : option.signature,
		jsApiList : [ 'chooseWXPay' ]
	});
	wx.ready(function() {
		var btn = document.getElementById("chooseWXPay");
		btn.onclick = function() {
			alert('click success');
			wx.chooseWXPay({
				timestamp : option.timestamp2,
				nonceStr : option.nonceStr2,
				package : option.package,
				signType : 'MD5',
				paySign : option.paySign,
				success : function(res) {
					if (res.errMsg == 'chooseWXPay:ok') {
						alert('支付成功');
					} else {
						alert('支付失败');
					}
				}
			});
		}
	});
	wx.error(function(res) {
		alert(res.errMsg);
	});
}