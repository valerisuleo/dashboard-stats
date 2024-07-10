import { render } from '@testing-library/react';

import App from './app';
// Polyfill for ResizeObserver
class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
}

window.ResizeObserver = ResizeObserver;
describe('App', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<App />);
        expect(baseElement).toBeTruthy();
    });
});
