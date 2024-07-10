# HalfCircleProgressBarComponent

## Overview

The `HalfCircleProgressBarComponent` is a React component designed to display a half-circle progress bar. It visually represents a percentage value, and can also show an average value if provided. This component is particularly useful for visualizing progress metrics in a compact and visually appealing manner.

## Features

- **Progress Visualization**: Displays the progress as a half-circle, with 100% corresponding to a full 180-degree rotation.
- **Average Display**: Optionally displays an average value below the progress percentage.
- **Customizable Dimensions**: Allows for custom width and margin settings to fit various layouts.

## Installation

Ensure you have the necessary styles for the component by including `halfCircle.module.scss` in your project. You can then import and use the component in your React application.

## Props

| Prop         | Type     | Description                                                 |
|--------------|----------|-------------------------------------------------------------|
| `progress`   | number   | The progress percentage to display (0-100).                 |
| `width`      | number   | The width (and height) of the progress bar in pixels.       |
| `average`    | number   | The average value to display below the progress (optional). |
| `marginBottom` | string | The bottom margin for the component (e.g., '-10rem').       |

## Usage

Here's an example of how to use the `HalfCircleProgressBarComponent` in your React project:

### Step 1: Import the Component and Styles

First, ensure that the component and its styles are imported correctly:

```javascript
import HalfCircleProgressBarComponent from './path/to/halfCircle';
import './path/to/halfCircle.module.scss';
```

### Step 2: Use the Component in Your JSX

You can then use the component in your JSX, passing the appropriate props:

```javascript
import React from 'react';
import HalfCircleProgressBarComponent from './path/to/halfCircle';
import './path/to/halfCircle.module.scss';

const ExampleComponent = () => {
    return (
        <div>
            <h2>Progress Overview</h2>
            <HalfCircleProgressBarComponent
                progress={75}
                width={300}
                average={65}
                marginBottom="-5rem"
            />
        </div>
    );
};

export default ExampleComponent;
```

In this example, the `HalfCircleProgressBarComponent` displays a progress of 75% with a width of 300 pixels, an average value of 65%, and a bottom margin of `-5rem`.


## Conclusion

The `HalfCircleProgressBarComponent` is a versatile and visually appealing way to represent progress metrics in your React applications. With customizable dimensions and optional average value display, it can be tailored to fit various use cases and layouts.

