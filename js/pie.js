var myChart = echarts.init(document.getElementById('pie'));
option = {

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
            { value: 8, name: 'Mon' },
            { value: 8, name: 'Tue' },
            { value: 7, name: 'Wed' },
            { value: 5, name: 'Thu' },
            { value: 30, name: 'Fri' },
            { value: 22, name: 'Sat' },
            { value: 25, name: 'Sun' },

        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 5,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};
myChart.setOption(option);