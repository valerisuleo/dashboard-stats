import { render } from '@testing-library/react';

import DashboardPage from './dashboardPage';

describe('DashboardPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardPage />);
    expect(baseElement).toBeTruthy();
  });
});
