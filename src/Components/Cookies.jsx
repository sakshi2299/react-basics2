import React, { useState } from 'react';
import { useCustomCookies } from './useCustomHooks';

const Cookies = () => {
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const { cookies, setCustomCookie } = useCustomCookies();

  const handle = () => {
    setCustomCookie('Name', name);
    setCustomCookie('Password', pwd);
  };

  return (
    <div className="App">
      <h1>Name of the user:</h1>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>Password of the user:</h1>
      <input
        type="password"
        placeholder="Password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <div>
        <button onClick={handle}>Set Cookie</button>{' '}
      </div>
      <br />
      {cookies.Name && (
        <div>
          Name: <p>{cookies.Name}</p>
        </div>
      )}
      {cookies.Password && (
        <div>
          Password: <p>{cookies.Password}</p>
        </div>
      )}
    </div>
  );
};

export default Cookies;
