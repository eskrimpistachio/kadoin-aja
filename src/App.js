import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";
import "./App.css" ;
import Footer from "./components/Footer.js";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from "./components/Product.js";

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Navbar/>
            <Route exact path="/">
              <Main/>
            </Route>
            <Route exact path="/Product.js">
              <Product/>
            </Route>
          <Footer/>
        </div>
      </Switch>
    </Router>
    
  );
}

export default App;
