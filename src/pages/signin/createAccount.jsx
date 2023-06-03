import React,{ useContext, useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './createAccount.css';
import NavbarBar from '../../component/Navbar/navbarBar';
import { useNavigate } from 'react-router-dom';
import SigninOption from '../../signinOption/signinOption';
import { UserContext } from '../contextApi/userContext';

export default function CreateAccount({option}) {

  const [userAuth, setUserAuth] = useState({ email: "", password: ""});
    const [count,setCount]=useState("")
    const [Loading, setLoading] = useState(false);
    const { setUserData } = useContext(UserContext);

    const nevigat=useNavigate()

    const getAuthData = (e) => {
      setUserAuth({ ...userAuth, [e.target.name]: e.target.value });
    };

    const auth = getAuth();

     const checkAuth = (e) => {
      const {email,password}=userAuth;
      e.preventDefault();
      setLoading(true);
      

      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    
    setLoading(false)
    alert("Login Successfully")
    
    setUserAuth({email:" ",password:" "})
    nevigat('/');

  })
  .catch((error) => {
   
    setLoading(false);
    alert("Please fill all inputs")
  });
    };
    
  const parent=(option)=>{
    const userData={Option:option}
    setUserData(userData)
  setCount(option) 

}
  return (
    <>
    {count ? <div >
  <NavbarBar/>
  <div className="containner">
       
       <div className="create-account">
       
    <h2 style={{color:"black"}}>{count} Login</h2>
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

