import React,{useState} from 'react'
import img from '../../component/Images/AqBrand2.png'
import "./signUp.css";
import { useNavigate,Link } from 'react-router-dom';
import {auth} from '../../Config/firebaseConfig'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {useHistory} from 'react-router-dom'



export default function SignUp() {
  const navigate=useNavigate()
 
  const [userId,setUserId]=useState()
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
          createUser( email,password);
      
      
      
        if(name && email && phone && password && address ){
          const res=await fetch(`https://laundry-f31d7-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userId}.json`,{
          // q: why the above api call is creating a child under users id?
          // q: why the new user node is not being created when we are using new user id?


          method:"POST",
            headers:{ "Content-Type":"application/json"},
            body:JSON.stringify({ name,email,phone,password,address})
          });
          if(res){
            setUser({name:"",email:"",phone:"",password:"",address:""})
            alert('user registered successfully')
            navigate('/'); 
          }
        }else{
          alert("Please Fill All The Data")
        }
    }
    
     const createUser=(email,password)=>{
     
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          setUserId(user.uid)
          alert("user created successfully")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          alert(errorMessage) });   }

         

    
    
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
      <input onChange={getUserData} name='email' value={user.email}   type="email" class="form-control" id="email" placeholder="Enter email" required/>
    </div>
    <div className="form-group">
      <label for="password">Password</label>
      <input onChange={getUserData} name='password' value={user.password}   type="password" class="form-control" id="password" placeholder="Enter password" required/>
    </div>
    <div className="form-group">
      <label for="address">Address</label>
      <input onChange={getUserData}  name='address' value={user.address} type="text" class="form-control" id="address" placeholder="Enter your address" required/>
    </div>
   
    
   
    <div className="form-group">
      <button style={{width:'25%',height:"40px"}} onClick={submiteUserData}  type="button" className="btn btn-outline-white bg-black  mx-10">Sign Up</button>
      <button style={{width:'25%',height:"40px" ,marginLeft:"150px"}} onClick={()=>{navigate("/createAccount")}} type="button" className="btn btn-outline-white bg-black  " >Login</button>
    </div>
     
  </form>
</div>

   </div>
   </>
  )
}
