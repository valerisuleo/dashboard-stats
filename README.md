# Dashboard Data Visualization


## Overview

The application consists of two main parts:

1. **React Frontend**: An autocomplete component that allows users to fetch game's logs.
2. **Node.js Backend**: A server that provides city data to the frontend.

## Project Structure

```
src
├── app
│   ├── common
│   │   ├── hooks
│   │   └── library
│   │       ├── charts
│   │       ├── progress-bar
│   │       └── sliders
│   ├── pages
│   │   └── dashboard
│   │       ├── components
│   │       ├── hooks
│   │       ├── dashboardPage.module.scss
│   │       ├── dashboardPage.spec.tsx
│   │       ├── dashboardPage.tsx
│   │       └── interfaces.ts
│   ├── app.module.scss
│   ├── app.spec.tsx
│   └── app.tsx
├── assets
├── environments
└── favicon.ico

```


## Setting Up the Project

### Step 1: Install NX

If you haven't already installed NX, you can install it globally using npm:

```bash
npm install -g nx
```

### Step 2: Install Dependencies

Navigate to the client directory and run:

```bash
npm i
```

### Step 3: Start the Server

From the `backend` directory, start the server with:

```bash
npm i && node server.js
```

### Step 4: Run the React Application

From the `src` directory, start the React application with:

```bash
nx serve
```

Visit `http://localhost:4200` in your browser to see the dashboard in action.

### Step 4: Run Tests

```bash
nx test
```

## 1. Setting Up the Express Server

First, I created an Express server to serve the JSON data.

- **Reading the JSON File**: The server reads a JSON file containing game logs.
- **Filtering Data**: The server filters game logs based on query parameters `min` and `max`.
- **Serving Data**: The filtered data is served through the `/gamelogs` endpoint.

## 2. Creating React Components

I built several custom React components for the dashboard, using `recharts` for the charts.

#### Custom Components

**1. HalfCircleProgressBarComponent**

   - This component shows the progress of outs in a half-circle progress bar.
   - It calculates the rotation based on the progress percentage and displays the average value.

**2. MultiRangeSlider Component**

   - This component provides a dual-slider for adjusting the range of values to filter game logs.
   - It updates the displayed data dynamically as the slider values change.

**3. SimpleBarChart Component**

   - This component displays game data in a bar chart format using `recharts`.
   - The customization includes custom ticks, tooltips, and Y-axis ticks.

## 3. Building the Dashboard

I integrated the custom components into a `DashboardPage` to create the complete dashboard.

#### Layout and Structure

- **Responsive Design**: The layout is designed to be responsive, adjusting for both desktop and mobile views. The main container uses Bootstrap classes for padding and spacing.
- **State Management**: The dashboard uses local state management to handle data updates and component interactions. The `useState` and `useEffect` hooks from React are used for this purpose.


#### Data Fetching and Transformation

- **useGameLogs Hook**: Custom hook to manage data fetching and state updates.
  - **Fetching Data**: The `getGameLogs` function fetches game logs from the Express server based on the range slider values.
  - **State Updates**: The hook updates the state with the fetched data and calculates the progress and average outs.
  - **Debouncing**: The data fetching is debounced using `lodash` to optimize performance and reduce the number of API calls.


## Summary

### Custom Components

The development of custom components such as `HalfCircleProgressBarComponent` and `MultiRangeSlider` was both challenging and time-consuming. These components were tailored to meet the specific requirements of the project, providing a high level of customization and functionality. In a real-world application, leveraging a library with pre-built components might be a more efficient approach to save development time and effort.

### Data Management

The `useGameLogs` custom hook was pivotal in managing data fetching and state updates. It ensured that the dashboard displayed the most recent and relevant game logs based on user interactions with the range slider. The use of debouncing with `lodash` optimized performance and minimized unnecessary API calls, providing a smoother user experience.

### Responsive Design

The dashboard was built with responsiveness in mind, ensuring it adapts to both desktop and mobile views. This was achieved using Bootstrap classes for layout and spacing, making the application accessible and user-friendly across different devices.

### Conclusion

This project demonstrates the creation of a responsive data visualization dashboard using React and Express. While building custom components from scratch provided a deep understanding of their functionality, it highlighted the potential benefits of using established libraries for similar tasks in future projects. The approach taken ensures a highly customizable and interactive user experience, with efficient state management and data handling.


