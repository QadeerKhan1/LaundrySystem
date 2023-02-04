import React from 'react'
import "./signUp.css";
export default function signUp() {
  return (
   <>

   <div className="singUpWrapper">
    <div>
    <div className="signbar">
    <div className="signupLogo">
      <h6>SignUp</h6>
    </div>
  </div>
    </div>
   <div class="signup-form">
  <form>
    <h2>Sign Up</h2>
    <p>Please fill in this form to create an account.</p>
    <hr/>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" required/>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" placeholder="Enter password" required/>
    </div>
    <div class="form-group">
      <label for="password-confirm">Confirm Password</label>
      <input type="password" class="form-control" id="password-confirm" placeholder="Confirm password" required/>
    </div>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Enter your name" required/>
    </div>
    <div class="form-group">
      <label for="phone">Phone</label>
      <input type="tel" class="form-control" id="phone" placeholder="Enter your phone number" required/>
    </div>
    <div class="form-group">
      <label for="address">Address</label>
      <input type="text" class="form-control" id="address" placeholder="Enter your address" required/>
    </div>
   
    
   
    <div class="form-group">
      <button type="submit" class="btn btn-primary">Sign Up</button>
    </div>
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </form>
</div>

   </div>
   </>
  )
}
