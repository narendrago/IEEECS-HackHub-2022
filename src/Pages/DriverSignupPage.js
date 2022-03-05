import React, { useRef, useState } from "react"
import { Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import Tittle from "../Components/Tittle"

export default function DriverSignupPage() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    emailRef.current.value=emailRef.current.value+"@drivercryptridez.com"
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/login")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
        <div className="SignupPage">
          <Tittle title={'Driver Sign Up'} span={'Driver'} />
       
       <div className="signup-container">
        <div className="signup-form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
            <div className="image">
            </div>
          </div>
          <div className="body-form">
           <form onSubmit={handleSubmit}>
           {error && <Alert variant="danger">{error}</Alert>}

            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Email" ref={emailRef}/>
              <span class="input-group-text" id="basic-addon2">@drivercryptridez.com</span>
            </div>

            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="Password" ref={passwordRef} id="password" />
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="Confirm Password" ref={passwordConfirmRef} id="confirmpassword"  />
            </div>
            <button type="submit" className="btn btn-secondary btn-block">SIGN UP</button>
            <div className="message">
            <div><a href="/login">Already registered?</a></div>
            </div>
          </form>
            {/* <div className="social">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter-square"></i></a>
              <a href="#"><i className="fab fa-google"></i></a>
            </div> */}
          </div>
        </div>
       </div>  
       </div> 
    
    </>
  )
}
