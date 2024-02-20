// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { useState } from 'react';
import Alert from './components/Alert';

export default function App() {
  // to set the theme
  const [preMode, postMode] = useState({ color:'black', backgroundColor:'white'});

  // to change the button title
  const [preTitle, postTitle] = useState("Enable dark mode");

  // to pop the alert
  const [preAlert, postAlert] = useState(null);
  const showAlert = (message, type) =>{
    postAlert({
      message : message,
      type : type
    });

    setTimeout(() => {
      postAlert(null);
    }, 1000);
  }

  const toggle = () =>{
    if(preMode.color === 'black'){
      postMode({color:'white', backgroundColor:'black'});
      document.body.style.backgroundColor="black";
      postTitle("Disable dark mode");
      showAlert("dark mode enabled successfully", "success");
    }
    else{
      postMode({color:'black', backgroundColor:'white'});
      postTitle("Enable dark mode");
      document.body.style.backgroundColor="white";
      showAlert("Light mode enabled successfully", "success");

    }
  }

  return (
    <>
      <Navbar title="TextUtiles" home="About" link="references" mode={preMode} switchTitle={preTitle} tog={toggle}/>
      <Alert alert={preAlert}/>
      <div className="container" mode={preMode}>
            <Form placeHold="Enter the text here to manipulate : " mode={preMode}/>
      </div>
    </>
  );
}
