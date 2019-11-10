var myChart = echarts.init(document.getElementById('column'));
option = {
    title: {
        text: "商品数",
        textStyle: {
            fontSize: 14
        },
        padding: [33, 10, 10, 22]
    },
    color: ['#4587f0'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: '30%',
        data: [9, 11, 13, 10, 8, 11, 5]
    }]
};
myChart.setOption(option);