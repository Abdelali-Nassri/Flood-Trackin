import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import Dashboard from "views/Dashboard.js";
function App() {
  return (
   <div className="wrapper">
      <BrowserRouter>
        <Switch>
          
          </Route>
          <Route path="/">
            hello
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
