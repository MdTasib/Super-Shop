import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';
import Admin from './Components/Admin/Admin';
import Login from './Components/Login/Login';
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className='container'>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Navbar />

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <PrivateRoute path='/orders'>
              <Orders />
            </PrivateRoute>
            <Route path='/admin'>
              <Admin />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;