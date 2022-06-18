import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SendMail from './SendMail';
import { selectSendMessageIsOpen, } from './features/mailSlice';
import { selectUser, login, logout } from './features/userSlice';
import Login from './Login';
import { auth } from './firebaseConnection';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const selectSendMessage = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser).user
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl:userAuth.photoUrl,
        }))
      } else {
          dispatch(logout());
      }
    })
  },[])

  
  return (
    <BrowserRouter>
    {!user ? <Login/> : (
      <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/mail" element={<Mail />} />
              <Route path="/" element={<EmailList />} />
            </Routes>
          </div>
          {selectSendMessage && <SendMail />}
        </div>
    )}
      
    </BrowserRouter>
  );
}

export default App;
