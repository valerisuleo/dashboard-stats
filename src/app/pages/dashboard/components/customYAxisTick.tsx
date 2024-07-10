// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomYAxisTick = (props: any) => {
    const { x, y, payload } = props;
    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={0} textAnchor="end" fill="#fff">
                {payload.value}
            </text>
        </g>
    );
};

export default CustomYAxisTick;
