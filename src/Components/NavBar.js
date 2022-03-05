import React, { Component,useState } from 'react'
import avatar from '../img/car.png';
import {NavLink,useHistory} from 'react-router-dom';
import {useAuth}  from "../contexts/AuthContext"
import {auth} from "../firebase"
import Identicon from 'identicon.js';
import etherbal from "../img/ethereum.png"
import "../styles/navbar.css"

const NavBar=(props)=>{

    const [error, setError] = useState("")
    const { logout } = useAuth()
    const history = useHistory()
    
    async function handleLogout() {
        setError("")

        try {
        await logout()
        history.push("/")
        } catch {
        setError("Failed to log out")
        }
    }

        var user=auth.currentUser;
        if (user) {
       
          return (
            <div className="NavBar">
                       <nav className="nav">
                           <div className="profile">
                               <img src={avatar} alt=""/>
                            </div>
                            <ul className="nav-items">

                            <div
                                className="nav-item"
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <h2 className="crypttitle">Crypt Ridez &emsp;&emsp;&emsp;</h2>
                                <hr  color='black' ></hr>
                                <small className="text-secondary">
                                            <small id="account">&nbsp;</small>
                                            </small>
                                            <small className="text-secondary">
                                            </small>
                                            { props.account
                                            ? <img
                                                className='ml-2'
                                                width='30'
                                                height='30'
                                                src={`data:image/png;base64,${new Identicon(props.account, 30).toString()}`}
                                            />  
                                            : <span></span>
                                            }
                                            <small id="account2">{props.account}</small>
                                <hr  color='black' ></hr>
                                <img src={etherbal} width="30" height="30" className="d-inline-block align-top" alt="" />
                                <p>&nbsp;{props.balance}&nbsp;Ethers</p>
                            </div>
           
                                            
                             
                               <li></li>
                                        
                                        <li>  <button type="submit" className="btn btn-secondary btn-block" onClick={handleLogout}>Logout</button></li>
                           </ul>
           
                           <footer className="footer">
                               <p>
                                   @RIDE SHARING
                               </p>
                       </footer>
                       </nav>
                       
                   </div>
          )
        } else {
 
            return (
                <div className="NavBar">
                           <nav className="nav">
                               <div className="profile">
                                   <img src={avatar} alt=""/>
                                </div>
               
                               <ul className="nav-items">
                                   <li className="nav-item">
                                   <NavLink className="nav-link" to="/" exact>
                                       Home
                                   </NavLink>
                           
                                   </li>
                                 
                                   <li className="nav-item">
                                   <NavLink className="nav-link" exact to="/login">
                                       Login
                                       </NavLink>
               
               
                                       </li>
                                       <li className="nav-item">
                                       <NavLink className="nav-link" to="/ridersignup" exact>
                                           Rider Sign Up
                                           </NavLink>
               
                                       </li>
                                       <li className="nav-item">
                                       <NavLink className="nav-link" to="/driversignup" exact>
                                           Driver Sign Up
                                           </NavLink>
               
                                       </li>
                                   
                                  
                               </ul>
               
                               <footer className="footer">
                                   <p>
                                       @RIDE SHARING
                                   </p>
                           </footer>
                           </nav>
                           
                       </div>
            )
        }

    }
        
export default NavBar;
