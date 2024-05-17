import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import TextField from './TextField';
import Alert from './Alert';
import About from './About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils Amazing Mode';
    } else {
      setMode('light');
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils Fantastic Mode';
    }
  };

  return (
    <Router>
      <div>
        <Navbar title="My React Project" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-5">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextField showAlert={showAlert} heading="Enter Your Text For Conversion" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
