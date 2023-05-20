import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'

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
export default function Main() {
let user ;
  return (
    <>
      <BrowserRouter>
        <Routes>

         
          {user ? ( <> <Route exact path="/" element={<Home/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/services" element={<Services/>} />
          <Route exact path="/createAccount" element={<CreateAccount/>} />
          <Route exact path="/contactUs" element={<ContactUs/>} /> </> )  :

          <>
          (
          <Route exact path="/" element={<Dashbord/>} />
          <Route exact path="orderRouting" element={<OrderRouting/>}>
          <Route exact path="completedOrder" element={<CompletedOrders/>} />
          <Route exact path="pendingOrder" element={<PendingOrder/>} />
          <Route exact path="cancelOrder" element={<CancelOrder/>} />
          </Route>
          
          <Route exact path="payment" element={<Payment/>} >
          <Route exact path="totalBalance" element={<TotalBalance/>} />
          <Route exact path="pendingBalance" element={<PendingBalance/>} />
          <Route exact path="receiveBalance" element={<ReceiveBalance/>} />
          </Route>
          <Route exact path='servicesMain' element={<ServicesMain/>} >
          <Route exact path="myServices" element={<MyServices/>} />
          <Route exact path="manageServices" element={<ManageServices/>} />
          </Route>
          <Route exact path="rating" element={<Rating/>} >
          <Route exact path="AllReviews" element={<AllReviews/>} />
            </Route>
            <Route exact path="profile" element={<Profile/>} >
            <Route exact path="MyInformation" element={<Myinfo/>} />
              </Route>
          
          )</>
           }
      
        </Routes>
      </BrowserRouter>

    
    </>
  )
}
