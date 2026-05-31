import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");


  const handleRegister = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    const newUser = {
      name: name,
      email: email,
    };

    setUsers([...users, newUser]);
    setMessage("Registration Successful!");

    // Clear fields
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>Registration Form</h1>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>

          {/* Student Info */}
          <div className="student-info">
            <p>sneha</p>
            <p>CSE-26</p>
            <p>2503201001166</p>
          </div>
        </form>

        {message && <p className="success">{message}</p>}

        {users.length > 0 && (
          <div className="users-list">
            <h2>Registered Users</h2>

            <ul>
              {users.map((user, index) => (
                <li key={index}>
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;