/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
const current = new Date();
*/
const today = new Date();
const today2 = new Date();
const t1 = today.toDateString();
today.setDate(today.getDate()-1);
const t2 = today.toDateString();
today.setDate(today.getDate()-1);
const t3 = today.toDateString();
today.setDate(today.getDate()-1);
const t4 = today.toDateString();
today.setDate(today.getDate()-1);
const t5 = today.toDateString();
today2.setDate(today2.getDate()+1);
const t6 = today2.toDateString();
today2.setDate(today2.getDate()+1);
const t7 = today2.toDateString();
const API_URL = 'http://503a-34-91-35-125.ngrok.io/h';
const dashboard24HoursPerformanceChart = {



  data: (canvas) => {
    return {
      labels: [
        t5,
        t4,
        t3,
        t2,
        t1,
        t6,
        t7,
        
      ],
      datasets: [
      {
          borderColor: "gray",
          backgroundColor: "gray",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          data: [350, 310, 316, 322, 340, 326, 333],
        },
        {
          borderColor: "#6bd098",
          backgroundColor: "#6bd098",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          data: [300, 310, 316, 322, 330, 326, 333],
        },
        {
          borderColor: "#f17e5d",
          backgroundColor: "#f17e5d",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          data: [320, 340, 365, 360, 370, 385, 390],
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484],
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      y: {
        ticks: {
          color: "#9f9f9f",
          beginAtZero: false,
          maxTicksLimit: 5,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        barPercentage: 1.6,
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          padding: 20,
          color: "#9f9f9f",
        },
      },
    },
  },
};



module.exports = {
  dashboard24HoursPerformanceChart,
 
};
