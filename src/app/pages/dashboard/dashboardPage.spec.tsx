import React from 'react';
import { render, RenderResult, cleanup } from '@testing-library/react';
import DashboardPage from './dashboardPage';

// Polyfill for ResizeObserver
class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
}

window.ResizeObserver = ResizeObserver;

describe('DashboardPage Component', () => {
    let component: RenderResult;

    beforeEach(() => {
        component = render(<DashboardPage />);
    });

    afterEach(() => {
        cleanup();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
