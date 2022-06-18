import { Button } from '@mui/material';
import React from 'react';
import './Login.css';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from './firebaseConnection';
import { useDispatch } from 'react-redux';
import { selectUser, login } from './features/userSlice';


const Login = () => {
    const dispatch = useDispatch()
    const signIn = () => {
        signInWithPopup(auth, provider)
            .then(({user}) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoUrl,
                }))
            }).catch((error) => {
                alert(error.message);
            });
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0-1704x958.jpg" alt="" />
                <Button onClick={signIn} variant="contained" color="primary">Log In</Button>
            </div>
        </div>
    )
}

export default Login