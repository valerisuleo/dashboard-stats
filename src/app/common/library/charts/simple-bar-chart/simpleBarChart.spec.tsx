import { render } from '@testing-library/react';

import SimpleBarChart from './simpleBarChart';

describe('SimpleBarChart', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<SimpleBarChart />);
        expect(baseElement).toBeTruthy();
    });
});
