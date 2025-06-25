import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
  // const [username,setUsername]=useState('')
  // const [gender,setGender]= useState('')
  // const [checkbox,setCheckbox]=useState(false)
  // const [errors,setErrors]=useState({})
  const [data,setData]=useState([])
  useEffect(()=>{
    const fetchUser =async(e)=>{
    // e.preventDefault()
    try{
      const res = await axios.get(`http://localhost:4102/user/1`)
      setData(res.data)
      console.log("user fecthed using id successfully.....")
    }catch(err){
      console.log(err)
    }
  }
    fetchUser()
  },[])
  // const handleValidate = (e)=>{
  //   e.preventDefault()
  //   const error={}
  //   if(!username){
  //     error.username = "enter username..."
  //   }else if(username.length <5){
  //     error.username = "username must be greater than 5...."
  //   }
  //   if (!checkbox){
  //     error.checkbox="please click on checkbox..."
  //   }
  //   if(!gender){
  //     error.gender="select gender...."
  //   }
  //   setErrors(error)
  // }
  const handleData = (e,id,name)=>{
    e.preventDefault()
    // axios.post("http://localhost:4102/",{
    //   id,name
    // })
    // .then((response)=>{
    //   console.log("data posted successfully....",response.data)
    // })
    // .catch((error)=>{
    //   console.log("error : ",error)
    // })
    try{
      const response=axios.post("http://localhost:4102",{
        id,name
      })
      console.log("data posted successfully...",response.data)
    }catch(err){
      console.log("Error : ",err)
    }
  }

  
  return (
    <div>
      {/* <form onSubmit={handleValidate}>
        <h3>Form validation</h3>
        <input type='text' placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/><br/>
        {errors.username && <p style={{color:'red'}}>{errors.username}</p>}
        <label>Gender</label>
        <select value={gender} onChange={(e)=>setGender(e.target.value)}>
        <option value=''>select</option>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        </select><br/>
        {errors.gender && <p style={{color:'red'}}>{errors.gender}</p>}
        <input type='checkbox' onChange={()=>setCheckbox(true)}/> Terms and conditions <br/>
        {errors.checkbox && <p style={{color:'red'}}>{errors.checkbox}</p>}
        <button type='submit'>Validate</button>
      </form> */}
      {data.map((item,index)=>(
        <button onClick={(e)=>handleData(e,item.id,item.name)}>
        <p>{item.id}</p>
        <p>{item.name}</p>
        </button>
        
      ))}
    </div>
  )
}

export default App
