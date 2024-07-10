import styles from './halfCircle.module.scss';

/* eslint-disable-next-line */
export interface IBarCutProps {
    progress: number;
    width: number;
    average: number;
    marginBottom: string; // Add the marginBottom prop
}

const HalfCircleProgressBarComponent = ({
    progress,
    width,
    average,
    marginBottom,
}: IBarCutProps) => {
    // Calculate the rotation angle
    const rotation = progress * 1.8; // 100% progress corresponds to 180 degrees

    return (
        <div className={styles.progress}>
            <div
                className={styles['bar-overflow']}
                style={{
                    height: `${width / 2}px`,
                    width: `${width}px`,
                    marginBottom: marginBottom, // Use the marginBottom prop
                }}
            >
                <div
                    className={styles.bar}
                    style={{
                        transform: `rotate(${45 + rotation}deg)`,
                        height: `${width}px`,
                        width: `${width}px`,
                    }}
                ></div>
            </div>
            <div className={styles['values']}>
                <h1>{`${progress}%`}</h1>
                {average ? <p>{`Average: ${average}%`}</p> : null}
            </div>
        </div>
    );
};

export default HalfCircleProgressBarComponent;
