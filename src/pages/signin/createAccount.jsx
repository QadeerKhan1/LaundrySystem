import React,{useState} from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../Config/firebaseConfig'
import './createAccount.css';

import { Link,useNavigate } from 'react-router-dom';

import img from '../../component/Images/AqBrand2.png'
import SigninOption from '../../signinOption/signinOption';
export default function CreateAccount({option}) {
  const [userAuth, setUserAuth] = useState({
    email: "",
    password: ""});
    const [count,setCount]=useState("")
    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState();
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
    const user = userCredential.user;
    const uid = user.uid;
    
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
  setCount(option)

  }

    


  return (
    <>
    {count ? <div >
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
  </div> : (<SigninOption parent={parent}/>)}
   
            

  
    </>
  )
}
