 //折线图
 var myChart = echarts.init(document.getElementById('line'));
 option = {
     xAxis: {
         type: 'category',
         data: ['01/26', '01/28', '01/30', '02/01', '02/03', '02/05', '02/07', '02/09', '02/11', '02/13', '02/15', '02/17', '02/19', '02/21', '02/23', ],
         axisLine: {
             lineStyle: {
                 type: 'dashed',
                 width: 1
             }
         },

     },
     yAxis: {
         type: 'value',
         axisLine: {
             lineStyle: {
                 type: 'dashed',
             }
         }
     },
     series: [{
         data: [8972, 6448, 7456, 5824, 8123, 300, 300, 5310, 7463, 1435, 9426, 8187, 8297, 443, 9135],
         type: 'line',
         smooth: true,
         lineStyle: {
             normal: {
                 color: '#4d8aee',
                 type: 'solid'
             }
         },
         areaStyle: {
             color: '#f3f6fe'
         },
         itemStyle: {
             normal: {
                 // 拐点上显示数值
                 label: {
                     show: true,
                     color: '#4d8aee'
                 },
                 borderColor: '#4d8aee', // 拐点边框颜色
                 lineStyle: {
                     width: 2, // 设置线宽
                     type: 'solid' //'dotted'虚线 'solid'实线
                 }
             }
         }
     }]
 };
 myChart.setOption(option);