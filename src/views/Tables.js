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

*/
import React from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form'
// reactstrap components
import {
  Card,Alert,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,Input,Button
} from "reactstrap";

function Tables() {
  const [ value, setValue ] = React.useState(0);
   const [ value2, setValue2 ] = React.useState(0);
    const [ value3, setValue3 ] = React.useState(0);
     const [ value4, setValue4 ] = React.useState(2);
     const [ value5, setValue5 ] = React.useState("");
     const [clr, setclr] = React.useState('white');
    const API_URL = 'http://0bdf-34-125-231-38.ngrok.io/'+value+'/'+value2+'/'+value3;

    function predict(){
     axios.get(API_URL).then(response => response.data)
    .then((data) => setValue4(data['pr']));
    

    
    }

  return (
    <>
   <div className="content">
  
      <Row>

      <Col md="3">
      </Col> 



      <Col  md="6">   

      <Card className="card-stats">
              <CardBody>
<br />
              <Card className="card-stats">
              <CardBody>

      <Row>
      <Col >
        <h5>
          Rain(mm)
        </h5>
      </Col>
          
        <Col md='7' >
        <Form.Range
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          </Col>
      
        <Col md='2' >
          <Form.Control value={value}/>
        </Col>
        
      </Row>


      
      </CardBody>
</Card>
<br />
 <Card className="card-stats">
              <CardBody>

      <Row>
      <Col >
        <h5>
          Temp(°C)
        </h5>
      </Col>
          
        <Col md='7' >
        <Form.Range
            value={value2}
            onChange={e => setValue2(e.target.value)}
          />
          </Col>
      
        <Col md='2' >
          <Form.Control value={value2}/>
        </Col>
        
      </Row>


      
      </CardBody>
</Card>
<br />
 <Card className="card-stats">
              <CardBody>

      <Row>
      <Col >
        <h5>
          Wind(KM/H )
        </h5>
      </Col>
          
        <Col md='7' >
        <Form.Range
            value={value3}
            onChange={e => setValue3(e.target.value)}
          />
          </Col>
      
        <Col md="2" >
          <Form.Control value={value3}/>
        </Col>
        
      </Row>


      
      </CardBody>
</Card>
<br />
              

     <div className="d-grid gap-2">
  <Button variant="primary" size="lg" onClick={predict}>
    Predict
  </Button>

</div> 
<div className="d-grid gap-2">
 
    {value4 !=2 ?
      
  value4 ===0 ? <Alert style={{ background: 'green',textAlign: "center" }} size="lg"  disabled>
   Il y'aura pas un Flood 
  </Alert>
  :
  <Alert style={{ background: 'red',textAlign: "center" }} size="lg"  disabled>
   Il y'aura un Flood 
  </Alert>
:

''
}

  </div> 
  


<br />
</CardBody>
</Card>
       </Col>


      
       <Col  md="3">
       
        </Col> 


       </Row>
     
             
    </div>
    
    </>
  );
}

export default Tables;
