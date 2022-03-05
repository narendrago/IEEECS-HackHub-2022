import React, { Component } from 'react';
import Identicon from 'identicon.js';

class Requests extends Component {
  

  render() {
    return (
      
      <div className="container-fluid mt-5">
              <h3 align='center'>Ride Requests</h3>
              {this.props.users.map((users_var, key) => {
                // if(acc_verified){
                  return(
                    <div className="card mb-4" style={{ color: "#037FFF" }} key={key} >
                      <div className="card-header">
                        <img
                          className='mr-2'
                          width='30'
                          height='30'
                          src={`data:image/png;base64,${new Identicon(users_var.author, 30).toString()}`}
                        />
                        <small className="text-muted">{users_var.author}</small>
                      </div>
                      <ul id="imageList" className="list-group list-group-flush">
                        <li className="list-group-item">
                        <form onSubmit={(event) => {
                          event.preventDefault()
                          
                          const source = users_var.source
                          const destination = users_var.destination
                          const date = users_var.date
                          const time = users_var.time
                          console.log(users_var.time)
                          const rider = users_var.author
                          const amount = this.rideamount.value
                          this.props.uploadRide(source,destination,date,time,rider,amount)}} >
                          
                          <p><b>Source: </b>{users_var.source}</p>
                          <p><b>Destination: </b>{users_var.destination}</p>
                          <p><b>Date: </b>{users_var.date}</p>
                          <p><b>Time: </b>{users_var.time}</p>
                          <p><b>Amount:</b></p>
                          <input
                          id="rideamount"
                          type="number"
                          ref={(input) => { this.rideamount = input }}
                          className="form-control"
                          placeholder="Ride amount"
                          required /> 

                         
                          
                          <button type="submit" className="btn btn-success btn-x btn-grp mr-2">Accept</button>
                        
                          </form>
                          </li>
                        
                      </ul>
                      <div className="btn-group">
                        
                        <button type="submit" className="btn btn-danger btn-x btn-grp mr-2">Reject</button>
                      </div>
                    </div>
                  )
                // }
                
              })}

                <br/>
              <br/>
              



                

            </div>
        
    );
  }
}

export default Requests;