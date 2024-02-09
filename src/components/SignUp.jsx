// import React, { useState, useContext } from "react";
// // import { useState } from "react";
// import "../assets/styles/SignUp.css";
// // import Add from "../assets/images/Add_Image_icon-icons.com_54218.png";
// import Logo from "../assets/images/Logo.png";
// import { useNavigate } from "react-router-dom"
// import user_icon from "../assets/images/image.png";
// import email_icon from "../assets/images/email.png";
// import password_icon from "../assets/images/password.png";
// // import Navbar from "./Navbar";
// import rectangle from "../assets/images/Rectangle 96.png";
// // import { Link } from "react-router-dom"
// import { userAuth } from "../context/AuthContext"

// function SignUp() {

//   const navigate = useNavigate()
//   const { register } = userAuth()

//   const [firstname, setFirstName] = useState();
//   const [lastname, setLastName] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [role, setRole] = useState();

//   async function handleSubmit(event) {
//     event.preventDefault();

//     const registerUser = {
//         firstname,
//         lastname,
//         email,
//         password,
//         role,
//       }

//       const requestOptions = {
//         method: "POST",
//         headers: {"content-Type": "application/json"},
//         body: JSON.stringify(registerUser)
//       }

//       try {
//         const response = await register(requestOptions);
//         const data = response
//         console.log(data);
//       } catch (error) {
//         console.log(error)
//       } finally {
//         navigate("/login");
//       }
      
//   }

//   return (
//     <div className="login">
//       <div className="hero">
//         <img src={rectangle} alt="" />
//       </div>
//       <div className="login-hero">
//         <img src={Logo} alt="" />
//       </div>
//       <div className="login-text">
//         <h3>Create Your Kook Account</h3>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div className="input">
//           <img src={user_icon} alt="" />
//           <input
//             type="text"
//             placeholder="First Name"
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//         </div>
//         <div className="input">
//           <img src={user_icon} alt="" />
//           <input
//             type="text"
//             placeholder="Last Name"
//             onChange={(e) => setLastName(e.target.value)}
//           />
//         </div>
//         <div className="input">
//           <img src={email_icon} alt="" />
//           <input
//             type="email"
//             placeholder="Email ID"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="input">
//           <img src={password_icon} alt="" />
//           <input
//             type="password"
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="input">
//           <img src={password_icon} alt="" />
//           <input
//             type="field"
//             placeholder="Role"
//             onChange={(e) => setRole(e.target.value)}
//           />
//         </div>
//         {/* <div className="input">
//           <div className="dropdown-btn">Choose One</div>
//             <div className="dropdown-content">
//               <div className="dropdown-item">
//                 Individual
//               </div>
//               <div className="dropdown-item">
//                 Chef
//               </div>
//             </div>
//         </div> */}
//         <button
//           type="submit"
//           className="submit"
//           style={{ fontFamily: "Poppins" }}
//         >
//           Sign Up
//         </button>
//       </form>
//       <div className="reset">
//         Already have an account? <span>Click Here!</span>
//       </div>
//     </div>
//   );
// }

// export default SignUp;


import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userAuth } from '../context/AuthContext';


function SignUp() {

  const navigate = useNavigate()

  // state variables for form input values
  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
    role: "",
    email: "",
    password: "",
    passwordConfirm: ""
  })
  
  const [action, setAction] = useState(false)

  // state variable for form error 
  const [error, setError] = useState(() => null)

  // state variable for success 
  const [msg, setMsg] = useState(() => null)

  // values from context
  const { register } = userAuth()


  // fuction watching and updating changes in input values
  function formChanges(event){

    event.preventDefault();

    const {name, value, type, checked} = event.target
    setFormDetails( prevState => {
        return{...prevState,
            [name]: type === 'checkbox' ? checked : value
        }   
    })
}


  // function to handle form submit and sign up
  async function handleSignUp(event){

    event.preventDefault();

    if(formDetails.password === formDetails.passwordConfirm){
        try{
          setAction(true)
          const details = {
            firstname: formDetails.firstname,
            lastname: formDetails.lastname,
            email: formDetails.email,
            password: formDetails.password,
            role: formDetails.role
          }
          const registerUser = await register(details);
          setMsg(registerUser)  
        }catch(e){
          setError(e.message)
        }finally{
          setAction(false);
          navigate('/login', {replace: true}); 
        }
    }else{
      setError('passwords do not match')
    }
  }

  return (
    <section className='forms'>

    <h1 className='form-header'>Sign-Up for an Account</h1>

    <form onSubmit={handleSignUp}>

      {error && <h5 className='error red'>{error}</h5>}
      {msg && <h5 className='success'>{msg}</h5>}

      <div className='input-holder'>
      <label htmlFor="firstname">First Name</label>
      <input 
        type="text" 
        placeholder="First Name" 
        name="firstname" 
        id="firstname" 
        className='input'
        onChange={formChanges}
        value={formDetails.firstname}
        required />
      </div>

      <div className='input-holder'>
      <label htmlFor="lastname">Last Name</label>
      <input 
        type="text" 
        placeholder="Last Name" 
        name="lastname" 
        id="lastname" 
        className='input'
        onChange={formChanges}
        value={formDetails.lastname}
        required />
      </div>

      <div className='input-holder'>
      <label htmlFor="role">Role</label>
      <select name="role" id="role" value={formDetails.role} onChange={formChanges} required>
        <option value="private_chef">Private Chef</option>
        <option value="individual">Individual</option>
        <option value="catering_business">Catering Business</option>
      </select>
      </div>

      <div className='input-holder'>
      <label htmlFor="email">Email</label>
      <input 
        type="email" 
        placeholder="E-mail" 
        name="email" 
        id="email" 
        className='input'
        onChange={formChanges}
        value={formDetails.email}
        required />
      </div>

      <div className='input-holder'>
      <label htmlFor="password">Password</label>
      <input 
        type="password" 
        placeholder="Password" 
        name="password" 
        id="password" 
        className='input'
        onChange={formChanges}
        value={formDetails.password}
        required
        minLength='6'
        maxLength='18' />
      </div>

      <div className='input-holder'>
      <label htmlFor="confirm-pw">Confirm Password</label>
      <input 
        type="password" 
        placeholder="Enter Password Again" 
        name="passwordConfirm" 
        id="confirm-pw" 
        className='input'
        onChange={formChanges}
        value={formDetails.passwordConfirm}
        required
        minLength='6'
        maxLength='18' />
      </div>

      <button type="submit">{action ? 'SIGNING UP...' : 'SIGN UP'}</button>

      <div className='optional'>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </form>
  </section>
  );
}

export default SignUp;
