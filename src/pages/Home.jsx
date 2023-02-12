import React from 'react';

import TobBar from '../component/Navbar/TobBar';
import Navbar from '../component/Navbar/Nav';
import Carsoul from '../component/caursoul/carsoul';
import Header from '../component/Header/header';
import Footer from '../component/Footer/footer';
import MidCursole from '../component/MidCursole/midCursole';



export default function Home() {
  return (
    <>
     <TobBar/>
    <Navbar/>
    <Carsoul/>
     <Header/>
     <MidCursole/>
     <Footer/>
     
    </>
  )
}

