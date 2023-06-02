import React, { useEffect } from 'react';
import { Chart, LineController, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import "./body5.css";

Chart.register(LineController, CategoryScale, LinearScale, PointElement, LineElement);

const Body5 = () => {
  useEffect(() => {
    const ctx = document.getElementById("chart1");
    const data = {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
      datasets: [
        {
          label: 'Dataset',
          data: [0, 10, 5, 2, 20, 30], // Replace with your own data
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          pointStyle: 'circle',
          pointRadius: 10,
          pointHoverRadius: 15,
        },
      ],
    };

    new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: (ctx) => 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle,
          },
        },
      },
    });
  },);

  return (
    <div className="body5">
      <h1>Analyse Real Estate Data</h1>
      <p>Explore and analyse different locations, type of investments and returns associated with them through Real Estate Indices and heatmaps.</p>
      <h2>Real Estate Indices (REI)</h2>
      <div className="chart-container" style={{width: "80%"}}>
        <canvas id='chart1'></canvas>
      </div>
    </div>
  );
};

export default Body5;
