import React from 'react'
import './carsoul.css';
import './mediaQuery.css';
import img1 from '../Images/office.jpg'
import aqkhan from '../Images/white2.jpg'
import messi from '../Images/fourth.jpg'






export default function carsoul() {
  return (
   <>
    <div className='postion-absolute' >
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" id='mainCoursoul' role="listbox" >
    <div class="carousel-item active" >
      <img class="d-block w-100 " src={img1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={aqkhan} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={messi} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>

</div>
<div className='carsoulParagraph' >
    <div className="head1">
      <h1>Save Time For More Important Thing</h1>
   
    </div>
    <hr />
    <div>
      <h4>We Will Take Care About Cleaness</h4>
    </div>
    <div className='carsoulButton'>
    <a  class="btn btn-danger font-weight-bold ">Order Now</a>
    </div>

  </div>
    </div>
   </>
  )
}
