import React from 'react';
import {
    BarChart,
    Bar,
    ResponsiveContainer,
    XAxis,
    CartesianGrid,
    YAxis,
    Tooltip,
} from 'recharts';
import { ISimpleBarChart } from './interfaces';

function SimpleBarChart(props: ISimpleBarChart) {
    const {
        style,
        barStyle,
        data,
        CustomTooltip,
        CustomYAxisTick,
        CustomTick,
    } = props;

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={style?.width}
                height={style?.height}
                data={data}
                margin={style?.margin}
            >
                {CustomTick ? (
                    <XAxis dataKey="x" tick={<CustomTick />} />
                ) : (
                    <XAxis dataKey="x" />
                )}
                {CustomYAxisTick ? (
                    <YAxis tick={<CustomYAxisTick />} />
                ) : (
                    <YAxis />
                )}
                {CustomTooltip ? (
                    <Tooltip content={<CustomTooltip />} />
                ) : (
                    <Tooltip />
                )}
                <CartesianGrid strokeDasharray="3 3" />
                <Bar
                    dataKey="y"
                    fill={barStyle?.fill}
                    radius={barStyle?.radius}
                />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default SimpleBarChart;
