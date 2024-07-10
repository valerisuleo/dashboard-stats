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
import CustomTooltip from '../../../../pages/dashboard/components/tooltip/customTooltip';
import CustomYAxisTick from '../../../../pages/dashboard/components/customYAxisTick';
import CustomTick from '../../../../pages/dashboard/components/customTick';

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
                <XAxis dataKey="x" tick={<CustomTick />} />
                <YAxis tick={<CustomYAxisTick />} />
                <Tooltip content={<CustomTooltip />} />
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
