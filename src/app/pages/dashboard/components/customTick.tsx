// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTick = (props: any) => {
    const { x, y, payload } = props;
    const [date, team] = payload.value.split(' | ');
    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="middle" fill="#fff">
                <tspan x="0" dy="1em">
                    {date}
                </tspan>
                <tspan x="0" dy="1em">
                    {team}
                </tspan>
            </text>
        </g>
    );
};

export default CustomTick;
