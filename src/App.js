import { useState } from 'react';
import './App.css';

import About from './Componants/About';
import Alert from './Componants/Alert';
import Navbar from './Componants/Navbar';
import Textform from './Componants/Textform';

import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
  <Alert alert={alert}/>
  <div className="container my-4">
  <Routes>
          <Route path="/about" element={<About mode={mode}  />}/>
          <Route path="/" element={<Textform showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />} />
  </Routes>
        </div>
        </Router>
  </>
  );
}

export default App;
