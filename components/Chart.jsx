// Import LinearGradient from 'chartjs-plugin-linear-gradient'; // Uncomment this line if you haven't imported it already
"use client";
import React from 'react';
import "../styles/chart.css";
import { Bar } from 'react-chartjs-2';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import DropDown from './DropDown';

// Import LinearGradient from 'chartjs-plugin-linear-gradient'; // Uncomment this line if you haven't imported it already
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const chart = () => {


  return (
    <div className='sales_bg'>
      <header className='sales_header'>
        <h4>Sales Trends</h4>
        <div className='sort_header'>
          <p className='sort_header_p'>Sort by:</p>
          <DropDown />
        </div>
      </header>
      <div className="sales_trends">

        <Bar
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
              {
                data: [12000, 10000, 30000, 8000, 40000, 50000, 2000, 45000, 48000, 15000, 20000, 11000],
                backgroundColor: "#34CAA51A", 
                borderRadius: 20,
                hoverBackgroundColor: "#34CAA5",
                
              }
            ]
          }}

          options={{
            plugins: {
              legend: false
            },
            maintainAspectRatio: false,
            responsive: true,
            scales: {
              x: {
                type: "category",
                ticks: {
                    color: "#525252",
                    
                    
                },
                border: {
                    display: false
                },
                grid: {
                  display: false
                }
              },
              y: {
                type: "linear",
                ticks: {
                    color: "#525252",
                    
                
                },
                border: {
                    display: false,
                  dash: [3, 3],
                  
                  
                }
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default chart;
