import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./Add.css";
import toast from 'react-hot-toast';

const Add = () => {

  const users = {
    fname:"",
    lname:"",
    email:"",
    password:""
  }

  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) =>{
      const {name, value} = e.target;
      setUser({...user, [name]:value});
  }

  const submitForm = async(e) =>{
    e.preventDefault();
    await axios.post("http://localhost:8000/api/create", user)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/")
    })
    .catch(error => console.log(error))
  }


  return (
    <div className='addUser'>
        <Link to={"/"}>Back</Link>
        <h3>Add new user</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="fname">First name</label>
                <input type="text" onChange={inputHandler} id="fname" name="fname" autoComplete='off' placeholder='First name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="lname">Last name</label>
                <input type="text" onChange={inputHandler} id="lname" name="lname" autoComplete='off' placeholder='Last name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input type="email" onChange={inputHandler} id="email" name="email" autoComplete='off' placeholder='Email' />
            </div>
            <div className="inputGroup">
                <label htmlFor="password">Password</label>
                <input type="password" onChange={inputHandler} id="password" name="password" autoComplete='off' placeholder='password' />
            </div>
            <div className="inputGroup">
                <button type="submit">ADD USER</button>
            </div>
        </form>
    </div>
  )
}

export default Add




// import React from 'react'
// import "./Add.css";
// import { Link } from 'react-router-dom';
// const Add = () => {
//     const inputHandler=(e)=>{

//     }

//   return (
//     <div className='addUser'>
//     <Link to="/">Back</Link>
//       <h3>Add New User</h3>
//       <form className='addUserForm '>
//         <div className='inputGroup'>
//             <label htmlfor="fname">First name</label>
//             <input type='text' onChange={inputHandler} id="fname" name="fname" autoComplete='off' placeholder='First Name'/>
//         </div>
//         <div className='inputGroup'>
//             <label htmlfor="lname">Last name</label>
//             <input type='text' onChange={inputHandler} id="lname" name="lname" autoComplete='off' placeholder='last Name'/>
//         </div>
//         <div className='inputGroup'>
//             <label htmlfor="Email">Email</label>
//             <input type='email' onChange={inputHandler} id="email" name="email" autoComplete='off' placeholder='Enter Email'/>
//         </div>
//         <div className='inputGroup'>
//             <label htmlfor="password">Password</label>
//             <input type='password' onChange={inputHandler} id="password" name="password" autoComplete='off' placeholder='enter password'/>
//         </div>
//         <div className='inputGroup'>
//            <button type='submit'>Add</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Add
