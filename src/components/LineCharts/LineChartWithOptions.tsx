import * as React from "react";
import Chart from 'chart.js';

export class LineChartWithOptions extends React.Component {

    componentDidMount() {
        const canvas = this.refs.myCanvas as HTMLCanvasElement;
        const ctx = canvas.getContext("2d");

        let data = [
            {
                label: "High Temperature",
                backgroundColor: "rgb(40,200,20)",
                borderColor: "rgb(40,200,20)",
                fill: false,
                data: [44, 32, 51, 17]
            },
            {
                label: "Low Temperature",
                backgroundColor: "rgb(180,70,60)",
                borderColor: "rgb(180,70,60)",
                fill: false,
                data: [21, 10, 22, -1]
            }
        ];
        
        if (ctx != null) {
            new Chart(ctx, {
                type: "line",
                data: {
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                    datasets: data
                },
                options: {
                    title: {
						display: true,
						text: 'Chart.js Line Chart with options'
                    },
                    scales: {
                      
                    }
                }
            });
        }
    }


    public render() {
        return (
            <div>
                <p>line chart with options. </p>
                <p>TO DO: add options. </p>
                <canvas
                    id="myChart"
                    ref="myCanvas"
                />
            </div>
        )
    }
}