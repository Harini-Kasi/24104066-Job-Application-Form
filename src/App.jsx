//Job Application Validation form
import { useState } from "react";
function App(){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [role,setRole] = useState("");
  const[resume,setResume] = useState("");
  const[user,setUser] = useState("");
  const[users,setUsers] = useState([]);

  function addUser(){
    setUsers([...users,user]);
    setUser("");
  }

  return(
    <div>
      <h1>JOB APPLICATION FORM</h1>
      <p>Enter your details</p>
      <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder='Enter your name'
      />
      <input
      type="text"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder='Enter your email'
      />
      <input
      type="text"
      value={role}
      onChange={(e) => setRole(e.target.value)}
      placeholder="Enter your role"
    />
      <button onClick={addUser}> Add User</button>
      
      <button onclick = {setResume}> Resume Upload</button>
    </div>
  );
}

export default App;