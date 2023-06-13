import React,{useEffect,useState} from 'react'
import ServiceCard from '../../../../component/serviceCards/serviceCard'
import "./myServices.css"
import { getAuth } from 'firebase/auth'
export default function MyServices() {
  const [myServicesData, setMyServicesData] = useState([])
  const arr=[1,2,3,4]
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    fetch(`https://laundry-f31d7-default-rtdb.asia-southeast1.firebasedatabase.app/Users/${user.uid}/myServices.json`)
    .then(response => response.json())
    .then(data => {
      Object.keys(data).forEach(key => {
        const element = data[key];
        const servicesArray = Object.values(data);
        setMyServicesData(servicesArray);
      });
    })
    .catch(error => {
      // Handle any errors
      
    }
    )

  }, [])
  return (
    <>
     {myServicesData.length > 0 ? (
        <div className="row">
          {myServicesData.map((val, ind) => (
            console.log("val",val),
            <div className='col-3' key={ind}>
              <ServiceCard 
                itemTitle={val.itemTitle} 
                itemDescription={val.itemDescription} 
                itemImage={val.itemImage} 
                priceBtn={val.itemPrice} 
                addRemovebtn={'Add To Cart'} 
              />
            </div>
          ))}
        </div>
      ) : (
       <>
      <figure>
    <div class="dot white"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
</figure> </>)}
      

    </>
  )
}
