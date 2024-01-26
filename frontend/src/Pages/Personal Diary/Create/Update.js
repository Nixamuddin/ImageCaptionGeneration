import React, { useEffect, useState } from 'react'
import './Create.css'
import{BiSolidMessageSquareAdd} from 'react-icons/bi'
import axios from 'axios'
const Update = () => {
  const[title,setTile]=useState("")
  const[description, setdescription]=useState("");
  const[photo,setphoto]=useState("")
  const [id, setid]=useState("")
  const getsingle=async()=>{
try{
    const{data}=await axios.get(`/api/v1/diary/single-diary/${id}`);
    setTile(data.Diary.title);
    setdescription(data.Diary.description);
    setphoto(data.Diary.photo);
    setid(data.Diary._id);
}
catch(error){
    console.log(error)
}
  }
  useEffect(()=>{
getsingle();
//eslint-disable-next-line
  },[])

  const update=async(e)=>{
    e.preventDefault();
    try{
      const formdata=new FormData();
      formdata.append("title", title);
      formdata.append("description", description);
      formdata.append("photo", photo);
const data=await axios.post(`/api/v1/diary/update-diary/${id}`,formdata);
if(data?.success){
  alert("diary created successfully");
}
    }
    catch(error){
      console.log(error);
      alert("something went wrongs")
    }
  }
  Image='https://c1.wallpaperflare.com/preview/222/501/199/writing-journal-personal-diary-preparation.jpg'
  return (
    <>
    <div className="creation">
      <div className=" container containers">
        <img src={photo? URL.createObjectURL(photo):Image} alt=""/> 
       
        <div className='publish'>
          <label htmlFor="file"><BiSolidMessageSquareAdd size={40}/></label>
        <input id='file' type="file" name='photo' hidden  onChange={(e)=>setphoto(e.target.files[0])} accept='image/*' />
        <button className='btn btn-primary ' onClick={update}>Update</button>
        </div>
        <div className="inputs">
        
        <input type="text" name='title' placeholder='Title' value={title} onChange={(e)=>setTile(e.target.value)} />
<textarea name="description" id=""  cols="30" rows="4.5" placeholder='Tell Your Story...' value={description} onChange={(e)=>setdescription(e.target.value)}></textarea>
        </div>

      </div>
      </div>
    </>
  )
}

export default Update
