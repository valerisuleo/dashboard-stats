
export interface IMultiRangeSlider {
    initialValue1: number;
    initialValue2: number;
    onSlide: (value1: number, value2: number) => void;
}
