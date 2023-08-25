import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#272227';
      showAlert('Dark Mode has been Enable', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Enable', 'success')
    }
  }

  return (
    <>
      <Router>
        <Navbar title='Textutils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3 mb-3">
          <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
