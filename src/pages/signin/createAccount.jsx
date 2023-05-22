import React from 'react'
import './createAccount.css';
import { Link } from 'react-router-dom';
import img from '../../component/Images/AqBrand2.png'
export default function CreateAccount() {
  return (
    <>
            

  <div >
  <div className="signUpBar">
    <div className="signUpLogo">
      <img src={img} alt="" />
    </div>
    <div className="signUpDesc">
    <Link style={{textDecoration:'none',color:"white"}} to="/"><h4>Home</h4></Link>
      </div>

  </div>
  <div className="containner">
       
       <div className="create-account">
    <h2>Login</h2>
    <form>
        
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
