$(document).ready(function() {
	initTable();
});
function initTable(data) {
	$('#boatTable').bootstrapTable({
		url: '/ticket/boat',
		toolbar: '#toolbar', //工具按钮用哪个容器
		striped: true,                      // 是否显示行间隔色
		pagination: true,                   // 是否显示分页（*）
		sidePagination: "client",           // 分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                      // 初始化加载第一页，默认第一页,并记录
        pageSize: 8,                     // 每页的记录行数（*）
        columns: [{
            field: 'number',
            title: '航次'
        },{
            field: 'start',
            title: '出发地'
        }, {
            field: 'end',
            title: '目的地'
        }, {
            field: 'sTime',
            title: '出发时间',
            formatter: timestampToTime
        }, {
            field: 'eTime',
            title: '到达时间',
            formatter: timestampToTime
        }, {
            field: 'cTime',
            title: '检票时间',
            formatter: timestampToTime
        }, {
            field: 'pTime',
            title: '预计耗时'
        }, {
            field: 'surplus',
            title: '剩余票数'
        }, {
        	field: 'id',
        	title: '功能',
        	formatter: function(value, row, index) {
        		return '<button class="btn btn-success btn-sm" onclick="buyTicket('+value+')">购买</button>';
        	}
        }],
        responseHandler: function(res) {
        	if(res.errcode == 1) return res.data;
        	return [];
        }
    });
}
function buyTicket(id) {
}
function timestampToTime(value, row, index) {
	var date = new Date(value);
	//时间戳为10位需*1000，时间戳为13位的话不需乘1000
	if(value.length == 10)
		var date = new Date(value * 1000);
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y+M+D+h+m+s;
}