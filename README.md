# Streamify Analytics Dashboard

## Overview

Streamify Analytics Dashboard is a single-page web application designed to provide key insights into user activity, revenue, and content performance for a fictional music streaming service called "Streamify." Built using React and TypeScript, the dashboard is both responsive and visually appealing, offering an intuitive interface for the management team to track essential metrics and trends.

## Features

### Dashboard Overview

- **Key Metrics Display**
  - Total Users
  - Active Users
  - Total Streams
  - Revenue
  - Top Artist

- **Data Visualization**
  - **User Growth Chart**: A line chart showing the growth in total users and active users over the past 12 months.
  - **Revenue Distribution**: A pie chart displaying the breakdown of revenue from different sources (e.g., Subscriptions, Ads).
  - **Top 5 Streamed Songs**: A bar chart representing the top 5 most-streamed songs over the past 30 days.

- **Data Table**
  - Detailed information about recent streams with sortable and filterable columns.

### User Interaction

- **Sorting and Filtering**: Users can sort and filter data in the table based on different criteria like date, stream count, artist, and song name.
- **Chart Interactions**: Users can interact with charts (e.g., hovering over points on the line chart to see exact numbers or clicking on segments of the pie chart to filter the data table).

### Design & UX

- **Responsive Design**: The dashboard adapts to various screen sizes, ensuring a seamless experience across devices.
- **Modern UI**: Follows a modern design language focused on usability and clarity.

### Technical Stack

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **Charts**: `react-chartjs-2` with Chart.js
- **Mock Data**: Hardcoded JSON data
- **Testing**: Jest, React Testing Library

## Installation

### Prerequisites

- Node.js (v18)
- npm or yarn

### Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/smartgru/streamify-dashboard.git
   cd streamify-dashboard
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the Application**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Run Tests**

   ```bash
   npm test
   # or
   yarn test
   ```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

---

Thank you for checking out Streamify Analytics Dashboard! 🎵