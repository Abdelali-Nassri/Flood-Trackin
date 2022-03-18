import React from "react";
import react from "react";
import { MDBContainer } from "mdbreact";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import axios from 'axios';
// core components






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


const API_URL = 'http://0bdf-34-125-231-38.ngrok.io/h';
class User extends react.Component {
  



  componentDidMount() {
    const today1 = new Date();
    this.setState({ t11 :today1.toDateString()})
    today1.setDate(today1.getDate()+1);
    this.setState({ t22 :today1.toDateString()})    
    today1.setDate(today1.getDate()+1);
    this.setState({ t33 :today1.toDateString()})
    axios.get(API_URL).then(response => response.data)
    .then((data) => {
      this.setState({ day0rain: data['0']['rain'],
      day0wind: data['0']['wind'], 
      day0temp: data['0']['temp'], 
      day1rain: data['1']['rain'],
      day1wind: data['1']['wind'], 
      day1temp: data['1']['temp'], 
      day2rain: data['2']['rain'],
      day2wind: data['2']['wind'], 
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
      daym4flood: data['-4']['flood'],  })
      if (data['0']['flood'] ===0) {this.setState({day0flood:'no',bg0:false})}
      else {this.setState({day0flood:'yes',bg0:true})}
      if (data['1']['flood'] ===0) {this.setState({day1flood:'no',bg1:false})}
      else {this.setState({day1flood:'yes',bg1:true})}
      if (data['2']['flood'] ===0) {this.setState({day2flood:'no',bg2:false})}
      else {this.setState({day2flood:'yes',bg2:true})}


        this.setState({dataLineRain: {
      labels: [t5, t4, t3, t2, t1, t6, t7],
      datasets: [
        {
          label: "Rain mm",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(18, 89, 237, 0.8)",
          borderColor: "rgba(18, 89, 237, 0.8)",
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
          data: [Number(data['-4']['rain']), Number(data['-3']['rain']), Number(data['-2']['rain']), Number(data['-1']['rain']), Number(data['0']['rain']), Number(data['1']['rain']), Number(data['2']['rain'])]
        }
      ]
    }})

      this.setState({dataLineWind: {
      labels: [t5, t4, t3, t2, t1, t6, t7],
      datasets: [
        {
          label: "Wind Km/H",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(198, 174, 223, 0.26)",
          borderColor: "rgba(198, 174, 223, 0.26)",
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
          data: [Number(data['-4']['wind']), Number(data['-3']['wind']), Number(data['-2']['wind']), Number(data['-1']['wind']), Number(data['0']['wind']), Number(data['1']['wind']), Number(data['2']['wind'])]
        }
      ]
    }})

      this.setState({dataLineTemp: {
      labels: [t5, t4, t3, t2, t1, t6, t7],
      datasets: [
        {
          label: "Temperature °C",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(234, 176, 16, 0.64)",
          borderColor: "rgba(234, 176, 16, 0.64)",
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
          data: [Number(data['-4']['temp']), Number(data['-3']['temp']), Number(data['-2']['temp']), Number(data['-1']['temp']), Number(data['0']['temp']), Number(data['1']['temp']), Number(data['2']['temp'])]
        }
      ]
    }})

this.setState({dataLineFlood: {
      labels: [t5, t4, t3, t2, t1, t6, t7],
      datasets: [
        {
          label: "Flood (oui/no)",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(255, 0, 0, 0.78)",
          borderColor: "rgba(255, 0, 0, 0.78)",
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
          data: [Number(data['-4']['flood'])*50, Number(data['-3']['flood'])*50, Number(data['-2']['flood'])*50, Number(data['-1']['flood'])*50, Number(data['0']['flood'])*50, Number(data['1']['flood'])*50, Number(data['2']['flood'])*50]
        }
      ]
    }})

this.setState({dataLine: {
      labels: [t5, t4, t3, t2, t1, t6, t7],
      datasets: [
        {
          label: "Rain mm",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(225, 204,230, .3)",
          borderColor: "rgba(18, 89, 237, 0.8)",
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
          data: [Number(data['-4']['rain']), Number(data['-3']['rain']), Number(data['-2']['rain']), Number(data['-1']['rain']), Number(data['0']['rain']), Number(data['1']['rain']), Number(data['2']['rain'])]
        },
        {
          label: "Temperature °C",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgba(234, 176, 16, 0.64)",
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
          data: [Number(data['-4']['temp']), Number(data['-3']['temp']), Number(data['-2']['temp']), Number(data['-1']['temp']), Number(data['0']['temp']), Number(data['1']['temp']), Number(data['2']['temp'])]
        },
        {
          label: "Wind Km/H",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgba(198, 174, 223, 0.26)",
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
          data: [Number(data['-4']['wind']), Number(data['-3']['wind']), Number(data['-2']['wind']), Number(data['-1']['wind']), Number(data['0']['wind']), Number(data['1']['wind']), Number(data['2']['wind'])]
        },
        {
          label: "Flood (oui/no)",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgba(255, 0, 0, 0.78)",
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
          data: [Number(data['-4']['flood'])*50, Number(data['-3']['flood'])*50, Number(data['-2']['flood'])*50, Number(data['-1']['flood'])*50, Number(data['0']['flood'])*50, Number(data['1']['flood'])*50, Number(data['2']['flood'])*50]
        }
      ]
    }})

  })}

    state = {
    
  };

  render(){
  return (
    <>
      <div className="content">
      <MDBContainer>
      <Card className="card-stats">
              <CardBody>
              <Card className="card-stats">
              <CardBody>
                <h5>Predictions for the next 3 days</h5>
              </CardBody>
        </Card>
<CardFooter>
                
                <div className="stats">
                  <i className="far fa-calendar" /> {this.state.t11}
                </div>
                
              </CardFooter>
        <Row>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-umbrella-13 text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Rain</p>
                      <CardTitle tag="p">{this.state.day0rain} mm</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>

            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-sun-fog-29 text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Temperature</p>
                      <CardTitle tag="p">{this.state.day0temp} °C</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-user-run text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Wind</p>
                      <CardTitle tag="p">{this.state.day0wind} k/h</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
          {this.state.bg0?
            <Card className="card-stats bg-danger">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-sound-wave text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7" className="">
                    <div className="numbers">
                      <p className="card-category ">Flood</p>
                      <CardTitle tag="p">{this.state.day0flood}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              
            </Card>
            :
            <Card className="card-stats bg-success">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-sound-wave text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7" className="">
                    <div className="numbers">
                      <p className="card-category ">Flood</p>
                      <CardTitle tag="p">{this.state.day0flood}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              
            </Card>}
          </Col>
        </Row>
        <CardFooter>
                
                <div className="stats">
                  <i className="far fa-calendar" /> {this.state.t22}
                </div>
                
              </CardFooter>
        <Row>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-umbrella-13 text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Rain</p>
                      <CardTitle tag="p">{this.state.day1rain} mm</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>

            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-sun-fog-29 text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Temperature</p>
                      <CardTitle tag="p">{this.state.day1temp} °C</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-user-run text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Wind</p>
                      <CardTitle tag="p">{this.state.day1wind} k/h</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
          {this.state.bg1?
            <Card className="card-stats bg-danger">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-sound-wave text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7" className="">
                    <div className="numbers">
                      <p className="card-category ">Flood</p>
                      <CardTitle tag="p">{this.state.day1flood}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              
            </Card>
            :
            <Card className="card-stats bg-success">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-sound-wave text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7" className="">
                    <div className="numbers">
                      <p className="card-category ">Flood</p>
                      <CardTitle tag="p">{this.state.day1flood}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              
            </Card>}
          </Col>
        </Row>
        <CardFooter>
                
                <div className="stats ">
                  <i className="far fa-calendar" /> {this.state.t33}
                </div>
                
              </CardFooter>
        <Row>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-umbrella-13 text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Rain</p>
                      <CardTitle tag="p">{this.state.day2rain} mm</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>

            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-sun-fog-29 text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Temperature</p>
                      <CardTitle tag="p">{this.state.day2temp} °C</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-user-run text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Wind</p>
                      <CardTitle tag="p">{this.state.day2wind} k/h</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
          {this.state.bg2?
            <Card className="card-stats bg-danger">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-sound-wave text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7" className="">
                    <div className="numbers">
                      <p className="card-category ">Flood</p>
                      <CardTitle tag="p">{this.state.day2flood}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              
            </Card>
            :
            <Card className="card-stats bg-success">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-sound-wave text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7" className="">
                    <div className="numbers">
                      <p className="card-category ">Flood</p>
                      <CardTitle tag="p">{this.state.day2flood}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              
            </Card>}
          </Col>
        </Row>
        </CardBody>
        </Card>
              
       <br />
       

              <Card className="card-stats">
              <CardBody>
              <Card className="card-stats">
              <CardBody>
                <h5>Predictions for the current week</h5>
              </CardBody>
        </Card>
        <Row>
        <Col md="6">
            <Card>
              
                <Bar data={this.state.dataLineRain} options={{ responsive: true }} />

            </Card>
          </Col>
          <Col md="6">
            <Card>
             
                <Bar data={this.state.dataLineTemp} options={{ responsive: true }} />
              

            </Card>
          </Col>
          </Row>

        <Row>
        
          <Col md="6">
            <Card>
              
                <Bar data={this.state.dataLineWind} options={{ responsive: true }} />
             

            </Card>
          </Col>
          <Col md="6">
            <Card>
              
                <Bar data={this.state.dataLineFlood} options={{ responsive: true }} />
             

            </Card>
          </Col>
          
        </Row>

        </CardBody>
        </Card>
        <br />
        <Card className="card-stats">
              <CardBody>
              <Card className="card-stats">
              <CardBody>
                <h5>The current week's river behavior</h5>
              </CardBody>
        </Card>
        <Row>
        
          <Col md="12">
            <Card>
              
                
                <Line data={this.state.dataLine} options={{ responsive: true }} />
              

            </Card>
          </Col>
          
        </Row>
        </CardBody>
        </Card>
        </MDBContainer>
      </div>
    </>
  );
}
}
export default User;