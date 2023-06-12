import React,{ useContext, useState,useEffect } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './createAccount.css';
import NavbarBar from '../../component/Navbar/navbarBar';
import { Navigate, useNavigate } from 'react-router-dom';
import SigninOption from '../../signinOption/signinOption';
import { UserContext } from '../contextApi/userContext';
import { set } from 'local-storage';

export default function CreateAccount({option}) {

  const [userAuth, setUserAuth] = useState({ email: "", password: ""});
    
    const [Loading, setLoading] = useState(false);
    const [User, setUser]=useState("")
    const { setUserData } = useContext(UserContext);

    

    const nevigat=useNavigate()

    const getAuthData = (e) => {
      setUserAuth({ ...userAuth, [e.target.name]: e.target.value });
    };

    const auth = getAuth()
     const checkAuth =async (e) => {
      e.preventDefault();
      const {email,password}=userAuth;
      e.preventDefault();
      setLoading(true);
      

     const usercred=await  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
        fetch(`https://laundry-f31d7-default-rtdb.asia-southeast1.firebasedatabase.app/Users/${user.uid}/profile.json`)
  .then(response => response.json())
  .then(data => {
    Object.keys(data).forEach(key => {
      // Access each element using the key
      
      const element = data[key];
      if( data && element.role === User)
      {
        nevigat("/")
      
        setTimeout(() => {
          alert(`Login Successfully Welcome ${User} `)
          }
          , 1000);
      }else{
        handleLogout()
        
        
        setTimeout(() => {
        alert(`No ${User} found , Please try again`)
        }
        , 1000);

      }
       
      // Do something with the element
    });
    
  })
  .catch(error => {
    // Handle any errors
    
  });
    
    setLoading(false)
   
    setUserAuth({email:" ",password:" "})
    

  })
  .catch((error) => {
   
    setLoading(false);
    alert("Please fill all inputs")
  });
    };
    const handleLogout =  () => {
      try {
         auth.signOut();
        nevigat('/createAccount'); // Redirect to the homepage or login page
      } catch (error) {
        // Handle logout error
        console.log(error);
      }
    };
    
  const parent=(option)=>{
    const userData={Option:option}
    setUserData(userData)
  setUser(option) 

}
  return (
    <>
    {User ? <div >
  <NavbarBar/>
  <div className="containner">
       
       <div className="create-account">
       
    <h2 style={{color:"black"}}>{User} Login</h2>
    <form>
        
        <label style={{color:"black"}} for="email">Email:</label>
        <input onChange={getAuthData}  type="email" id="email" name="email" required/>
        <br/>
        <label style={{color:"black"}} for="password">Password:</label>
        <input onChange={getAuthData}  type="password" id="password" name="password" required/>
        <br/>
        
        <button onClick={checkAuth} type="submit">
          {Loading ? (<i className='fa fa-circle-notch fa-spin'/>) : ("Login")}

          </button>
          <button onClick={()=>{nevigat('/signup')}} type="submit">
          SignUp

          </button>
    </form>
</div>
       
    </div>
  </div> : (
  <>
  <SigninOption parent={parent}/>
 
  </>
  )}
   
            

  
    </>
  )
}

