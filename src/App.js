
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import TextForm from './component/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes ,
} from "react-router-dom";
import Alert from './component/Alert';

function App() {
  const  [mode , setMode] = useState('light');
  const  [alert , setAlert] = useState(null);

  const showAlert = (message , type) => {
    setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1000)
  
  }
  
  const toggleMode = () =>{
    if(mode === 'light'){
        setMode('dark');
        showAlert('Dark Mode has been enabled' , 'success')
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';

    }
    else{
      setMode('light');
      showAlert('Light Mode has been enabled' , 'success')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';

    }

 }

  return (
    <>
    <Router>
      <Navbar mode={mode}  toggleMode = {toggleMode}/> 
      <Alert alert = {alert}/>
      <div className="container my-3">
         <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading = "Enter Text"/>} />
          </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
