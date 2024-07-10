import React from 'react';
import MultiRangeSlider from './multiRangeSlider';
import { cleanup, render, fireEvent, RenderResult } from '@testing-library/react';
import { IMultiRangeSlider } from './interfaces';

describe('MultiRangeSlider Component', () => {
    let component: RenderResult;
    let onSlideMock: jest.Mock;

    beforeEach(() => {
        onSlideMock = jest.fn();
        const props: IMultiRangeSlider = {
            initialValue1: 0,
            initialValue2: 100,
            onSlide: onSlideMock,
        };
        component = render(<MultiRangeSlider {...props} />);
    });

    afterEach(() => {
        cleanup();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should update value1 when the first slider is changed', () => {
        const sliders = component.container.querySelectorAll('input[type="range"]');
        const slider1 = sliders[0] as HTMLInputElement;
        fireEvent.change(slider1, { target: { value: '20' } });

        expect(slider1.value).toBe('20');
        expect(onSlideMock).toHaveBeenCalledWith(20, 100);
    });

    it('should update value2 when the second slider is changed', () => {
        const sliders = component.container.querySelectorAll('input[type="range"]');
        const slider2 = sliders[1] as HTMLInputElement;
        fireEvent.change(slider2, { target: { value: '80' } });

        expect(slider2.value).toBe('80');
        expect(onSlideMock).toHaveBeenCalledWith(0, 80);
    });
});
