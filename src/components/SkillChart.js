import React from 'react';
import './SkillChart.css';
import { Card } from 'antd';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

// ChartJS.defaults.font.size = 10;

export const options = {
    tooltips: {
        enabled: false
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },
        title: {
            size: 10,
            display: true,
            text: 'Skills',
        },
    },
    scales: {
        x: {
        ticks: {
            font: {
                size: 10,
            }
        },
          grid: {
            display: false
          }
        },
        y: {
        display: false,
          grid: {
            display: false
          },
          title: {
            display: true,
          }
        }
      }
};

const labels = ['Angular', 'JS', 'Java', 'AWS', 'React', 'PHP', 'python'];

export const data = {
labels,
datasets: [
    {
    label: 'Dataset 1',
    data: [5, 5, 3, 3, 1.5, 3.5, 2],
    backgroundColor: 'rgb(69, 178, 221)',
    }

],
};

export function SkillChart() {
    return(
        <Card id="skill-card">
            <div class="skill-chart-wrapper">
                <Bar options={options} data={data} />
            </div>
        </Card>
    );    
}
