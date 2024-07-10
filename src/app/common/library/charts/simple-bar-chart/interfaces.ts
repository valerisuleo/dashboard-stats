
export interface ISimpleBarChart {
    data: IBarChartItem[];
    style: IStyle;
    barStyle: IBarStyle;
}

export interface IBarChartItem {
    x: string;
    y: number;
}
interface IStyle {
    width: number;
    height: number;
    margin: {
        top: number;
        right: number;
        left: number;
        bottom: number;
    };
}

export interface IBarStyle {
    fill: string;
    radius: [number, number, number, number];
}
