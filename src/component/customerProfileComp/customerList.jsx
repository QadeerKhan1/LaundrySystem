import React,{useEffect,useState} from 'react'
import conv from '../Images/conv.png'
import './customerNav.css'
import { AiFillStar } from 'react-icons/ai'
export default function CustomerList() {
  const list=[2,3,4,5,5,6,7,3]

  const [laundryProfiles, setLaundryProfiles] = useState([]);

  useEffect(() => {
    fetch('https://laundry-f31d7-default-rtdb.asia-southeast1.firebasedatabase.app/Users.json')
      .then(response => response.json())
      .then(data => {
        if (data) {
          const dataArray = Object.values(data);
        
          const laundryProfiles= dataArray.filter((e)=>{
            console.log(e.profile.role,"e")
            return(
               e.myServices ? e.myServices : null

            )
          })
          console.log(laundryProfiles,"laundryProfiles")
          setLaundryProfiles(laundryProfiles);
        }
      })
      .catch(error => {
        console.error('Error fetching laundry profiles: ', error);
      });
  }, []);

  return (
    <>
    <div className="ListMain row">
      <span ><h2>Most Rated Laundries :</h2></span>
    {list.map((item,ind)=>{
      return(
        <>
        <div className="card col-4 " style={{width:"23rem",marginTop:'20px',marginRight:"20px"}} >
      
      
      <img src={conv} className="card-img-top"  alt="..."/>
      <div className="profileIcon">
        <div className="Picon">
        <img src={conv} className="card-img-top rounded " alt="..."/>
        </div>
            <div className="porfileDesc">
              <span><h6>A Q KHAN</h6></span>
              <span>Top rate seller</span>
            </div>
          </div>
     n <div className="card-body">
        <p style={{margin:'0px'}} className="card-text">We have twenty four year service to wash and dry clothes</p>
    <span style={{color: "yellow",fontSize:"30px",margin:'0px'}}> <AiFillStar  /><span style={{color:'black',fontSize:"20px"}}> 5.0 (154)</span></span>
      </div>
      </div>
        </>
      )
    })}

    </div>


    </>
  )
}
