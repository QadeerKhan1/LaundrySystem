import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import img from '../../component/Images/AqBrand2.png'
import "./signUp.css";

export default function SignUp() {
  const [user,setUser]=useState(
    {name:"",email:"",phone:"",password:"",address:""})
    const getUserData=(event)=>{  
      const name=event.target.name;
      const value=event.target.value;
      setUser({...user,[name]:value})

    }
    const submiteUserData=async(event)=>{
      event.preventDefault();
      const{name,email,phone,password,address}=user;
      if(name && email && phone && password && address){
        const res=await fetch("https://laundrysystem-dd494-default-rtdb.asia-southeast1.firebasedatabase.app/LaundryUserDataForm.json",{
          method:"POST",
          headers:{ "Content-Type":"application/json"},
          body:JSON.stringify({ name,email,phone,password,address})
        });
        if(res){
          setUser({name:"",email:"",phone:"",password:"",address:""})
          alert("User Register Successfully")
        }
      }else{
        alert("Please Fill All The Data")
      }
    }

    
    
  return (
   <>

   <div className="singUpWrapper">
    
    <div className="signUpBar">
    <div className="signUpLogo">
      <img src={img} alt="" />
    </div>
    <div className="signUpDesc">
    <Link style={{textDecoration:'none',color:"white"}} to="/"><h4>Home</h4></Link>
      </div>

  </div>
    
   <div class="signup-form">
  <form method='POST'>
    <h2>Create Account</h2>
   
    <div class="form-group">
      <label for="name">Name</label>
      <input onChange={getUserData} name='name' value={user.name}  type="text" class="form-control" id="name" placeholder="Enter your name" required/>
    </div>
    <div class="form-group">
      <label for="phone">Phone</label>
      <input onChange={getUserData} name='phone' value={user.phone}   type="tel" class="form-control" id="phone" placeholder="Enter your phone number" required/>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input onChange={getUserData} name='email' value={user.email}   type="email" class="form-control" id="email" placeholder="Enter email" required/>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input onChange={getUserData} name='password' value={user.password}   type="password" class="form-control" id="password" placeholder="Enter password" required/>
    </div>
    <div class="form-group">
      <label for="address">Address</label>
      <input onChange={getUserData}  name='address' value={user.address} type="text" class="form-control" id="address" placeholder="Enter your address" required/>
    </div>
   
    
   
    <div class="form-group">
      <button onClick={submiteUserData}  type="submit" class="btn btn-primary">Sign Up</button>
    </div>
    <p>Already have an account? <a href="#"><Link to='/createAccount'>Sign In</Link></a>.</p>
  </form>
</div>

   </div>
   </>
  )
}
