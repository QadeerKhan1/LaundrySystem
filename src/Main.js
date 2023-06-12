import React,{useEffect,useState} from 'react'
import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom'

 import { getAuth } from 'firebase/auth'

import Home from './pages/Home'
import Signup from './pages/signup/signUp'
import Services from "./pages/Services/services"
import CreateAccount from "./pages/signin/createAccount"
import ContactUs from './pages/contactUs/contactUs'
import Dashbord from './pages/pagesAfterLogin/Dashbord/dashbord'
import Order from '../src/pages/pagesAfterLogin/Orders/completedOrder/completedOrders'
import PendingOrder from './pages/pagesAfterLogin/Orders/pendingOrder/pendingOrder'
import CompletedOrders from './pages/pagesAfterLogin/Orders/completedOrder/completedOrders'
import OrderRouting from './pages/pagesAfterLogin/Orders/OrderRouting/orderRouting'
import CancelOrder from './pages/pagesAfterLogin/Orders/cancelOrder/cancelOrder'
import TotalBalance from './pages/pagesAfterLogin/Payment/totalBalance/totalBalance'
import Payment from './pages/pagesAfterLogin/Payment/mainPayment'
import ServicesMain from './pages/pagesAfterLogin/Services/servicesMain'
import PendingBalance from './pages/pagesAfterLogin/Payment/pendingBalance/pendingBalance'
import ReceiveBalance from './pages/pagesAfterLogin/Payment/recieveBalance/receiveBalance'
import MyServices from './pages/pagesAfterLogin/Services/myServices/myServices'
import ManageServices from './pages/pagesAfterLogin/Services/manageServices/manageServices'
import Rating from './pages/pagesAfterLogin/Rating/Rating'
import AllReviews from './pages/pagesAfterLogin/Rating/allReviews/allReviews' 
import Profile from './pages/pagesAfterLogin/Profile/profile'
import Myinfo from '../src/pages/pagesAfterLogin/Profile/myInformatin/myInfo'
import CustomerProfile from './pages/customerModule/customerProfile/customerProfile'
import CustomerOrder from './pages/customerModule/customerOrder/customerOrder'
import { auth } from '../src/Config/firebaseConfig'
import {UserProvider} from './pages/contextApi/userContext'
export default function Main() {

  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState('');
 


  // please note that this is not a good practice to use useEffect like this
  // you should use onAuthStateChanged in a separate file and import it here
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      
      setUser(user);
      fetch(`https://laundry-f31d7-default-rtdb.asia-southeast1.firebasedatabase.app/Users/${user.uid}/profile.json`)
      .then(response => response.json())
      .then(data => {
        Object.keys(data).forEach(key => {
          // Access each element using the key
          
          var element = data[key];
          
          
          setUserProfile(element.role)
         
           
          // Do something with the element
        });
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      
     
    });
  }, []);

  


  //i am still facing the error 
  // please help me to solve this error
  // i am not able to solve this error
  

  


  
  return (
    <>
      <BrowserRouter>
      <UserProvider>
        <Routes>
        
         
          {user ? <>
          {userProfile === 'Laundry' ? <>
          (
          <Route exact path="/" element={<Dashbord/>} />
          
          <Route exact path="orderRouting" element={<OrderRouting/>}>
        <Route index element={<Navigate to="completedOrder"/>} />
          <Route exact path="completedOrder" element={<CompletedOrders/>} />
          <Route exact path="pendingOrder" element={<PendingOrder/>} />
          <Route exact path="cancelOrder" element={<CancelOrder/>} />
          </Route>
          
          <Route exact path="payment" element={<Payment/>} >
          <Route index element={<Navigate to="totalBalance"/>} />
          <Route exact path="totalBalance" element={<TotalBalance/>} />
          <Route exact path="pendingBalance" element={<PendingBalance/>} />
          <Route exact path="receiveBalance" element={<ReceiveBalance/>} />
          </Route>
          <Route exact path='servicesMain' element={<ServicesMain/>} >
          <Route index element={<Navigate to="myServices" />} />

          <Route exact path="myServices" element={<MyServices/>} />
          <Route exact path="manageServices" element={<ManageServices/>} />
          </Route>
          <Route exact path="rating" element={<Rating/>} >
          <Route index element={<Navigate to="AllReviews"/>} />
          <Route exact path="AllReviews" element={<AllReviews/>} />
            </Route>
            <Route exact path="profile" element={<Profile/>} >
            <Route index element={<Navigate to="MyInformation"/>} />
            <Route exact path="MyInformation" element={<Myinfo/>} />
              </Route>
            
          
          )</> : 
          (
            <>
           < Route exact path="/" element={<CustomerProfile/>} />
          <Route exact path="customerOrder" element={<CustomerOrder/>} />
          </>
          )
           
           
          }
          </> :
          ( <> <Route exact path="/" element={<Home/>} />
          
          <Route exact path="/signup"  element={<Signup/>} />
          <Route exact path="/services" element={<Services/>} />
          <Route exact path="/createAccount" element={<CreateAccount/>} />
          <Route exact path="/contactUs" element={<ContactUs/>} /> </> )

         
           }
      
        </Routes>
        </UserProvider>
      </BrowserRouter>

    
    </>
  )
}
