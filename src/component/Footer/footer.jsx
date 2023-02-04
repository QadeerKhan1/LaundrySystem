import React from 'react'
import logo from '../Images/Logo2.jpg';
import './footer.css';

export default function footer() {
  return (
    <>
    <div className="footerMain row">
        <div className="footer-first ">
            <div className="logo">
                <img src="https://gowash.ancorathemes.com/wp-content/uploads/2016/06/logo_2x.png" class="logo_main" alt="img"  />
            </div>
            <div className="logo-descr">
                <h6>Ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Ab illo inventore veritatis et quasi architecto. Ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</h6>
            </div>
        </div>
        <div className="footer-second">
            <div className="blog">
                <h3>Blog Feed</h3>
                <hr />
            </div>
            <div className="blogContent">
            <ul>
<li>
<a href="https://gowash.ancorathemes.com/m3-e36-cabrio/">M3 E36 Cabrio</a><br />
<span class="post-date">July 7, 2016</span>
</li>
<li>
<a href="https://gowash.ancorathemes.com/ordering-a-rinse-is-easy/">Ordering a rinse is easy!</a><br />
<span class="post-date">June 21, 2016</span>
</li>
<li>
<a href="https://gowash.ancorathemes.com/dont-wait-for-cleaning-until-its-too-late/">Don’t wait for cleaning until it’s too late!</a><br />
<span class="post-date">June 15, 2016</span>
</li>
</ul>
            </div>
        </div>
        <div className="footer-third">
         <aside id="nav_menu-3" >
          <h3 class="widget_title">Services</h3>
          <hr />
          <div class="menu-footer-menu-container">
            <ul id="menu-footer-menu" className="serviceMenu">
                <li className='fas fa-hand-point-right'><a href="/dry-cleaning/">Dry Clean Your Winter Coat</a></li>
                <li className='fas fa-hand-point-right'  ><a href="/shirt-laundry/">Dry Clean</a></li>
                <li className='fas fa-hand-point-right'  ><a href="/drapery-cleaning/">Ironing Services</a></li>
                <li className='fas fa-hand-point-right' ><a href="/silk-and-suede/">Laundry</a></li>
                <li className='fas fa-hand-point-right' ><a href="/alternations-and-repairs/">Wash &amp; Fold</a></li>
                <li className='fas fa-hand-point-right' ><a href="/leather-cleaning/">Laundry Service London</a></li>
                <li className='fas fa-hand-point-right' ><a href="/shoe-shine-available/">Laundry App</a></li>
</ul></div></aside>
        </div>
        <div className="footer-fourth">
            
        <aside id="text-3" ><h3 >Contact Info</h3> <hr /><div><div class="info">
                <h2 className='fas fa-female'></h2>
            <a href="tel:123-456-7890">0332-1970473</a></div>
            Gmail:
<span ><a href="mailto:info@yoursitename.com">qadeer1911@gmail.com</a></span>

</div>

<div>
    facebook : <a href="">A Q KHAN</a>
</div>
</aside>
        
        </div>

    </div>
    
    </>)
}
