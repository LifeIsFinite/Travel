$(document).ready(function() {
	initTable();
});
function initTable(data) {
	$('#trainTable').bootstrapTable({
		url: '/ticket/train',
		toolbar: '#toolbar', //工具按钮用哪个容器
		striped: true,                      // 是否显示行间隔色
		pagination: true,                   // 是否显示分页（*）
		sidePagination: "client",           // 分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                      // 初始化加载第一页，默认第一页,并记录
        pageSize: 8,                     // 每页的记录行数（*）
        columns: [{
            field: 'number',
            title: '班次'
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
function genData() {
	var data = new Array(34);
	$.each(data, function(i, item){
		var row = {
				number: 10001,
				start: '南京',
				end: '北京',
				sTime: new Date().getTime(),
				eTime: (new Date().getTime()) + 2*60*60*1000,
				cTime: (new Date().getTime()) - 10*60*1000,
				pTime: '2小时',
				surplus: Math.floor(Math.random() * 100) + 3
		};
		$.each(row, function(j, item1) {
			if(j=='sTime'||j=='eTime'||j=='cTime') {
				row[j] = item1 + (i+1)*30*60*1000;
			} else if(j == 'pTime') {
			} else {
				row[j] = item1 + i;
			}
		});
		data[i] = row;
	});
	return data;
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