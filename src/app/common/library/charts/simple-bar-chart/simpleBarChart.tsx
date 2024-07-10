import { BarChart, Bar, ResponsiveContainer, CartesianGrid } from 'recharts';
import { ISimpleBarChart } from './interfaces';

function SimpleBarChart(props: ISimpleBarChart) {
    const { style, barStyle, data } = props;

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={style?.width}
                height={style?.height}
                data={data}
                margin={style?.margin}
            >
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
