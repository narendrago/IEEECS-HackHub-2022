import React, { useRef, useState } from "react"
import {  Alert } from "react-bootstrap"
import {useAuth}  from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import Tittle from '../Components/Tittle';
import './Login.css';

function LoginPage() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    
    try {
      setError("")
      setLoading(true)
      sessionStorage.setItem('login',emailRef.current.value);
      await login(emailRef.current.value, passwordRef.current.value)

      history.push("/dashboard")

      console.log(sessionStorage.getItem('login'))
      //setEmail({email:emailRef.current.value})
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    // <>
    <div className="LoginPage">
            <Tittle title={'Login'} span={'Login'} />
       <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
            <div className="image">
            </div>
          </div>
          <div className="body-form">
           <form onSubmit={handleSubmit}>
           {error && <Alert variant="danger">{error}</Alert>}

              <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-user"></i></span>
  </div>
  <input type="email" className="form-control" ref={emailRef} placeholder="Email" />
</div>
 <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-lock"></i></span>
  </div>
  <input type="password" className="form-control" ref={passwordRef} placeholder="Password" />
</div>
{/* <BrowserRouter> */}
  {/* <Link to="/bookride"> */}
      <button type="submit" className="btn btn-secondary btn-block">LOGIN</button>
  {/* </Link> */}
  {/* <Route path="/bookride" exact component={BookRide} /> */}

{/* </BrowserRouter> */}
 <div className="message">
{/* <div><input type="checkbox" /> Remember ME</div> */}
 <div><a href="/">Didn't register?</a></div>
 </div>
   </form>
            {/* <div className="social">
              <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
              <a href="https://twitter.com/login"><i className="fab fa-twitter-square"></i></a>
              <a href="#"><i className="fab fa-google"></i></a>
            </div> */}
          </div>
        </div>
       </div>   
       </div>
        
  )
}
export default LoginPage;