import React, { Component } from 'react';
// import Identicon from 'identicon.js';

class BookRide extends Component {
  

  render() {
    let acc_verified = false;
    return (
      
      <div className="container-fluid mt-5">
        
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
            <div className="content mr-auto ml-auto">
              <p>&nbsp;</p>
              <h2>Driver registration</h2>
              <form onSubmit={(event) => {
                event.preventDefault()
                const name = this.drivername.value
                this.props.uploadImage(name)
              }} >
                {<input type='file' accept=".jpg, .jpeg, .png, .bmp, .gif" onChange={this.props.captureFile} />}
                  <div className="form-group mr-sm-2">
                    <br></br>
                      <input
                        id="drivername"
                        type="text"
                        ref={(input) => { this.drivername = input }}
                        className="form-control"
                        placeholder="Driver name..."
                        required />
                        
                  </div>
                <button type="submit" className="btn btn-primary btn-block btn-lg">Upload!</button>
              </form>
              <p>&nbsp;</p>

              
              

              
              {this.props.driver.map((img_var, key) => {
                let acc = this.props.account
                if(acc == img_var.author){
                  acc_verified =true
                }
                
              })}
              
              <hr  color='black' ></hr>

              <h3 align='center'>Ride Requests</h3>
              {this.props.users.map((users_var, key) => {
                if(acc_verified){
                  return(
                    <div className="card mb-4" key={key} >
                      <div className="card-header">
                        <img
                          className='mr-2'
                          width='30'
                          height='30'
                          src={`../img/game-dev.svg`}
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
                          const time = users_var.date
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
                }
                
              })}

<br/>
              <br/>
              



                

            </div>
          </main>
        </div>
      </div>
    );
  }
}
export default BookRide;