import React from 'react';

const Analytics = () => {
  return (
    <div className="analytics">
      <h2>Request Analytics</h2>

      <div className="analytics-overview">
        <h3>Overall Performance</h3>
        {/* Placeholder for graph/chart, you can integrate with Chart.js or another library */}
        <div className="chart-placeholder">[Graph Placeholder]</div>
      </div>

      <div className="analytics-details">
        <h3>Requests By Category</h3>
        <ul>
          <li>Category 1: 50 requests</li>
          <li>Category 2: 30 requests</li>
          <li>Category 3: 20 requests</li>
        </ul>
      </div>

      <div className="processing-times">
        <h3>Processing Times</h3>
        <ul>
          <li>Average Processing Time: 2 hours</li>
          <li>Max Processing Time: 5 hours</li>
          <li>Min Processing Time: 30 minutes</li>
        </ul>
      </div>
    </div>
  );
};

export default Analytics;
