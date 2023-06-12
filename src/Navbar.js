
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  
  return (
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
      <h4>hello</h4>
     </li>
    </ul>
  </div>
</div>
</nav>
    </div>

  )
}

export default Navbar
