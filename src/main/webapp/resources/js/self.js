$(document).ready(function() {
	$('.btn-warning').click(function() {
		$('#myModal').modal('show');
	});
	showUserinfo();
	$('#psd').submit(function(e) {
		e.preventDefault();
		var params = $('#psd').serializeArray();
		params = toJson(params);
		if(params.password != params.psd) {
			swal('两次密码不一致');
			return;
		}
		params.id = Cookies.getJSON('user').id;
		$.ajax({
			url: '/pri/editUser',
			data: params,
			type: 'post',
			success: function(data) {
				valiOfSign(data, function() {
					if(data.errcode == 0) {
						swal(data.errmsg);
						return;
					}
					swal('修改成功');
				});
			}
		});
	});
	$('#selfForm').submit(function(e) {
		e.preventDefault();
		var params = $('#selfForm').serializeArray();
		params = toJson(params);
		params.id = Cookies.getJSON('user').id;
		params.gender=='男'?params.gender=1:params.gender=0;
		params.birthday += ' 00:00:00';
		$.ajax({
			url: '/pri/editUser',
			data: params,
			type: 'post',
			success: function(data) {
				console.log(data);
				valiOfSign(data, function() {
					if(data.errcode == 0) {
						swal(data.errmsg);
						return;
					}
					swal({
						title: '修改成功'
					},function() {
						Cookies.set('user', data.data);
					});
				});
			}
		});
	});
});
function showUserinfo() {
	if(!Cookies.get('signed')) return;
	var user = Cookies.getJSON('user');
	$('[name="nickname"]').val(user.nickname);
	$('[name="phone"]').val(user.phone);
	$('[name="gender"]').val(user.nickname==0?'女':'男');
	$('[name="birthday"]').val(timestampToTime(user.birthday));
}
function timestampToTime(value) {
	var date = new Date(value);
	//时间戳为10位需*1000，时间戳为13位的话不需乘1000
	if(value.length == 10)
		var date = new Date(value * 1000);
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
    return Y+M+D;
}