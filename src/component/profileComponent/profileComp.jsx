import React,{useState,useEffect} from 'react';
import localStorage, { set } from 'local-storage';
import { getAuth } from 'firebase/auth';
import './profilecomp.css';
import Img1 from '../Images/mypic.jpg'
const ProfileComp = () => {
  const [change, setchange] = useState(
    {
      Text :{
        newGig:"I am a Full Stack Web Developer. I have done my graduation in Computer Science from University of Gujrat. I have done my FSC from Punjab College of Science. I have done my Matriculation from Government High School.",
        Name:"Abdul Qadeer",
        Location:"RawalPendi, Pakistan",
        Email:"qadeer1911@gmail.com",
        street:"125 Main Street",
        phone:"923321970473",
        myDescription:"I am a Full Stack Web Developer. I have done my graduation in Computer Science",

       
      },
      Enable: {
        newGig: false,
        Name: false,
        Location: false,
        Email: false,
        street: false,
        phone: false,
        myDescription:false,
      },
         

      
}
  );
 const user = getAuth().currentUser;
  useEffect(() => {
    const NewGig = localStorage.get('newGig');
    const name = localStorage.get('name');
    const location = localStorage.get('location');
    const email = localStorage.get('email');
    const Street = localStorage.get('street');
    const Phone = localStorage.get('phone');
    const MyDescription=localStorage.get('myDescription')

    setchange((prevState) => ({
      ...prevState,
      Text: {
        ...prevState.Text,
        newGig: NewGig || prevState.Text.newGig,
        Name: name || prevState.Text.Name,
        Location: location || prevState.Text.Location,
        Email: email || prevState.Text.Email,
        street: Street || prevState.Text.street,
        phone: Phone || prevState.Text.phone,
        myDescription: MyDescription || prevState.Text.myDescription,
      }
    }));

    
   fetch(`https://laundry-f31d7-default-rtdb.asia-southeast1.firebasedatabase.app/Users/${user.uid}/myInformaion.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({NewGig,name,location,email,Street,Phone,MyDescription}),
    });


   
    
  }, []);

  const changeEditMode = (option) => {
    if(option === "newGig")
    {
      setchange({ ...change, Enable: {...change.Enable,newGig: true, } });
  
    }
    else if(option === "street"){
      setchange({ ...change, Enable: {...change.Enable, street: true, }, });
    }
    else if(option === "location"){
      setchange({...change,Enable:{...change.Enable,Location:true}})
    }
    else if(option === "email"){
      setchange({...change,Enable:{...change.Enable,Email:true}})
    }
    else if(option === "phone"){
      setchange({...change,Enable:{...change.Enable,phone:true}})
    }
    else if(option === "name"){
      setchange({...change,Enable:{...change.Enable,Name:true} })
    }
    else if(option === "myDescription"){
      setchange({...change,Enable:{...change.Enable,myDescription:true} })
    }

  };
  const saveChange = (op) => {

    if (op === "newGig")
    {setchange({ ...change,  Enable: { newGig: false, } });
    localStorage.set('newGig', change.Text.newGig);
   }

    else if(op === "street"){
      setchange({ ...change,  Enable: {street: false,  }});
      localStorage.set('street', change.Text.street);
    }
    else if(op === "location"){
      setchange({ ...change,  Enable: {Location: false,  }});
      localStorage.set('location', change.Text.Location);
    }
    else if(op === "email"){
      setchange({ ...change,  Enable: {Email: false,  }});
      localStorage.set('email', change.Text.Email);
    }
    else if(op === "name"){
      setchange({ ...change,  Enable: {Name: false,  }});
      localStorage.set('name', change.Text.Name);
    }
    else if(op === "phone"){
      setchange({ ...change,  Enable: {phone: false,  }});
      localStorage.set('phone', change.Text.phone);
    }
    else if(op === "myDescription"){
      setchange({ ...change,  Enable: {myDescription: false,  }});
      localStorage.set('myDescription', change.Text.myDescription);
    }



  };
  const renderEditnewGig = () => {
    return ( 
      <>
     <div style={{display:"flex"}}>
     <textarea className="descreption-text" 
      style={{width:'80%',height:'100px'}}
      onChange={(e) => setchange(
        {
          ...e,
          Text: { ...change.Text,    newGig: e.target.value},
          Enable: { ...change.Enable, newGig: true, }      }  )}

       defaultValue={change.newGig} />
      <button className="btn btn-black " onClick={()=>{saveChange("newGig")}}>Save</button>
      </div>
      </>  
       ) } 
       const renderEditStreet = () => { 
        return(
          <>
          <input className="address-input" defaultValue={change.Text.street} onChange={(e) => setchange(
            {
              ...e,
              Text: { ...change.Text, street: e.target.value },
              Enable: { ...change.Enable, street: true} })} />
          <button className="btn btn-dark" onClick={()=>{saveChange("street")}}>Save</button>
        </>
        )
            }
           
            const renderEditLocation = () => {
              return (
                <>
                <input className="address-input" defaultValue={change.Text.Location} onChange={(e) => setchange(
                  {
                    ...e,
                    Text: { ...change.Text, Location: e.target.value },
                    Enable: { ...change.Enable, Location: true} })} />
                <button className="btn btn-dark" onClick={()=>{saveChange("location")}}>Save</button>
              </>
              )
            }

            const renderEditEmail = () => {
              return (
                <>
                <input className="address-input" defaultValue={change.Text.Email} onChange={(e) => setchange(
                  {
                    ...e,
                    Text: { ...change.Text, Email: e.target.value },
                    Enable: { ...change.Enable, Email: true} })} />
                <button className="btn btn-dark" onClick={()=>{saveChange("email")}}>Save</button>
              </>

              )
            }
            const renderEditName = () => {
              return (
                <> 
                <input className="address-input" defaultValue={change.Text.Name} onChange={(e) => setchange(
                  {
                    ...e,
                    Text: { ...change.Text, Name: e.target.value },
                    Enable: { ...change.Enable, Name: true} })} />
                <button className="btn btn-dark" onClick={()=>{saveChange("name")}}>Save</button>
              </>
              )
            }
            const renderEditPhone = () => {
              return (
                <>
                <input className="address-input" defaultValue={change.Text.phone} onChange={(e) => setchange(
                  {
                    ...e,
                    Text: { ...change.Text, phone: e.target.value },
                    Enable: { ...change.Enable, phone: true} })} />
                <button className="btn btn-dark" onClick={()=>{saveChange("phone")}}>Save</button>
              </>
              )
            }
            const renderEditmyDescription = () => {
              return (
                <>
                <textarea className="descreption-text" defaultValue={change.Text.myDescription} onChange={(e) => setchange(
                  {
                    ...e,
                    Text: { ...change.Text, myDescription: e.target.value },
                    Enable: { ...change.Enable, myDescription: true} })} />
                <button className="btn btn-dark" onClick={()=>{saveChange("myDescription")}}>Save</button>
              </>
              )
            }
            



            const renderDefaultPhone = () => {
              return (
                <p onClick={()=>{changeEditMode("phone")}} className="descreption-text">phone :{change.Text.phone}</p> )
            }
            const renderDefaultName = () => {
              return (

                <h1 onClick={()=>{changeEditMode("name")}} className="profile-name">{change.Text.Name}</h1> )
            }




            const renderDefaultLocation = () => {
              return (
                <p onClick={()=>{changeEditMode("location")}} className="profile-location">{change.Text.Location}</p> )
            }
            const renderDefaultEmail = () => {
              return (
                <p onClick={()=>{changeEditMode("email")}} className="descreption-text">Email:  {change.Text.Email}</p> )
            }

       const renderDefaultnewGig = () => {
        return (
          <p onClick={()=>{changeEditMode("newGig")}} className="descreption-text">{change.Text.newGig}</p> )
      }
      const renderDefaultStreet=()=>{
        return(
          <p onClick={()=>{changeEditMode("street")}} className="address-input">{change.Text.street}</p>
        )
      }
      const renderDefaultmyDescription=()=>{
        return(
          <p onClick={()=>{changeEditMode("myDescription")}} className="descreption-text">{change.Text.myDescription}</p>
        )
      }


      
  return (
    <div className="profile-container">
      <div className="profileTop">
      <div className="profile-header">
        <img
          className="profile-picture"
          src={Img1}
          alt="profile"
        />
         </div>
        <div className="profile-info">
          {change.Enable.Name ? (renderEditName()):(renderDefaultName())}
          {change.Enable.myDescription ? (renderEditmyDescription()):(renderDefaultmyDescription())}
          
        </div>
     
      </div><hr  className='profileTopBar'/>
      
     <div className="profilBottom row">
        <div className="profileDescreption col-4">
        <h2 className="descreption-title">Edit Your Gig</h2>

        {change.Enable.newGig ?
         (renderEditnewGig())
        : (renderDefaultnewGig()  )
          }

        </div>
     <div className="profile-address col-4">
        <h2 className="address-title">Address</h2>
        {change.Enable.street ? (  renderEditStreet() ) : (  renderDefaultStreet()  )}
        {change.Enable.Location ? (renderEditLocation()): (renderDefaultLocation() )}
      </div>
      <div className="profile-contact col-4">
        <h2 className="contact-title">Contact Information</h2>
        {change.Enable.Email ? (renderEditEmail()): (renderDefaultEmail())}
        {change.Enable.phone ? (renderEditPhone()): (renderDefaultPhone())}
      </div>
     </div>
    </div>
  );
};

export default ProfileComp;
