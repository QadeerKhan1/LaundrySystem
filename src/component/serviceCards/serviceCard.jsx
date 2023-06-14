import React,{useState,useEffect} from 'react'
import './serviceCards.css'
import img from '../Images/lathercoat.jpg'
import {FcCheckmark} from 'react-icons/fc'
import { set } from 'local-storage'
export default function ServiceCard({priceBtn,addRemovebtn,itemTitle,itemDescription,itemImage,onClick}) {
    const [item , setItem]=useState({
       text:{
        itemDescp: " item Description",
        itemPrice:''
       },
       enable:{
              itemDescp:false,
                itemPrice:false
       }
    })
    useEffect(() => {
        
    }, [])
    const handleService=()=>{
        const {itemDescp,itemPrice}=item.text
        if(itemDescp && itemPrice){
            onClick(itemDescp,itemPrice)
            
        }
        else if(addRemovebtn==="Remove"){
            onClick(itemTitle)
        }
        else{
            alert("Please chose Item Description and Price")
        }
        setItem({
            text: {
              ...item.text,
              itemDescp: "item Description",
              itemPrice: '',
            },
            enable: {
              ...item.enable,
              itemDescp: false,
              itemPrice: false,
            },
          });
        
       
    }

    const EditDescription=(e)=>{
        setItem({...item, text:{  ...item.text,itemDescp:e.target.value} })
    }
    const getDiscription=()=>{
        setItem({
            ...item,
            enable:{
                ...item.enable,
                itemDescp:true
            }
        })
    }
    const handleSave=()=>{
        setItem({
            ...item,
            text:{
                ...item.text,
                itemDescp:item.text.itemDescp
            },
            enable:{
                ...item.enable,
                itemDescp:false
            }
        })
    }
    const handlePrice=(e)=>{
        
        const Value=e.target.value;
        setItem((prevItem) => ({
            ...prevItem,
            text: {
              ...prevItem.text,
              itemPrice: Value,
            },
          }));
       
    }

  return (
   <>
   <div className="servicesMain">
            <div className="serviceRow-one row">
                <div className="serviceitem  ">
                    <div className="serviceHeader">
                        <h3>{itemTitle}</h3>
                        {item.enable.itemDescp ?
                        <>
                         <input type="text" value={item.text.itemDescp}  onChange={EditDescription}  placeholder={itemDescription} />
                         <FcCheckmark onClick={handleSave} style={{fontSize:"20px",marginLeft:"5px", border:"1px solid green",borderRadius:"50%",cursor:"pointer"}}/> 
                        </>:(<>
                            { addRemovebtn === "Remove" ? (<p onClick={getDiscription}>{ itemDescription}</p>)
                        :(<p onClick={getDiscription}>{ item.text.itemDescp}</p>)
                     }
                        </>
                         )
                        
                         
                         }
                    </div>
                    <div className="serviceImage">
                        <img src={itemImage} alt="" />
                    </div>
                    <div className="serviceFooter">
                    <input onChange={handlePrice} type="number" value={item.text.itemPrice} placeholder={priceBtn}  style={{borderRadius:'10px',margin:"0px",width:"100px",height:"40px"}}/>
                        <button type="button" class="btn btn-outline-secondary" onClick={handleService} style={{borderRadius:'10px',borderColor:'rgb(13, 192, 233)'}}>{addRemovebtn}</button>
                        </div>
                </div>

            </div>
         </div>
   </>
  )
}
