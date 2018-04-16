$(document).ready(function() {
	$('#loginForm').submit(function(e) {
		e.preventDefault();
		login();
	});
});
function login() {
	var params = $('#loginForm').serializeArray();
	params = toJson(params);
	$.ajax({
		url: '/user/login',
		data: params,
		type: 'post',
		success: function(data) {
			if(data.errcode == 0) swal(data.errmsg);
			Cookies.set('user', data.data);
			Cookies.set('signed', true);
			window.location.href = '/';
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