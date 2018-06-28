import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import echarts from 'echarts'

import {observer, inject} from 'mobx-react'


@inject('greenStore','redStore')
@observer
class App extends Component {
    componentDidMount() {
        console.log(this.props)
        const mychart = echarts.init(document.getElementById('main'));
        const op1 = {
            title: {text: '入门echarts', textStyle: {color: 'red'}, subtext: '666'},
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            tooltip: {//当鼠标滑过的时候提示信息
                trigger: 'axis'
            },
            toolbox: { //右上角的工具栏
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            legend: {left: 'center'},//右上角小题标
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} °C'
                }
            },
            series: [
                {
                    name: '最高气温',
                    type: 'line',
                    data: [11, 11, 15, 13, 12, 13, 10],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name: '最低气温',
                    type: 'line',
                    data: [1, -2, 2, 5, 3, 2, 0],
                    markPoint: {
                        data: [
                            {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'},
                            [{
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'max'
                            }, {
                                symbol: 'circle',
                                label: {
                                    normal: {
                                        position: 'start',
                                        formatter: '最大值44'
                                    }
                                },
                                type: 'max',
                                name: '最高点'
                            }]
                        ]
                    }
                }
            ]
        };
        var data = [];

        for (var i = 0; i <= 100; i++) {
            var theta = i / 100 * 360;
            var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
            data.push([r, theta]);
        }
        const op2 = {
            title: {
                text: '极坐标双数值轴'
            },
            legend: {
                data: ['line']
            },
            polar: {},
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            angleAxis: {
                type: 'value',
                startAngle: 0
            },
            radiusAxis: {},
            series: [{
                coordinateSystem: 'polar',
                name: 'line',
                type: 'line',
                data: data
            }]
        };
        mychart.setOption(op2);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                衣服颜色： {this.props.redStore.color}
                <div style={{width: 500, height: 500, border: '1px solid red'}} id='main'>

                </div>
                <button onClick={this.props.redStore.changeTogreen}>换衣服</button><br/>
             鞋子：   { this.props.greenStore.showse}
            </div>
        );
    }
}

export default App;
