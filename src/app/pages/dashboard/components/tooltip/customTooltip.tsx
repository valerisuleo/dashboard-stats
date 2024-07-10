import styles from './customTooltip.module.scss';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        const [date, team] = label.split(' | ');

        return (
            <div className={styles.tooltip}>
                <p
                    className="label"
                    style={{ color: '#fff' }}
                >{`${payload[0].value}`}</p>
                <p className="label">{`${date}`}</p>
                <p className="label">{`${team}`}</p>
            </div>
        );
    }

    return null;
};

export default CustomTooltip;
