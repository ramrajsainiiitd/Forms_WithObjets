import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
const[data, setData] = useState({
  name:'Ramraj',
  age: 26,
});

function updateName(e) {
  e.preventDefault();
 document.getElementById('strName').innerHTML = `My name is <b>${data.name}</b> and I am <b>${data.age}</b> year old.`;
}

function handelUpdateName(e) {
  setData({...data, name:e.target.value});
}

function handelUpdateAge(e) {
setData({...data, age:e.target.value}); 
}
 
  return (
    <>
    <form style={{width: '200px',height:'200px' , display:'flex', flexDirection:'column' , backgroundColor:'lightblue', alignItems:'center', justifyContent:'center'}}>
      <label htmlFor="name">Name: </label>
      <input type='text' id='name'value={data.name} onChange={handelUpdateName} /><br/>
      <label htmlFor="age">Age: </label>
      <input type="number" id='age' value={data.age} onChange={handelUpdateAge} /><br/>
      <button onClick={updateName} >Click</button>
    </form>

    <p id='strName'></p>

    </>
  )
}

export default App
