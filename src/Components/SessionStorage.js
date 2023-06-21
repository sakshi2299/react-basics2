import React, { useState } from 'react';

const SessionStorage = () => {

   const [name, setName] = useState('');
   const [pwd, setPwd] = useState('');

   const handle = () => {
      sessionStorage.setItem('Name', name);
      sessionStorage.setItem('Password', pwd);
   };
   const remove = () => {
      sessionStorage.removeItem('Name');
      sessionStorage.removeItem('Password');
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
            <button onClick={handle}>Done</button>
         </div>

         {/* to get the item from sessionStorage and then remove it from the sessionStorage */}
         {sessionStorage.getItem('Name') && (
            <div>
               Name: <p>{sessionStorage.getItem('Name')}</p>
            </div>
         )}
         {sessionStorage.getItem('Password') && (
            <div>
               Password: <p>{sessionStorage.getItem('Password')}</p>
            </div>
         )}
         <div>
            <button onClick={remove}>Remove</button>
         </div>
      </div>
   );
};
export default SessionStorage;
