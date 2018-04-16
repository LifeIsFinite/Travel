function valiOfSign(data, callback) {
	if(data == 'notSinged') {
		swal({
			title: '登录享有更多权限',
			showCancelButton: true, 
			confirmButtonText: "去登录", 
			closeOnConfirm: false
		},function() {
			top.location.href = '/views/login.html';
		});
	}
	callback();
}
function toJson(params) {
	var obj = {};
	$.each(params, function(i, field){
		obj[field.name] = field.value;
	});
	return obj;
}
function buyTicket(kind, id) {
	
}