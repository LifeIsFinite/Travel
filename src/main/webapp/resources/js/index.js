$(document).ready(function() {
	// 监听事件控制
	ListenControl();
});
// 监听事件控制
function ListenControl() {
	// 添加一级菜单选中样式事件
	$('.left-bar ul li .one').click(oneMenuClick);
	// 添加一级菜单选中样式事件
	$('.left-bar ul li .two').click(twoMenuClick);
}
function twoMenuClick() {
	$('.left-bar ul li a').removeClass('active');
	$(this).addClass('active');
	var id = $(this).attr('targrt-id');
	if(id) 'none'==$('#'+id).css('display')?$('#'+id).show(1000):$('#'+id).hide(1000);
}
function oneMenuClick() {
	$('.left-bar ul li a').removeClass('active');
	$(this).addClass('active');
	$('.ziMeun').hide(1000);
	var id = $(this).attr('targrt-id');
	if(id && 'none'==$('#'+id).css('display')) {
		$(this).removeClass('rotate1');
		$(this).addClass('rotate');
		$($(this)[0].children[0]).attr('class', 'fa fa-angle-left');
		$('#'+id).show(1000);
	} else if($('.rotate').length > 0) {
		$('.rotate').addClass('rotate1');
		$('.rotate1').removeClass('rotate');
		$('.fa-angle-left').attr('class', 'fa fa-angle-down');
	}
}