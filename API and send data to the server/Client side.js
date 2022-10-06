import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [user,setuser]=useState([])
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  useEffect(()=>{
    fetch("http://localhost:3000/users")
    .then(res=>res.json())
    .then(data=>setuser(data))
  },[])
 function Addfrom(e){
  e.preventDefault()
  const user={name,email}
  fetch('http://localhost:3000/users/', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
 }
  return (
    <div className="App">
      <form onSubmit={Addfrom}>
        <input onChange={(e)=>setname(e.target.value)} type="text" placeholder='Enter your name'/><br></br>
        <input onChange={(e)=>setemail(e.target.value)} type="email" placeholder='Enter your email'/>
        <button>Submit</button>
      </form>
      <h1>Hello I am fine you are very nice can you hlep me</h1>
      {user.map(usr=><div key={usr.id} className='hh'>
      {usr.name}
      {usr.email}
      </div>)}
    </div>
  );
}

export default App;
