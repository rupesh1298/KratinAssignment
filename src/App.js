// import React from 'react';
// import ReminderAlarm from './ReminderAlarm';
// import Login from './Login';
 import Navbar from './Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// function App() {
//   return (
//    <div>
//    <ReminderAlarm></ReminderAlarm>
//    </div>
//   )
// }


// export default App;


import React, { useState } from 'react';

import NameForm from './Nameform';
import ReminderAlarms from './ReminderAlarm';
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleNameSubmit = (name) => {
    setUserName(name);
    setLoggedIn(true);
  };

  return (
    <div>
      <Navbar/>
      {loggedIn ? (
        <ReminderAlarms name={userName} />
      ) : (
        <NameForm onSubmit={handleNameSubmit} />
      )}
    </div>
  );
};

export default App;
