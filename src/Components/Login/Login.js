import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfiq from './firebase.confiq';
import Button from '@material-ui/core/Button';
import google from '../../images/google.png';
import styles from './login.module.css';

if (!firebase.apps) {
    firebase.initializeApp(firebaseConfiq);
}

const Login = () => {
    const googleSingIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

    }

    return (
        <div className='text-center py-5 login'>
            <Button onClick={googleSingIn} className={styles.button} variant="outlined" color="secondary"><img className={styles.buttonImg} src={google} alt="" /> Google Sing In</Button>
        </div>
    );
};

export default Login;