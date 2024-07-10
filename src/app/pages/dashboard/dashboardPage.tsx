/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useState } from 'react';
import HalfCircleProgressBarComponent from '../../common/library/progress-bar/circular/half/halfCircle';
import MultiRangeSlider from '../../common/library/sliders/multi-range/multiRangeSlider';
import _ from 'lodash';
import {
    IBarChartItem,
    ISimpleBarChart,
} from 'src/app/common/library/charts/simple-bar-chart/interfaces';
import useGameLogs from './hooks/useGameLogs';
import styles from './dashboardPage.module.scss';
import useScreenDetect from '../../common/hooks/useScreen';
import SimpleBarChart from '../../common/library/charts/simple-bar-chart/simpleBarChart';
import CustomTick from './components/customTick';
import CustomYAxisTick from './components/customYAxisTick';
import CustomTooltip from './components/tooltip/customTooltip';

function DashboardPage() {
    const initialValue1 = 5;
    const initialValue2 = 30;
    const { stats, outs, getGameLogs, updateState } = useGameLogs(
        initialValue1,
        initialValue2
    );
    const screenType = useScreenDetect();
    const [chartData, setChartData] = useState<IBarChartItem[]>([]);

    const props: ISimpleBarChart = {
        data: chartData,
        style: {
            width: 150,
            height: 40,
            margin: {
                top: 5,
                right: 30,
                left: 20,
                bottom: 10,
            },
        },
        barStyle: {
            fill: '#ad9163',
            radius: [50, 50, 0, 0],
        },
        CustomTick,
        CustomYAxisTick,
        CustomTooltip,
    };

    useEffect(() => {
        calculateAverageOuts();
        generateChartData();
    }, [stats]);

    // Memoize the debounced function so it's not recreated on every render
    const debouncedGetGamesLogs = useMemo(
        () => _.debounce(getGameLogs, 300),
        []
    );

    // This ensures handleSlide is not recreated on every render and maintains a stable reference to debouncedGetGamesLogs.
    const handleSlide = useCallback(
        (min: number, max: number) => {
            debouncedGetGamesLogs(min, max);
        },
        [debouncedGetGamesLogs]
    );

    const calculateAverageOuts = () => {
        const totalOuts = stats.reduce((acc, current) => {
            return acc + current.stats.fielding.outsFaced;
        }, 0);

        const result =
            stats.length > 0 ? (totalOuts / stats.length).toFixed(1) : 0;
        updateState(+result);
    };

    const generateChartData = () => {
        const result = stats.map((item) => {
            const date = new Date(item.game.startTime);
            const day = String(date.getDate()).padStart(2, '0');
            let month = String(date.getMonth() + 1); // Months are zero-based, so add 1
            if (month.startsWith('0')) {
                month = month.slice(1);
            }
            // const year = String(date.getFullYear()).slice(-2);
            const formattedDate = `${month}/${day}`;

            return {
                x: `${formattedDate} | ${item.game.awayTeamAbbreviation}`,
                y: item.stats.fielding.outsFaced,
            };
        });

        setChartData(result);
    };

    return (
        <main
            className={`container-fluid ${
                screenType === 'desktop' ? 'p-5' : 'px-3 pt-4'
            }`}
        >
            <div className="row">
                <div className="col">
                    <div className={`card ${styles.widget}`}>
                        <div className="card-body">
                            <div className="d-flex flex-column flex-md-row justify-content-between">
                                <div className="p-3">
                                    <h3 className="card-title">
                                        {stats[0]?.player?.firstName}{' '}
                                        {stats[0]?.player?.lastName}
                                    </h3>
                                    <h5 className="card-text">Outs</h5>
                                </div>
                                <div style={{ minWidth: '70%' }}>
                                    <MultiRangeSlider
                                        initialValue1={initialValue1}
                                        initialValue2={initialValue2}
                                        onSlide={handleSlide}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-5 mt-4">
                <div
                    className={`col-md-6 ${
                        screenType === 'desktop' ? 'mb-0' : 'mb-4'
                    }`}
                >
                    <div className={`card ${styles.widget}`}>
                        <div className="px-4 pt-4">
                            <h5 className="card-title">Outs average</h5>
                            <hr />
                        </div>
                        <div className="card-body">
                            <div className="wrapper d-flex justify-content-center align-items-center">
                                <HalfCircleProgressBarComponent
                                    progress={_.round(outs.progress)}
                                    average={outs.average}
                                    width={screenType === 'desktop' ? 500 : 300}
                                    marginBottom={
                                        screenType === 'desktop'
                                            ? '-10rem'
                                            : '-5rem'
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={`card ${styles.widget}`}>
                        <div className="px-4 pt-4">
                            <h5 className="card-title">Breakdown per game</h5>
                            <hr />
                        </div>
                        <div className="card-body">
                            <div className={styles.chart}>
                                <SimpleBarChart {...props} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default DashboardPage;
