import React, { Component } from 'react';
import Identicon from 'identicon.js';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



class User extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    
    return (
      <div role="User" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
        <br></br>
        <br></br>
        <br></br>
        
        <h1>Add your Riderequest here</h1>
        <form onSubmit={(event) => {
                event.preventDefault()
                const source = this.userSource.value
                const destination = this.userDestination.value
                const date = this.rideDate.value
                const time = this.rideTime.value
                this.props.rideReq(source,destination,date,time)
              }} >
                {/*<input type='file' accept=".jpg, .jpeg, .png, .bmp, .gif" onChange={this.props.captureFile} />*/}
                  <div className="form-group mr-sm-2">
                    <br></br>
                      <input
                        id="userSource"
                        type="text"
                        ref={(input) => { this.userSource = input }}
                        className="form-control"
                        placeholder="User source..."
                        required />

                      <br></br>

                        <input
                            id="userDestination"
                            type="text"
                            ref={(input) => { this.userDestination = input }}
                            className="form-control"
                            placeholder="User Destination..."
                            required />
                        <br/>
                        <input
                        id="rideDate"
                        type="date"
                        ref={(input) => {this.rideDate = input}}
                        className = "form-control"
                        required/>
                        <br/>
                        <input
                        id="rideTime"
                        type="time"
                        ref={(input) => {this.rideTime = input}}
                        className = "form-control"
                        required/>

                  </div>
                <button type="submit" className="btn btn-primary btn-block btn-lg">Upload!</button>
              </form>
              <br></br>
              <hr></hr>

              {this.props.ride.map((ride_var, key) => {
                let acc = this.props.account
                let accs = acc.toString()
                if(accs.toLowerCase() == ride_var.rider.toLowerCase()){
                  return(
                  
                    <div className="card mb-4" style={{ color: "#037FFF" }}  key={key} >
                      <div className="card-header">
                        <img
                          className='mr-2'
                          width='30'
                          height='30'
                          src={`data:image/png;base64,${new Identicon(ride_var.author, 30).toString()}`}
                        />
                        <small className="text-muted"><b>Driver:&emsp;</b>{ride_var.author}</small>
                      </div>
                      <ul id="imageList" className="list-group list-group-flush">
                        <li className="list-group-item">
                        <form onSubmit={(event) => {
                          event.preventDefault()                        
                          let fare = ride_var.rideamount.toString()
                          let amount = window.web3.utils.toWei(fare, 'Ether')
                          this.props.rideAmount(ride_var.author,amount)
                          
                        }}
                        >
                            <p>Source: {ride_var.rsource}</p>
                            <p>Destination: {ride_var.rdestination}</p>
                            <p>Date: {ride_var.rdate}</p>
                            <p>Time: {ride_var.rtime}</p>
                            <p>Rider: {ride_var.rider}</p>
                            <p>Amount: {ride_var.rideamount.toString()} Ethers</p>
                            <button type="submit" className="btn btn-success btn-x btn-grp ">Pay</button>
                            </form>
  
                        </li>
                        
                      </ul>
                      
                    </div>
                    
                  )
                }
                
              })}

              
                
                  {/* <Map google={this.props.google} onClick={this.onMapClicked}>
                    <Marker onClick={this.onMarkerClick}
                      name={'Current location'} />
 
                      <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                          <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                          </div>
                      </InfoWindow>
                  </Map> */}
                
              
      </div>
      
    );
  }
}



// export default Maps;
//export default userclass;

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDDsCWBRT7TbgBrNZ3rwGV5sojwLBllPic')
})(User)