import React,{useState} from 'react'
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
import { manageServices } from './srvicesData'
import { getAuth } from '@firebase/auth'
import { set } from 'local-storage'
export default function ManageServices() {
  const [chec , setChec]=useState("true")
  const arr=[]

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
      const auth = getAuth();
      const currentUser = auth.currentUser;
     if(currentUser){
      const userId = currentUser.uid; }
      const handleService = (itemdescription, itemprice, val) => {
        const { itemTitle, itemDescription, itemPrice, itemImage } = val;
        val.itemDescription = itemDescription;
        val.itemPrice = itemPrice;
        let chec = 'true';
      
        if (val.itemTitle && itemdescription && itemprice && val.itemImage) {
          fetch(`https://laundry-f31d7-default-rtdb.asia-southeast1.firebasedatabase.app/Users/${currentUser.uid}/myServices.json`)
            .then(response => response.json())
            .then(data => {
              const servicesArray = Object.entries(data);
              servicesArray.forEach((item) => {
                const [key, value] = item;
                console.log(value.itemTitle, "===", val.itemTitle)
                if (value.itemTitle === val.itemTitle) {
                  chec = 'false';
                }
              });
      
              if (chec === 'true') {
                fetch(`https://laundry-f31d7-default-rtdb.asia-southeast1.firebasedatabase.app/Users/${currentUser.uid}/myServices.json`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    itemTitle,
                    itemDescription,
                    itemPrice,
                    itemImage,
                  }),
                })
                .then(() => {
                  alert('Service added successfully');
                })
                .catch(error => {
                  console.error('Error adding service:', error);
                  alert('Error adding service');
                });
              } else {
                alert('Service already added');
              }
            })
            .catch(error => {
              console.error('Error fetching services:', error);
              alert('Error fetching services');
            });
        }
      };
      

     


  

  return (
    <>
   
       <div className="row">
    {
      manageServices.map((val,ind)=>{
        return(
          <>
          <div className='col-3'>
     <ServiceCard 
     key={ind}
     itemTitle={val.itemTitle} 
     itemDescription={val.itemDescription} 
     itemImage={val.itemImage} 
     priceBtn={val.itemPrice} 
     addRemovebtn={'Add Service'} 
      onClick={(itemdescription , itemprice)=>handleService(itemdescription,itemprice,val)}
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
