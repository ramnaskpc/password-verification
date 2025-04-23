// App.js
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');
  const [hashed, setHashed] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setMessage(' Passwords do not match!');
      setHashed('');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/password/hash', { password });
      setMessage(' Password hashed successfully!');
      setHashed(res.data.hashedPassword);
    } catch (err) {
      setMessage(' Error hashing password');
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Password Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
      {hashed && (
        <div>
          <strong>Hashed Password:</strong>
          <p>{hashed}</p>
        </div>
      )}
    </div>
  );
};

export default App;
