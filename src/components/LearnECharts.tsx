import React from 'react';
import * as echarts from 'echarts';



export const LearnECharts: React.FC<{}> = () => {
    const echartsContainer = React.useRef<HTMLDivElement>(null);
    const [echart, setEChart] = React.useState<echarts.ECharts | null>(null);
    const option: echarts.EChartsOption = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '40',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ]
            }
        ]
    };
    echart?.setOption(option);


    React.useEffect(() => {
        const e = echarts.init(echartsContainer.current as HTMLDivElement);
        setEChart(e);
    }, [echartsContainer.current]);

    return <div style={{ width: 100, height: 100 }} ref={echartsContainer}>A</div>;
}