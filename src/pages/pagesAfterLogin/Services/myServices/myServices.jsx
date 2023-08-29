import React,{useEffect,useState} from 'react'
import ServiceCard from '../../../../component/serviceCards/serviceCard'
import "./myServices.css"
import { getAuth } from 'firebase/auth'
export default function MyServices() {
  const [myServicesData, setMyServicesData] = useState([])
  const [delet,setDelete]=useState(false)
  const [serviceKey,setServiceKey]=useState('')
  const auth = getAuth();
  useEffect(() => {
   
   
    const user = auth.currentUser;
    fetch(`https://laundry-f31d7-default-rtdb.asia-southeast1.firebasedatabase.app/Users/${user.uid}/myServices.json`)
    .then(response => response.json())
    .then(data => {
      const servicesArray = Object.entries(data).map(([id, service]) => ({
        id: id, // Store the Firebase key as the service ID
        ...service, // Store the service data
      }));
  
      // Use the servicesArray in your application
      setMyServicesData(servicesArray);
      
    });

  }, [delet])

  const getDelteService = (itemTitle,val)=>{
    const user = auth.currentUser;
    fetch(`https://laundry-f31d7-default-rtdb.asia-southeast1.firebasedatabase.app/Users/${user.uid}/myServices/${val.id}.json`, {
    method: 'DELETE',
  })
    .then(response => {
      if (response.ok) {
        // Service deleted successfully
        // You can perform any additional actions here if needed
        alert("Service Deleted Successfully")
        setDelete(true)
        
      } else {
        // Failed to delete service
        console.log('Failed to delete service');
      }
    })
    .catch(error => {
      // Error occurred during the delete request
      console.error('Error:', error);
    });


  }

  return (
    <>
     {myServicesData.length > 0 ? (
        <div className="row">
          {myServicesData.map((val, ind) => (
            <div className='col-3' key={val.id}>
              <ServiceCard 
                itemTitle={val.itemTitle} 
                itemDescription={val.itemDescription} 
                itemImage={val.itemImage} 
                priceBtn={val.itemPrice} 
                addRemovebtn={'Remove'} 
                onClick={(itemTitle)=>getDelteService(itemTitle,val)}
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
