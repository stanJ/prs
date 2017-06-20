$(function(){
	var barH1 = echarts.init($(".chart--bar-h1")[0]);
	var barH2 = echarts.init($(".chart--bar-h2")[0]);
	var barH3 = echarts.init($(".chart--bar-h3")[0]);
	var barH4 = echarts.init($(".chart--bar-h4")[0]);
	var option = {
	    title: {
	        text: '世界人口总量',
	        subtext: '数据来自网络'
	    },
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    legend: {
	        data: ['2011年', '2012年']
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	        type: 'value',
	        boundaryGap: [0, 0.01]
	    },
	    yAxis: {
	        type: 'category',
	        data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
	    },
	    series: [
	        {
	            name: '2011年',
	            type: 'bar',
	            data: [18203, 23489, 29034, 104970, 131744, 630230]
	        },
	        {
	            name: '2012年',
	            type: 'bar',
	            data: [19325, 23438, 31000, 121594, 134141, 681807]
	        }
	    ]
	};
	barH1.setOption(option);
	barH2.setOption(option);
	barH3.setOption(option);
	barH4.setOption(option);
})
