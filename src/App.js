import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import ProductDetail from './components/ProductDetail/ProductDetail';
import AppBar from './components/AppBar/AppBar';
import CartDetail from './components/CartDetail/CartDetail';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState("breakfast");
  const [cart, setCart] = useState([]);

  return (
    <CategoryContext.Provider value={{category, setCategory, cart, setCart}}>
      <Router>
        <AppBar />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/SignUp">
            {/* <SignUp /> */}
          </Route>
          <Route path="/Login">
            {/* <Login/> */}
          </Route>
          <Route path="/ProductDetail/:id">
            <ProductDetail />
          </Route>
          <Route path="/CartDetail">
            <CartDetail />
          </Route>
          {/* <PrivateRoute path="/Hotel">
              <Hotel/>
            </PrivateRoute> */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>

    </CategoryContext.Provider>
  );
}

export default App;
