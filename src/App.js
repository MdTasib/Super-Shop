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
import ManageProduct from "./Components/Admin/ManageProduct";
import AddProduct from "./Components/Admin/AddProduct";
import EditProduct from "./Components/Admin/EditProduct";

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
            <Route patch='/admin/manageProduct'>
              <ManageProduct />
            </Route>
            <Route patch='/admin/addProduct'>
              <AddProduct />
            </Route>
            <Route patch='/admin/editProduct'>
              <EditProduct />
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