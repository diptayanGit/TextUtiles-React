// import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import{
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";

function App() {
  // useState for alert
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    },
    setTimeout(() => {
      setAlert(null);
    }, 1000));
  }


  // useState for light and dark mode
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#212529eb'
      document.body.style.color = 'white'
      showAlert('Dark mode enabled', 'success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('Light mode enabled', 'success')
    }
  }
  return (
    <>
    <Router>

    <Navbar title="TextEdits" about="About TextEdits" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert}/>}>
            </Route>
          </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
