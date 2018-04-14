$(document).ready(function() {
	$('#registerForm').submit(function(e) {
		e.preventDefault();
		register();
	});
});
function register() {
	var params = $('#registerForm').serializeArray();
	params = toJson(params);
	if(params.password != params.psd) {
		swal('两次密码不一致');
		$('[name="psd"]').val('');
		$('[name="psd"]').focus();
		return;
	}
	$.ajax({
		url: '/user/register',
		data: params,
		type: 'post',
		success: function(data) {
			if(data.errcode == 0) swal(data.errmsg);
			swal({
				title: '注册成功'
			},function() {
				window.location.href = '/';
			});
		}
	});
}
function toJson(params) {
	var obj = {};
	$.each(params, function(i, field){
		obj[field.name] = field.value;
	});
	return obj;
}