import React, { useState } from 'react';
import { toast } from 'react-toastify';

const NameForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(name);
   localStorage.setItem("name",name);
   toast.success("Login Successfully",{position:"top-center"});
  };

  return (
         

    <form onSubmit={handleSubmit} style={{padding:20,marginLeft:400,border:'2px solid black',marginTop:80,marginRight:300,position:'fixed',backgroundColor:"lightseagreen"}}>
  <div >
  <header className="header">
        <h1 style={{textAlign:'center'}}><u>Welcome to Healthcare</u></h1><br></br>
        <h4 style={{fontFamily:'cursive',textAlign:"center",color:'darkslategray'}}>    "Transforming Healthcare, Empowering Lives"</h4>
      </header>
    <label for="Email1" class="form-label">Enter name</label>
    <input type="text" class="form-control" id="Email1" aria-describedby="emailHelp" value={name} onChange={handleNameChange} required/>
   
  </div>
  <div class="mb-3">
    <label for="Password1" class="form-label">Address</label>
    <input type="text" class="form-control" id="Password1" required/>
  </div>
  <div class="mb-3">
    <label for="Password2" class="form-label">Age</label>
    <input type="number" class="form-control" id="Password2" required/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Keep me login</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  );
};

export default NameForm;

// import React from 'react';
// import './Nameform.css';


// const NameForm = () => {
//   const loginPage = () => {
//     window.location.href = '/ReminderAlarm';
//   }
//   return (
//     <div className="homepage" style={{marginTop:60}}>
//       <header className="header">
//         <h1 className="logo">"Transforming Healthcare, Empowering Lives"</h1>
        
//       </header>
//       <main className="main-content">
//         <section className="hero-section">
//           <h2>Welcome to HealthCare</h2>
//           <p>Providing quality healthcare services for a healthier future.</p>
//           <button onClick={loginPage}>Login Here</button>
//         </section>
//         <section className="services-section">
//           <h3>Our Services</h3>
//           <div className="services-grid">
//             <div className="service-card">
//               <h4>Medical Checkups</h4>
//               <p>Comprehensive medical checkups and diagnostics.</p>
//             </div>
//             <div className="service-card">
//               <h4>Specialized Treatments</h4>
//               <p>Advanced treatments for specific medical conditions.</p>
//             </div>
//             <div className="service-card">
//               <h4>Emergency Care</h4>
//               <p>24/7 emergency care and medical support.</p>
//             </div>
//           </div>
//           <br></br>
//         </section>
//         <section className="about-section">
//           <h3>About Us</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel lectus et metus tristique sodales sed a ligula. Nam dapibus lacus at nunc malesuada.</p>
//           <a href="#" className="btn">Read More</a>
//         </section>
//       </main>
//       <footer className="footer">
//         <p>&copy; 2023 HealthCare. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default NameForm;
