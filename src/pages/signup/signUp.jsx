import React,{useState,useEffect,useContext} from 'react'
import { UserContext } from '../contextApi/userContext';
import "./signUp.css";
import { useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword ,getAuth} from "firebase/auth";
import NavbarBar from '../../component/Navbar/navbarBar';



export default function SignUp() {
 
  const navigate=useNavigate()
  const userData=useContext(UserContext)
  const [user,setUser]=useState(
    {name:"",email:"",phone:"",password:"",address:"",role:""})
    const auth = getAuth();
    
    useEffect(()=>{
      
    },[user.uid])


    const getUserData=(event)=>{  
      
      const name=event.target.name;
      const value=event.target.value;
      setUser({...user,[name]:value})

    }
    

    const submiteUserData=async(event)=>{
      const { Option } = userData.userData;

            event.preventDefault();
      const{name,email,phone,password,address,role}=user;
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        
        alert("user created successfully")
        if(name && email && phone && password && address && role ){
         const res=fetch(`https://laundry-f31d7-default-rtdb.asia-southeast1.firebasedatabase.app/Users/${user.uid}/profile.json`,{
        
          method:"POST",
            headers:{ "Content-Type":"application/json"},
            body:JSON.stringify({ name,email,phone,password,address,role})

          
          });
          if(res){
            setUser({name:"",email:"",phone:"",password:"",address:"",role:''})
            alert('user registered successfully')
            navigate('/'); 
          }
        }else{
          alert("Please Fill All The Data")

        } })
      .catch((error) => {
        const errorMessage = error.message;
        // ..
        alert(errorMessage) 
       });    }
    
    
  return (
   <>

   <div className="singUpWrapper">
    <NavbarBar/>
    
    
   <div class="signup-form">
  <form >
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
      <input onChange={getUserData} autocomplete="current-password" name='email' value={user.email}   type="email" class="form-control" id="email" placeholder="Enter email" required/>
    </div>
    <div className="form-group">
      <label for="password">Password</label>
      <input onChange={getUserData} autocomplete="current-password" name='password' value={user.password}   type="password" class="form-control" id="password" placeholder="Enter password" required/>
    </div>
    <div className="form-group">
      <label for="address">Address</label>
      <input onChange={getUserData}  name='address' value={user.address} type="text" class="form-control" id="address" placeholder="Enter your address" required/>
    </div>
    <div className="form-group">
      

<div class="btn-group">
<select name="role" className='btn btn-dark' onChange={getUserData} value={user.role}>

      <option selected>Select Role</option>
      <option value="Customer">Customer</option>
      <option value="Laundry">Laundry</option>
    </select>
</div>
    </div>
    
   
    
   
    <div className="form-group">
      <button style={{width:'25%',height:"40px"}} onClick={submiteUserData}  type="submite" className="btn btn-outline-white bg-black  mx-10">Sign Up</button>
      <button style={{width:'25%',height:"40px" ,marginLeft:"150px"}} onClick={()=>{navigate("/createAccount")}} type="button" className="btn btn-outline-white bg-black  " >Have an account</button>
    </div>
     
  </form>
</div>

   </div>
   </>
  )
}
