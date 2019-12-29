import * as React from "react";
import Chart from 'chart.js';

export class SimpleLineChart extends React.Component {

    componentDidMount() {
        const canvas = this.refs.myCanvas as HTMLCanvasElement;
        const ctx = canvas.getContext("2d");
        
        if (ctx != null) {
            new Chart(ctx, {
                type: "line",
                data: {
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                    datasets: [
                        {
                            label: "High Temperature",
                            data: [44, 32, 51, 17],
                        },
                        {
                            label: "Low Temperature",
                            data: [21, 10, 22, -1],
                        }
                    ]
                }
            });
        }
    }


    public render() {
        return (
            <div>
                <p>simple line chart</p>
                <canvas
                    id="myChart"
                    ref="myCanvas"
                />
            </div>
        )
    }
}