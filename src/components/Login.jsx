/* eslint-disable react/no-unescaped-entities */
// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom"
// import email_icon from "../assets/images/email.png";
// import password_icon from "../assets/images/password.png";
// import "../assets/styles/Login.css";
// import Logo from '../assets/images/Logo.png'
// import rectangle from "../assets/images/Rectangle 96.png";
// import { useState } from "react";
// import { userAuth } from "../context/AuthContext"


// function Login() {

//   const { login } = userAuth()
//   const navigate = useNavigate()

//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();


//   async function handleSubmit(event) {
//     event.preventDefault();

//     const LoginUser = {
//         email,
//         password,
//       }

//       const requestOptions = {
//         method: "POST",
//         headers: {"content-Type": "application/json"},
//         body: JSON.stringify(LoginUser)
//       }

//       try {
//         const response = await login(requestOptions);
//         const data = await response.json();
//         console.log(data);
//       } catch (error) {
//         console.log(error)
//       } finally {
//         navigate("/dashboard", {replace: true});
//       }

//   }


//   return (
//     <form onSubmit={handleSubmit}>
//     <div className="login">
//         <div className="hero">
//         <img src={rectangle} alt="" />
//       </div>
//         <div className="login-hero">
//         <img src={Logo} alt=''/>
//         </div>
//       <div className="login-text">
//         <h3>Login to Your Kook Account</h3>
//       </div>
//       <div className="input">
//         <img src={email_icon} alt="" />
//         <input
//             name="email"             
//             type="email"
//             placeholder="Email ID"
//             onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div className="input">
//         <img src={password_icon} alt="" />
//         <input  
//             name="password"           
//             type="password"
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <div className="reset">
//             Lost Password? <span>Click Here!</span>
//           </div>
//           <div className="submit">Login</div>
//     </div>
//     </form>
//   );
// }

// export default Login;


import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userAuth } from '../context/AuthContext';

function Login() {


  const navigate = useNavigate()

  // state variables for form input values
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: ""
  })
  
  const [action, setAction] = useState(false)

  // state variable for form error 
  const [error, setError] = useState(() => null)

  // values from context
  const { login } = userAuth()


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
  async function handleLogin(event){

    event.preventDefault();

        try{
          setAction(true)
          const details = {
            email: formDetails.email,
            password: formDetails.password
          }
          await login(details); 
        }catch(e){
          setError(e.message)
        }finally{
            setAction(false);
            navigate('/dashboard', {replace: true});
        }
}

  return (
    <section className='forms'>

    <h1 className='form-header'>Login to Your Account</h1>

    <form onSubmit={handleLogin}>

      {error && <h5 className='error red'>{error}</h5>}

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

      <button type="submit">{action ? 'LOGGING IN...' : 'LOGIN'}</button>

      <div className='optional'>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </form>
  </section>
  )
}

export default Login
