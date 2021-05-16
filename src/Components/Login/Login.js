/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfiq from './firebase.confiq';
import Button from '@material-ui/core/Button';
import google from '../../images/google.png';
import styles from './login.module.css';
import { UserContext } from '../../App.js';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfiq);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({});
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const googleSingIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email } = result.user;
                const singInUser = {
                    name: displayName,
                    email,
                }
                setLoggedInUser(singInUser);
                history.replace(from);
            })
            .catch(error => {
                const errorMessage = error.message;
                setUser(errorMessage);
            })
    }

    const googleSingOut = () => {
        firebase.auth().signOut()
            .then(result => {
                const { name, email } = loggedInUser;
                const singOutUser = {
                    name: '',
                    email: '',
                }
                setLoggedInUser(singOutUser);
                history.replace(from);
            })
            .catch(error => {
                const errorMessage = error.message;
                setUser(errorMessage);
            })
    }

    return (
        <div className='text-center py-5 login'>
            {
                loggedInUser.email ?
                    <Button onClick={googleSingOut} className={styles.button} variant="outlined" color="secondary"><img className={styles.buttonImg} src={google} alt="" /> Google Sing Out</Button>
                    :
                    <Button onClick={googleSingIn} className={styles.button} variant="outlined" color="secondary"><img className={styles.buttonImg} src={google} alt="" /> Google Sing In</Button>
            }
        </div>
    );
};

export default Login;