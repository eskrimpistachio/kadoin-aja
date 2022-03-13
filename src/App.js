import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from "./components/Product.js";
import Login from './components/Login.js';
import Signup from "./components/Signup.js";
import AuthRoute from "./config/AuthRoute.js";
import PrivateRoute from "./config/PrivateRoute.js";

function App() {

  return (
      <Router>
        <Switch>

        {/* <Route exact path = "/">
          <Login/>
        </Route> */}

          <AuthRoute exact path="/" component={Login}/>

          <AuthRoute path="/signup" component={Signup}/>
        
          <PrivateRoute path="/main" component={Main}/>

          <PrivateRoute path="/product" component={Product}/>

        </Switch>

      </Router>
  );
}

export default App;
