/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './navbar.css';
import logo from '../../images/logo.png';
import { UserContext } from '../../App';


const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const logOut = () => {
        const { name, email } = loggedInUser;
        const logOutUser = {
            name: '',
            email: '',
        }
        setLoggedInUser(logOutUser);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/home'><img src={logo} alt="" /> <b>S</b>UPER <b>S</b>HOP</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
                            <Link className="nav-link" to='/orders'>Orders</Link>
                            <Link className="nav-link" to='/admin'>Admin</Link>
                            <Link to='/login'>
                                {
                                    loggedInUser.email ? <Button onClick={logOut} variant="contained" color="secondary">Log Out</Button>
                                        :
                                        <Button variant="contained" color="secondary">Log in</Button>
                                }
                            </Link>
                            <p style={{ padding: '7px', color: '#ffa500' }}>{loggedInUser ? loggedInUser.name : ''}</p>
                        </div>
                    </div>
                </div>
            </nav>
            <SearchBox />
        </>
    );
};

function SearchBox() {
    return (
        <nav className="navbar navbar-light">
            <form className="form-inline m-auto">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    )
}

export default Navbar;