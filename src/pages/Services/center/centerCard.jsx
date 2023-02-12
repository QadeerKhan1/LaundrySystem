import React from 'react'
import './center.css'


export default function centerCard() {
    const arr=[1,2,3,4,5,6]
  return (
    <>
     <div className="CardDiv row">
     {arr.map((ar)=>{
        return (<div class="sc_services_item_content col-md-4 col-sm-6">
        <h4 class="sc_services_item_title"><a href="https://gowash.ancorathemes.com/services/dry-cleaning/">Dry Cleaning</a>
        <hr /></h4>
        <div class="sc_services_item_description">
        <p>Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, vel rutrum erat commodo ut. Praesent finibus congue euismod. Nullam...</p><a href="https://gowash.ancorathemes.com/services/dry-cleaning/" class="sc_button sc_button_round sc_button_style_filled sc_button_size_small sc_services_item_readmore ">Learn more</a> </div>
        </div>)
    })}
      
     </div>
    </>
  )
}
