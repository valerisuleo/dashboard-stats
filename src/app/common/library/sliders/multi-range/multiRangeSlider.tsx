import React, { useState, useEffect } from 'react';
import styles from './multiRangeSlider.module.scss';
import { IMultiRangeSlider } from './interfaces';

const MultiRangeSlider = ({
    initialValue1,
    initialValue2,
    onSlide,
}: IMultiRangeSlider) => {
    const [value1, setValue1] = useState(initialValue1);
    const [value2, setValue2] = useState(initialValue2);

    useEffect(() => {
        onSlide(value1, value2);
    }, [value1, value2, onSlide]);

    const handleSlider1Change = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue1 = Math.min(parseInt(event.target.value), value2 - 1);
        setValue1(newValue1);
    };

    const handleSlider2Change = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue2 = Math.max(parseInt(event.target.value), value1 + 1);
        setValue2(newValue2);
    };

    const calculateStyleValue = (value: number, min: number, max: number) => {
        return (100 / (max - min)) * value - (100 / (max - min)) * min;
    };

    const value1Style = calculateStyleValue(value1, 0, 100);
    const value2Style = calculateStyleValue(value2, 0, 100);

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.label}>{value1}</div>
            </div>
            <div className={styles.box}>
                <div className={styles.slider}>
                    <div>
                        <div
                            className={styles.inverseLeft}
                            style={{ width: `${value1Style}%` }}
                        ></div>
                        <div
                            className={styles.inverseRight}
                            style={{ width: `${100 - value2Style}%` }}
                        ></div>
                        <div
                            className={styles.range}
                            style={{
                                left: `${value1Style}%`,
                                right: `${100 - value2Style}%`,
                            }}
                        ></div>
                        <span
                            className={styles.thumb}
                            style={{ left: `${value1Style}%` }}
                        ></span>
                        <span
                            className={styles.thumb}
                            style={{ left: `${value2Style}%` }}
                        ></span>
                    </div>
                    <input
                        type="range"
                        tabIndex={0}
                        value={value1}
                        max={100}
                        min={0}
                        step={1}
                        onChange={handleSlider1Change}
                    />
                    <input
                        type="range"
                        tabIndex={0}
                        value={value2}
                        max={100}
                        min={0}
                        step={1}
                        onChange={handleSlider2Change}
                    />
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.label}>{value2}</div>
            </div>
        </div>
    );
};

export default MultiRangeSlider;
