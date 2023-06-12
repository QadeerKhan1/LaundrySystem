import React from 'react'
import ServiceCard from '../../../../component/serviceCards/serviceCard'
import  shirt from '../../../../component/Images/pngegg.png'
import  paint from '../../../../component/Images/pant1.png'
import curtain from '../../../../component/Images/curtain.png'
import blanket from '../../../../component/Images/blanket.png'
import shoes from '../../../../component/Images/shoe.png'
import sheshine from '../../../../component/Images/shoeshine.png'
import lether from '../../../../component/Images/lathercoat.jpg'
import shalwarkamees from '../../../../component/Images/shalwarkameez.png'
import carpet from '../../../../component/Images/carpet.png'

export default function manageServices() {
    const manageServices=[
        {
          itemTitle:'Shirt',
          itemDescription:'Item Description',
          itemPrice:'Price',
          itemImage:shirt
        },
        {
          itemTitle:'Paint',
          itemDescription:'Item Description',
          itemPrice:'Price',
          itemImage:paint
        },
        {
          itemTitle:'Curtain',
          itemDescription:'Item Description',
          itemPrice:'Price',
          itemImage:curtain
        },
        {
          itemTitle:'blanket',
          itemDescription:'Item Description',
          itemPrice:'Price',
          itemImage:blanket
        },
        {
          itemTitle:'Shoes',
          itemDescription:'Item Description',
          itemPrice:'Price',
          itemImage:shoes
        },
        {
          itemTitle:'Lather',
          itemDescription:'Item Description',
          itemPrice:'Price',
          itemImage:lether
        },
        {
          itemTitle:'Shoe Shine',
          itemDescription:'Item Description',
          itemPrice:'Price',
          itemImage:sheshine
        },
        {
          itemTitle:'Carpet Cleaning',
          itemDescription:'Item Description',
          itemPrice:'Price',
          itemImage:carpet
        },
        {
          itemTitle:'Shalwar Kameez',
          itemDescription:'Item Description',
          itemPrice:'Price',
          itemImage:shalwarkamees
        },
      ]
       
      const handleService=(selectedService)=>{
        alert(selectedService.key)
        
      }


  return (
    <>
   
       <div className="row">
    {
      manageServices.map((val,ind)=>{
        return(
          <>
          <div key={ind} className='col-3'>
     <ServiceCard itemTitle={val.itemTitle} 
     itemDescription={val.itemDescription} 
     itemImage={val.itemImage} 
     priceBtn={val.itemPrice} 
     addRemovebtn={'Add To Cart'} 
      onClick={()=>handleService(val)}
      />
     </div>
          </>
        )

      })
    }
    </div>

    </>
  )
}
