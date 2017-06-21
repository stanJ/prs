$(function(){
	var area1 = echarts.init($(".chart--area1")[0]);
	var option = {
	    tooltip : {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'cross',
	            label: {
	                backgroundColor: '#6a7985'
	            }
	        }
	    },
//	    legend: {
//	        data:['搜索引擎']
//	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data : ['周一','周二','周三','周四','周五','周六','周日']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'搜索引擎',
	            type:'line',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            smooth: true,
	            areaStyle: {normal: {
	            	color: '#edf6fc'
	            }},
	            lineStyle: {
	            	normal: {
	            		color: '#53a8e2'
	            	}
	            },
	            data:[820, 932, 901, 934, 1290, 1330, 1320]
	        }
	    ]
	};
	area1.setOption(option);
})
