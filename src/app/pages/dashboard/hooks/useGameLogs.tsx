/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { IOuts, IPlayerStats } from '../interfaces';
import axios from 'axios';
import { environment } from '../../../../environments/environment';

const useGameLogs = (initialValue1: number, initialValue2: number) => {
    const [stats, setStats] = useState<IPlayerStats[]>([]);
    const [outs, setOuts] = useState({} as IOuts);

    useEffect(() => {
        getGameLogs(initialValue1, initialValue2);
    }, []);

    async function getGameLogs(min: number, max: number) {
        try {
            const { data } = await axios.get(
                `${environment.config.api.express.baseUrl}/gamelogs`,
                {
                    params: { min, max },
                }
            );

            console.log(data.gamelogs);
            setStats(data.gamelogs);
            setOuts((prev) => ({
                ...prev,
                progress: (data.gamelogs.length / data.total) * 100,
            }));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function updateState(current: number) {
        setOuts((prev) => ({ ...prev, average: current }));
    }

    return { stats, outs, getGameLogs, updateState };
};

export default useGameLogs;
