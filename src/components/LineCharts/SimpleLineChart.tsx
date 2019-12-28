import * as React from "react";
import Chart from 'chart.js';

export class SimpleLineChart extends React.Component<{}, {}> {
    node: any;

    constructor(props: Readonly<{}>) {
        super(props);
        this.node = this.refs.canvas as HTMLCanvasElement
    }

    componentDidMount() {
        console.log(this.refs);
        const canvas = this.refs.myCanvas as HTMLCanvasElement;

        if (canvas && canvas != null) {
            console.log(canvas);
            const ctx = canvas.getContext("2d");
            if (ctx != null) {
                console.log(ctx);
                new Chart(ctx, {
                    type: "line",
                    data: {
                        //Bring in data
                        labels: ["Jan", "Feb", "March"],
                        datasets: [
                            {
                                label: "Sales",
                                data: [86, 67, 91],
                            }
                        ]
                    },
                    options: {
                        //Customize chart options
                    }
                });
        }

    }

}

    public render() {


    return (
        <div >
            <p>simple line chart</p>
            <canvas
                id="myChart"
                ref="myCanvas"
            />

        </div>
    )



}
}