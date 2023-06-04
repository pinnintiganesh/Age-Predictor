import './App.css';
import Axios from "axios";
import { useState } from 'react';

function App() {
  const [age,setAge]=useState({});
  const [name,setName]=useState("");
  const Cage = ()=>
  {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>
    {
      setAge(res.data);
    });
  }
  return (
   
    <div className="App">
     
       <div className='App-header'>
      <h1>Age Predictor</h1>
    </div>
    <div className='container'>
      <input onChange={(event)=>{
        setName(event.target.value);
      }} placeholder='enter your name' />
   
      <button onClick={Cage} className='btn btn-dark '>Find my Age
      </button>
      <br></br>
      <br></br>
    <h1>Name : {age.name}
    <br></br>
    <br></br>

   Age :  {age.age}
    </h1>
    </div>
    </div>
  );
}

export default App;
