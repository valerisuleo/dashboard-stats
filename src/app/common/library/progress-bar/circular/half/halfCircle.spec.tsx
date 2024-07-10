import { render } from '@testing-library/react';

import HalfCircleProgressBarComponent from './halfCircle';

describe('HalfCircleProgressBarComponent', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <HalfCircleProgressBarComponent progress={0} width={0} average={0} marginBottom={''} />
        );
        expect(baseElement).toBeTruthy();
    });

    it('should render with 50% progress correctly', () => {
        const { getByText } = render(
            <HalfCircleProgressBarComponent progress={50} width={100} average={0} marginBottom={''} />
        );
        const progressText = getByText('50%');
        expect(progressText).toBeTruthy();
    });

    it('should render with 100% progress correctly', () => {
        const { getByText } = render(
            <HalfCircleProgressBarComponent progress={100} width={100} average={0} marginBottom={''} />
        );
        const progressText = getByText('100%');
        expect(progressText).toBeTruthy();
    });
});
