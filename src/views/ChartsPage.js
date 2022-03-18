import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from 'axios';
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
const API_URL = 'http://1f07-34-91-52-141.ngrok.io';


class ChartsPage extends React.Component {
  componentDidMount() {
   
    axios.get(API_URL).then(response => response.data)
    .then((data) => {
      this.setState({ day0rain: data['0']['rain'],
      day0wind: data['0']['wind'], 
      day0temp: data['0']['temp'], 
      day0flood: data['0']['flood'], 
      day1rain: data['1']['rain'],
      day1wind: data['1']['wind'], 
      day1temp: data['1']['temp'], 
      day1flood: data['1']['flood'], 
      day2rain: data['2']['rain'],
      day2wind: data['2']['wind'],
      day2flood: data['2']['flood'], 
      day2temp: data['2']['temp'], 
      daym1rain: data['-1']['rain'],
      daym1wind: data['-1']['wind'], 
      daym1temp: data['-1']['temp'], 
      daym1flood: data['-1']['flood'], 
      daym2rain: data['-2']['rain'],
      daym2wind: data['-2']['wind'], 
      daym2temp: data['-2']['temp'], 
      daym2flood: data['-2']['flood'],
      daym3rain: data['-3']['rain'],
      daym3wind: data['-3']['wind'], 
      daym3temp: data['-3']['temp'], 
      daym3flood: data['-3']['flood'],
      daym4rain: data['-4']['rain'],
      daym4wind: data['-4']['wind'], 
      daym4temp: data['-4']['temp'], 
      daym4flood: data['-4']['flood'],})
      





  })}
  state = {
    dataLine: {
      labels: [t5, t4, t3, t2, t1, t6, t7],
      datasets: [
        {
          label: "Rain",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(225, 204,230, .3)",
          borderColor: "rgb(205, 130, 158)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [33, 48, 40, 19, 86, 27, 90]
        },
        {
          label: "My Second dataset",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgb(35, 26, 136)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(35, 26, 136)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [28, 48, 40, 19, 86, 27, 90]
        },
        {
          label: "My Second dataset2",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgb(35, 26, 136)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(35, 26, 136)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
  };

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Line chart</h3>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default ChartsPage;