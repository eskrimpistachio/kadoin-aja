import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";
import "./App.css" ;
import Footer from "./components/Footer.js";
import {BrowserRouter as Router, Switch } from 'react-router-dom';
import Product from "./components/Product.js";
import Login from './components/Login.js';
import Signup from "./components/Signup.js";
import Detail from "./components/Detail.js";
import AuthRoute from "./config/AuthRoute.js";
import PrivateRoute from "./config/PrivateRoute.js";

function App() {

  return (
      <Router>
        <Switch>
          <div>
          <AuthRoute exact path="/">
              <Login 
              />
          </AuthRoute>

          <AuthRoute exact path="/Signup.js">
              <Signup/>
          </AuthRoute>
        
          <PrivateRoute path="/main">
            <Navbar/>
            <Main/>
            <Footer/>
          </PrivateRoute>

          <PrivateRoute path="/Product.js">
            <Navbar/>
            <Product/>
            <Footer/>
          </PrivateRoute>

          <PrivateRoute path="/Detail.js">
            <Navbar/>
            <Detail/>
            <Footer/>
          </PrivateRoute>
            
          </div>
        </Switch>

      </Router>
  );
}

export default App;
