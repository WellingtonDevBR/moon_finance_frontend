import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import faker from 'faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Sales Summary',
      },
    },
    
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Profit',
        data: labels.map(() => faker.datatype.number({ min: 1, max: 200000 })),
      borderColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 450);
          gradient.addColorStop(0, '#ED6735');
          gradient.addColorStop(1, '#C228AA');
          return gradient;
        },
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 450);
          gradient.addColorStop(0, '#ED6735');
          gradient.addColorStop(1, '#C228AA');
          return gradient;
        },
      },
      {
        label: 'Loss',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 200000 })),
        borderColor: '#3D3C41',
        backgroundColor: '#3D3C41',
      },
    ],
  };

export function Chart() {
    return <Line options={options} data={data} />;
}