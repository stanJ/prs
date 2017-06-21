$(function(){
	var line1 = echarts.init($(".chart--line1")[0]);
	var line2 = echarts.init($(".chart--line2")[0]);
	var line3 = echarts.init($(".chart--line3")[0]);
	var line4 = echarts.init($(".chart--line4")[0]);
	var line5 = echarts.init($(".chart--line5")[0]);
	var line_income = echarts.init($(".chart--line--income")[0]);
	var option = {
        title: {
            text: 'LINE CHART 2'
        },
        tooltip: {},
        legend: {
            data:['PARTNER 1']
        },
        xAxis: {
            type: 'time',
            splitLine: {
            	show: false
            }
        },
        yAxis: {},
        series: [{
            name: '新增客户',
            type: 'line',
            lineStyle: {
            	normal: {
            		color: '#51a5de'
            	}
            	
            },
            itemStyle: {
            	normal: {
            		color: '#51a5de'
            	}
            	
            },
            'symbol': 'emptyCircle',
            symbolSize: 10,
            data: [
            	['2017-04-26', 100],
            	['2017-04-27', 200],
            	['2017-04-28', 500],
            	['2017-04-29', 300],
            	['2017-04-30', 400],
            	['2017-05-01', 700],
            ]
        }]
    };
    line1.setOption(option)
    line2.setOption(option)
    line3.setOption(option)
    line4.setOption(option)
    line5.setOption(option)
    line_income.setOption(option)
})
