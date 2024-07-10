import React from 'react';
import { render, RenderResult, cleanup } from '@testing-library/react';
import SimpleBarChart from './simpleBarChart';
import { ISimpleBarChart } from './interfaces';

// Polyfill for ResizeObserver
class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
}

window.ResizeObserver = ResizeObserver;

describe('SimpleBarChart', () => {
    let component: RenderResult;

    const data: ISimpleBarChart['data'] = [
        { x: 'A', y: 12 },
        { x: 'B', y: 23 },
        { x: 'C', y: 18 },
    ];

    const style: ISimpleBarChart['style'] = {
        width: 400,
        height: 300,
        margin: { top: 20, right: 30, left: 20, bottom: 5 },
    };

    const barStyle: ISimpleBarChart['barStyle'] = {
        fill: '#8884d8',
        radius: [10, 10, 0, 0],
    };

    beforeEach(() => {
        component = render(
            <SimpleBarChart
                style={style}
                barStyle={barStyle}
                data={data}
                CustomTooltip={undefined}
                CustomYAxisTick={undefined}
                CustomTick={undefined}
            />
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('should render successfully', () => {
        expect(component).toBeTruthy();
    });
});
