
import React, { useState,useEffect } from 'react';
import './Navbar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DigitalClock from './Analog';
import { useHistory } from 'react-router-dom';
// import Login from './Login';
const ReminderAlarms = ({name}) => {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState('');
  const [newAlarmTime, setNewAlarmTime] = useState('');
  //const [currentPage, setCurrentPage] = useState('home');
  const ename=localStorage.getItem("name");

  const handleReminderChange = (e) => {
    setNewReminder(e.target.value);
  };

  const handleAlarmTimeChange = (e) => {
    setNewAlarmTime(e.target.value);
  };

  const handleAddReminder = () => {
    if (!newReminder || !newAlarmTime) {
      toast.info('Please enter a reminder and alarm time.',{
        position:'top-center'
      });
      return;
    }

    const alarmDate = new Date(newAlarmTime);
    const now=new Date();
    if(alarmDate<now)
   {
    toast.error("Please choose a future alarm date and time",{
      position:'top-center'
    });
    return;
   }else
    {
      const reminder = {
        id: Date.now(),
        message: newReminder,
         alarmTime: newAlarmTime,
      alarmDate: alarmDate.toDateString(),
      alarmTime1: alarmDate.toLocaleTimeString()
      };
  
      setReminders([...reminders, reminder]);
      setNewReminder('');
      setNewAlarmTime('');
    }
    toast.success("Reminder Added Successfully",{
      position:'top-center'
    });
  };

  const handleDeleteReminder = (id) => {
    const updatedReminders = reminders.filter((reminder) => reminder.id !== id);
    setReminders(updatedReminders);
    toast.success("Deleted Successfully.....|| ",{
      position:'top-center'
    })
  };

  const handleSetAlarm = (alarmTime) => {
    const now = new Date();
  const alarmDate = new Date(alarmTime);

  // // Extract date and time separately
  // const alarmDateOnly = alarmDate.toLocaleDateString();
  // const alarmTimeOnly = alarmTime.toLocaleTimeString();

  const timeUntilAlarm = alarmDate.getTime() - now.getTime();
  // alert("Alarm set Successfully");
  toast.success("Alarm set Succsessfully,will ring soon",{
    position:'top-center'
  });

  if (timeUntilAlarm <= 0) {
    toast.error('Please choose a future alarm time.',{
      position:'top-center'
    });
    return;
  }

    setTimeout(() => {
      playAlarmSound();
    }, timeUntilAlarm);
  };

  const playAlarmSound = () => {
    const audio = new Audio('https://www.soundjay.com/clock/sounds/alarm-clock-01.mp3');
    audio.play();
  };
 
  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };
  const removeAccount=()=>{
    localStorage.clear();
    window.location.href="/login";
  }
  return (
    <div>
       <div> 
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{position:'fixed'}}>
<div class="container-fluid">
  <a class="navbar-brand" href="#" style={{fontSize:27,fontFamily:'cursive'}}>HealthCare</a>
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="/about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="/service">Service</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link active " href="/contact">Contact</a>
      </li>
      <li>
      <h6 style={{color:'cyan',marginTop:10}}>{ename}</h6>
      <button style={{color:'blue'}} onClick={removeAccount}><strong>Logout</strong></button>
      </li>
    </ul>
  </div>
</div>
</nav>

    </div>
      <div style={{display:'flex'}}>
      <div style={{padding:20,marginLeft:20,border:'2px solid black',marginTop:100,marginRight:300,position:'fixed',backgroundColor:"lightseagreen"}}>
      <h4 style={{marginLeft:110,fontFamily:'unset'}}><u>Set Your Daily Reminder</u></h4><br></br>
        <div>
        <input style={{padding:10}}
          type="text"
          placeholder="Enter reminder"
          value={newReminder}
          onChange={handleReminderChange}
        />
        <input style={{padding:10}}
          type="datetime-local"
          value={newAlarmTime.toString()}
          onChange={handleAlarmTimeChange}
        />
        <button onClick={handleAddReminder}className='btn btn-success' style={{marginLeft:10,padding:10,marginTop:-8,overflowY: 'auto'}}>Add Reminder</button>
       
      </div>
      </div>
<div>
<div>
  <div className="clock-container" style={{marginTop:280,marginLeft:190}}>
    <DigitalClock />
  </div>
  
</div>

</div>
      <div style={{padding:10,marginLeft:600,marginTop:80,overflowY:'auto'}}>
      <ol>
        {reminders.map((reminder) => (
          <li key={reminder.id}>
           <div style={{padding:10}}>
           <table style={{backgroundColor:"lightblue",border:'2px solid black',width:300,paddingInline:20,height:140}}>
      <thead>
        <tr>
          <th style={{padding:5}}>Task</th>
          <td style={{padding:5}}><a href={`https://www.google.com/search?q=${encodeURIComponent(reminder.message)}`} target="_blank" rel="noopener noreferrer">{reminder.message}</a></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th style={{padding:5}}>Date</th>
          <td style={{padding:5}}>{reminder.alarmDate}</td>
          </tr>
          <tr>
            <th style={{padding:5}}>Time</th>
            <td style={{padding:5}}>{reminder.alarmTime1}</td>
          </tr>
         <tr>
         <th style={{padding:5}}>Actions</th>
          <td style={{padding:5}}><button onClick={() => handleSetAlarm(reminder.alarmTime)} className='btn btn-primary' style={{marginLeft:10}}> Set Alarm</button></td>
          <td style={{padding:5}}><button onClick={() => handleDeleteReminder(reminder.id)}className='btn btn-danger'>
              Delete
            </button></td>
         </tr>
         
      </tbody>
    </table>
           </div>
          </li>
        ))}
      </ol>
        </div>
        <ToastContainer></ToastContainer>
    </div>
      </div>
   
  );
};

export default ReminderAlarms;