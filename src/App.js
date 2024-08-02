import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  const toggleMode1 =()=>{
    if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#080350'
    showAlert("dark mode has been enabled","success")
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("Light mode has been enabled","success")
  }
}

const toggleMode2 =()=>{
  if(mode==='light'){
  setMode('#544d1b')
  document.body.style.backgroundColor='#897c1a'
  showAlert("dark mode has been enabled","success")
}
else{
  setMode('light')
  document.body.style.backgroundColor='white'
  showAlert("Light mode has been enabled","success")
}
}

const toggleMode3 =()=>{
  if(mode==='light'){
  setMode('#194220')
  document.body.style.backgroundColor='#1a842d'
  showAlert("dark mode has been enabled","success")
}
else{
  setMode('light')
  document.body.style.backgroundColor='white'
  showAlert("Light mode has been enabled","success")
}
}
  return (
  <>
  <BrowserRouter>
<Navbar title="Textmanupulation" about="about" mode={mode} toggleMode1={toggleMode1} toggleMode2={toggleMode2} toggleMode3={toggleMode3}/>
<Alert alert={alert}/>
<div className='container' mode={mode}>
<Routes>
          <Route exact path="/about" element={<About mode={mode}/>} >
          </Route>
          <Route path="/" element={<TextForm showAlert={showAlert} headin="Enter Text to Change" mode={mode}/> }>
          </Route>
        </Routes>
</div>
</BrowserRouter>
</>
  );
}
// sfsdf
// arwer

export default App;
