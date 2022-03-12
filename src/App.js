import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";
import "./App.css" ;
import Footer from "./components/Footer.js";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from "./components/Product.js";
import Login from './components/Login.js';
import Signup from "./components/Signup.js";
import Detail from "./components/Detail.js";
import {PrivateRoute, RestrictedRoute} from  "./config/PrivateRoute.js";
import { AuthContext } from './config/Auth';
import { useState } from 'react';

function App() {

  const isAnyToken = JSON.parse(localStorage.getItem('token'));
	const userId = JSON.parse(localStorage.getItem('id'));
	const [authToken, setAuthToken] = useState(isAnyToken);
	const [user, setUser] = useState(userId);

	const setAndGetTokens = (token, id) => {
		localStorage.setItem('token', JSON.stringify(token));
		localStorage.setItem('id', JSON.stringify(id));
		setAuthToken(token);
		setUser(id);
	};

  return (
    <AuthContext.Provider value={{ authToken, setAndGetTokens, user }}>
      <Router>
        <Switch>
          <div>
          <Route exact path="/">
            <PrivateRoute>
              <Login 
              />
            </PrivateRoute>
          </Route>

          <Route exact path="/Signup.js">
            <RestrictedRoute>
              <Signup/>
            </RestrictedRoute>
          </Route>
        
          <Route path="/main">
            <Navbar/>
            <Main/>
            <Footer/>
          </Route>

          <Route path="/Product.js">
            <Navbar/>
            <Product/>
            <Footer/>
          </Route>

          <Route path="/Detail.js">
            <Navbar/>
            <Detail/>
            <Footer/>
          </Route>
            
          </div>
        </Switch>

      </Router>
    </AuthContext.Provider>
  );
}

export default App;
