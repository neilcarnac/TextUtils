import './App.css'
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Marquee from './components/Marquee';
import Alert from './components/Alert';
import React from 'react'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode("dark");
      document.body.style.backgroundColor = 'rgb(32 40 67)';
      showAlert("Dark Mode Has Been Enabled", "success");
      document.title = "TextUtils- DarkMode";
      // setInterval(() => {
      //   document.title = "TextUtils";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils";
      // }, 1500);
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = '#eeeded';
      showAlert("Light Mode Has Been Enabled", "success");
      document.title = "TextUtils- LightMode";
    }
  }
  return (
    <>
      <Router>

        <Marquee />
        <Navbar className="my-0" title="TextUtils" mode={mode} aboutText="About TextUtil" toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Alert alert="Suzanne is 500m away." /> */}

        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter Text To be analyzed: " mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>

    </> 
  );
}

export default App;
