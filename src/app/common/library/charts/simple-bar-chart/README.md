# SimpleBarChart Component

## Overview

The `SimpleBarChart` is a React component that leverages the `recharts` library to display a bar chart. This component is highly customizable, allowing you to define custom ticks, tooltips, and styles. It is ideal for visualizing data in a straightforward and visually appealing manner.

## Features

- **Customizable Chart**: Allows custom ticks, tooltips, and styles.
- **Responsive Design**: Utilizes `ResponsiveContainer` from `recharts` to ensure the chart adjusts to its container size.
- **Easy Integration**: Simple to integrate and use with your data.

## Installation

Ensure you have `recharts` installed in your project. You can then import and use the `SimpleBarChart` component in your React application.

## Props

| Prop            | Type     | Description                                                    |
|-----------------|----------|----------------------------------------------------------------|
| `style`         | object   | Custom styles for the chart, including width, height, and margin. |
| `barStyle`      | object   | Custom styles for the bars, including fill color and border radius. |
| `data`          | array    | Data to be displayed in the chart.                               |
| `CustomTooltip` | element  | Custom tooltip component.                                       |
| `CustomYAxisTick` | element | Custom Y-axis tick component.                                  |
| `CustomTick`    | element  | Custom X-axis tick component.                                   |

## Usage

Here's an example of how to use the `SimpleBarChart` in your React project:

### Step 1: Install `recharts`

If you haven't already, install `recharts`:

```bash
npm install recharts
```

### Step 2: Import the Component and Styles

First, ensure that the component is imported correctly:

```javascript
import SimpleBarChart from './path/to/SimpleBarChart';
import './path/to/SimpleBarChart.module.scss';
```

### Step 3: Use the Component in Your JSX

You can then use the component in your JSX, passing the appropriate props:

```javascript
import React from 'react';
import SimpleBarChart from './path/to/SimpleBarChart';

const data = [
    { x: 'Jan', y: 30 },
    { x: 'Feb', y: 20 },
    { x: 'Mar', y: 50 },
    // Add more data points as needed
];

const customTick = ({ x, y, payload }) => (
    <text x={x} y={y} textAnchor="middle" fill="#666">
        {payload.value}
    </text>
);

const ExampleComponent = () => {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <h2>Monthly Sales</h2>
            <SimpleBarChart
                data={data}
                style={{ width: 500, height: 300, margin: { top: 20, right: 30, left: 20, bottom: 5 } }}
                barStyle={{ fill: '#8884d8', radius: [10, 10, 0, 0] }}
                CustomTick={customTick}
            />
        </div>
    );
};

export default ExampleComponent;
```

In this example, the `SimpleBarChart` displays monthly sales data with custom ticks. The chart is rendered within a responsive container, ensuring it adjusts to the size of its parent element.

## Customization

To further customize the appearance, you can pass different custom tick, tooltip, and Y-axis tick components, and modify the style props to fit your design requirements.

### Example SCSS (SimpleBarChart.module.scss)

```scss
.chartContainer {
    width: 100%;
    height: 100%;
}

.customTooltip {
    background-color: white;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
}
```

This SCSS snippet provides a basic style setup for the chart container and custom tooltip. You can further customize it as needed.

## Conclusion

The `SimpleBarChart` component is a flexible and powerful tool for visualizing data in your React applications. With customizable ticks, tooltips, and styles, it can be tailored to fit various use cases and layouts.
