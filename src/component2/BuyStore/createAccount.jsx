import React from 'react'
import './createAccount.css';
export default function createAccount() {
  return (
    <>
            

  <div >
  <div className="signbar">
    <div className="signupLogo">
      <h6>SignUp</h6>
    </div>
  </div>
  <div className="containner">
       
       <div className="create-account">
    <h2>Create Account</h2>
    <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required/>
        <br/>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
        <br/>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/>
        <br/>
        <label for="password-confirm">Confirm Password:</label>
        <input type="password" id="password-confirm" name="password-confirm" required/>
        <br/>
        <button type="submit">Create Account</button>
    </form>
</div>
       
    </div>
  </div>
    </>
  )
}
