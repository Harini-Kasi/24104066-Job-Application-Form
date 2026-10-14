//Job Application Validation form
import { useState } from "react";
function App(){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [role,setRole] = useState("");
  const [resume,setResume] = useState("");
  const[user,setUser] = useState("");
  const[users,setUsers] = useState([]);

  function addUser(){
    if(name===''){
      alert("Name must be entered");
      return;
    }
    if(email===''){
      alert("Email must be entered");
      return;
    }
    setUsers([...users,user]);
    setUser("");
  }

  return(
    <div>
      <h1>JOB APPLICATION FORM</h1>
      <p><strong>Enter your details</strong></p>
      <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder='Enter your name'
      />
      <p>
      <input
      type="text"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder='Enter your email'
      />
      </p>
      <p>
      <input
      type="text"
      value={role}
      onChange={(e) => setRole(e.target.value)}
      placeholder="Enter your role"
    />
    </p>
    <p>
      <p><button onClick={setResume}> Upload Resume</button></p>
      <button onClick={addUser}> Submit </button> </p>
    </div>
  );
}

export default App;