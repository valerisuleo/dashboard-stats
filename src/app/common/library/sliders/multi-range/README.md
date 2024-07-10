# MultiRangeSlider Component

## Overview

The `MultiRangeSlider` is a React component that provides a dual-slider interface for adjusting a range of values. It is particularly useful for filtering data within a specified range. This component dynamically updates and provides feedback as the user interacts with the sliders.

## Features

- **Dual Slider**: Allows users to select a range between two values.
- **Dynamic Updates**: Calls the `onSlide` callback with updated values whenever the slider values change.
- **Customizable**: The initial values and callback function can be customized via props.

## Installation

Ensure you have the necessary styles for the component by including `multiRangeSlider.module.scss` in your project. You can then import and use the component in your React application.

## Props

| Prop            | Type     | Description                                                  |
|-----------------|----------|--------------------------------------------------------------|
| `initialValue1` | number   | The initial value for the first slider.                      |
| `initialValue2` | number   | The initial value for the second slider.                     |
| `onSlide`       | function | Callback function that receives the updated slider values.   |

## Usage

Here's an example of how to use the `MultiRangeSlider` in your React project:

### Step 1: Import the Component and Styles

First, ensure that the component and its styles are imported correctly:

```javascript
import MultiRangeSlider from './path/to/multiRangeSlider';
import './path/to/multiRangeSlider.module.scss';
```

### Step 2: Use the Component in Your JSX

You can then use the component in your JSX, passing the appropriate props:

```javascript
import React, { useState } from 'react';
import MultiRangeSlider from './path/to/multiRangeSlider';
import './path/to/multiRangeSlider.module.scss';

const ExampleComponent = () => {
    const handleSlide = (value1, value2) => {
        console.log('Slider values:', value1, value2);
    };

    return (
        <div>
            <h2>Filter by Range</h2>
            <MultiRangeSlider
                initialValue1={10}
                initialValue2={50}
                onSlide={handleSlide}
            />
        </div>
    );
};

export default ExampleComponent;
```

In this example, the `MultiRangeSlider` initializes with values 10 and 50. The `handleSlide` function logs the slider values whenever they change.


## Conclusion

The `MultiRangeSlider` component is a flexible and interactive way to allow users to select a range of values in your React applications. With customizable initial values and a dynamic callback function, it can be tailored to fit various use cases and layouts.

