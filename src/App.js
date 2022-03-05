import './App.scss'

import React, {useState} from 'react'
import {Switch,Route, BrowserRouter as Router} from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import NavBar from './Components/NavBar';
import PrivateRoute from './Components/PrivateRoute';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import DriverSignupPage from './Pages/DriverSignupPage';
import RiderSignupPage from './Pages/RiderSignupPage';
import Dashboard from './Pages/Dashboard';

function App() {


  const [signing_app,setSigning_app] = useState('')
  const [balance_app,setBalance_app] = useState('')

  function passValues(signing,balance)
  {
      setSigning_app(signing)
      setBalance_app(balance)
  }


  return (
    <div className="App">
    <Router>
        <div className="sidebar">
              <NavBar account={signing_app} balance={balance_app}  />
        </div>
        <div className="nav-btn">
          <div className="lines-1"></div>
          <div className="lines-2"></div>
          <div className="lines-3"></div>
        </div>
    <div className="main-content">
        <div className="content">
                <AuthProvider>
                      <Switch>
                        
                      <PrivateRoute path="/dashboard" exact>
                          <Dashboard sendValuestoApp={passValues} />
                        </PrivateRoute>

                        <Route path="/" exact>
                          <HomePage />
                        </Route>
                        <Route path="/login" exact>
                          <LoginPage />
                        </Route>
                        <Route path="/driversignup" exact>
                          <DriverSignupPage />
                        </Route>
                        <Route path="/ridersignup" exact>
                          <RiderSignupPage />
                        </Route>
                      </Switch>
                </AuthProvider>
        </div>
            
      </div>
       </Router> 
       </div>
  )
}

export default App

































































































































// import {Switch,Route, BrowserRouter as Router} from 'react-router-dom';

// import React, { Component, Fragment } from 'react';
// import { AuthProvider } from './contexts/AuthContext';
// import NavBar from './Components/NavBar';
// import PrivateRoute from './Components/PrivateRoute';
// import HomePage from './Pages/HomePage';
// import LoginPage from './Pages/LoginPage';
// import DriverSignupPage from './Pages/DriverSignupPage';
// import RiderSignupPage from './Pages/RiderSignupPage';
// import Dashboard from './Pages/Dashboard';
// import AuthSideBar from './Components/AuthSideBar';






// class App extends Component{

  



//     constructor(props) {
//       super(props)
//         this.state={
//             signing_app_address:'',
//             balance_app:'',
//         }
       
//       }
//       // getValuesfromApp = (signing,balance ) =>{
//       //   console.log('HELLO')
//       //   this.setState({signing_app_address:signing})
//       //   this.setState({balance_app:balance})
//       //   console.log(signing,balance)
//       // }
     
//       getValuesfromApp = (signing,balance ) =>{
//         console.log('HELLO')
//         // this.setState({signing_app_address:signing})
//         // this.setState({balance_app:balance})
//         // console.log(signing,balance)
//       }


//       hi = () =>{
//         console.log('HIIIIIIIIIIIIIIIIIIIII')
//       }
//    render(){
//     //  let body;
//     // console.log(window.location.pathname)
    
//     //  let HideHeader = window.location.pathname == "/dashboard" ? <AuthSideBar/> : <NavBar/>
//      return ( 
          // <div className="App">
          //   <Router>
          //       <div className="sidebar nav-toggle">
          //           {/* {console.log(sessionStorage.getItem('login'))}
          //           {sessionStorage.getItem('login') ? <AuthSideBar/> :  <NavBar />} */}
          //             {/* {if(sessionStorage)} */}
          //             <NavBar balance={this.state.balance_app} account={this.state.signing_app_address}  />
          //       </div>
          //       <div className="nav-btn" onClick={()=>this.setState({show: !this.state.show})}>
          //         <div className="lines-1"></div>
          //         <div className="lines-2"></div>
          //         <div className="lines-3"></div>
          //       </div>
          //   <div className="main-content">
          //       <div className="content">
          //               <AuthProvider>
          //                     <Switch>
                                
          //                     <PrivateRoute path="/dashboard" exact>
          //                         <Dashboard sendValuestoApp={this.getValuesfromApp}  />
          //                       </PrivateRoute>

          //                       <Route path="/" exact>
          //                         <HomePage />
          //                       </Route>
          //                       <Route path="/login" exact>
          //                         <LoginPage />
          //                       </Route>
          //                       <Route path="/driversignup" exact>
          //                         <DriverSignupPage />
          //                       </Route>
          //                       <Route path="/ridersignup" exact>
          //                         <RiderSignupPage />
          //                       </Route>
          //                     </Switch>
          //               </AuthProvider>
          //       </div>
                    
          //     </div>
          //      </Router> 
          //      </div>
//         );
//       }
      
     
//    }

// export default App;



