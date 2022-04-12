import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

import LoginForm from './components/LoginForm';
//import RegisterForm from './components/RegisterForm';
//import ConfirmationCode from './components/ConfirmationCode/code';
//import ResetPassw from './components/ResetPassw/passw';
//import NewPassw from './components/NewPassw/newPassw';
//import { NavBar } from './components/NavBar/navBar';
//import { Setting } from './components/Setting/setting';
import { ReactDOM } from 'react';
//import { TextMesg } from './components/TextMesg/textmsg';


class App extends React.Component {
 /* constructor(props){

     super(props)
  
    this.state = {
       isLogginActive:false,
    }
  }*/
  
  render(){
    //const{isLogginActive}=this.state;
    return (
      <div className='App'>
      <LoginForm/>
      </div>
    );
   

  }
  
}

export default App;
