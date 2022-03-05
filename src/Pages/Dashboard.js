import React, { Component } from 'react';
import Web3 from 'web3';
import * as util from "ethereumjs-util";
import '../App.css';
import user from '../abis/user.json'
import Requests from '../Components/Requests'

import User from '../Components/User'

const crypto=require('crypto')

class Dashboard extends Component {
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3.providers.HttpProvider("127.0.0.1:9545")
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()



    this.setState({balance: balanceacc})

    const networkId = await web3.eth.net.getId()
    const networkData = user.networks[networkId]
    let reqCounts=0,imgCounts=0,rideCounts=0;

    if (networkData) {
      const user1 = new web3.eth.Contract(user.abi, networkData.address)

      this.setState({ user1 })


      const reqCountsPromise =  user1.methods.reqCount().call()


      reqCountsPromise.then((reqCount) => {
        reqCounts=reqCount
      })

      this.setState({ rideCounts })


      const imgCountsPromise =  user1.methods.imgCount().call()


      imgCountsPromise.then((imgCount) => {
        imgCounts=imgCount
      }

      )

      this.setState({ imgCounts })


      const rideCountsPromise =  user1.methods.rideCount().call()

      rideCountsPromise.then((rideCount) => {
        rideCounts=rideCount
      })


      this.setState({ reqCounts })

      for (var i = 0; i <= reqCounts; i++) {
        const users_var = await user1.methods.users(i).call()

        this.setState({
          users: [...this.state.users,users_var]
        })
      }

      //Load images

      for (var j=0; j<=imgCounts; j++){
        const img_var = await user1.methods.driver(1).call()


        this.setState({
          driver: [...this.state.driver,img_var]
        })
      }
     /** */

     for (var k=0; k<=rideCounts; k++){
      const ride_var = await user1.methods.ride(k).call()
      // console.log(ride_var);

      this.setState({
        ride: [...this.state.ride,ride_var]
      })


    }


    var message = crypto.randomBytes(20).toString('hex');
    var hash = web3.utils.sha3(message)
    const data=await web3.eth.personal.sign(hash, accounts[0])
    this.setState({
      signature: data
    })
      this.setState({
        message: message
      })
    var nonce = "\0x19Ethereum Signed Message:\n" + this.state.signature.length + this.state.signature
    nonce = util.keccak(Buffer.from(nonce, "utf-8"))
    const { v, r, s } = util.fromRpcSig(this.state.signature)
    const pubKey = util.ecrecover(util.toBuffer(nonce), v, r, s)
    const addrBuf = util.pubToAddress(pubKey)
    const addr = util.bufferToHex(addrBuf)

    var message_hash=web3.utils.sha3(this.state.message)

    var signing_address = await web3.eth.personal.ecRecover(message_hash,this.state.signature)

    this.setState({
      signing_address: signing_address
    })

    this.setState({ account: signing_address })
    var unitbal = await web3.eth.getBalance(this.state.account)
    var balanceacc = await web3.utils.fromWei(unitbal,'ether')

    this.setState({balance: balanceacc})


    } else {
      window.alert('User contract not deployed to detected network.')
    }

  }

  rideReq = (source,destination,date,time) => {
    this.setState({loading:true })
      this.state.user1.methods.rideReq(source,destination,date,time).send({from: this.state.account}).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
  }

  uploadRide = (source,destination,date,time,rider,amount) => {
    this.setState({loading:true })
      this.state.user1.methods.uploadRide(source,destination,date,time,rider,amount).send({from: this.state.account}).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
  }


  tipImageOwner = (id, tipAmount) =>{
    this.setState({ loading: true })
    this.setState({ loading: false })
    this.state.cryptridez.methods.tipImageOwner(id).send({ from: this.state.account, value: tipAmount }).on('transactionHash', (hash) => {
    })
  }

  rideAmount = (id,amount) =>{
    this.state.user1.methods.ridePayment(id).send({ from: this.state.account, value: amount }).on('transactionHash', (hash) => {
    })
  }



  constructor(props) {
    super(props)
    this.state = {
      balance:'',
      account: '',
      user1: null,
      users:[],
      driver:[],
      ride:[],
      signature:'',
      message:'',
      signing_address:'',
      loading: true,
      email:'',
      buffer:'',

      img:[]
    }
  }



  render() {

    let body

    const authorizedAccounts = ['XXXXXXX'.toLowerCase()]
    const authorizedAccounts2 = ['YYYYYY'.toLowerCase()]

    var email=sessionStorage.getItem('login')
    var domain = email.substring(email.lastIndexOf("@")+1);

        if(authorizedAccounts.includes(this.state.signing_address) && domain==="drivercryptridez.com"){

          body =
          <Requests
          account={this.state.signing_address}
          users={this.state.users}
          driver={this.state.driver}
          captureFile={this.captureFile}
          uploadImage={this.uploadImage}
          uploadRide = {this.uploadRide}
        />
        }
        else if(authorizedAccounts2.includes(this.state.signing_address) && domain==="ridercryptridez.com"){
          body =
          <User
          account = {this.state.signing_address}
          rideReq = {this.rideReq}
          users={this.state.users}
          uploadRide = {this.uploadRide}
          ride = {this.state.ride}
          rideAmount = {this.rideAmount}
          />
        }


      this.props.sendValuestoApp(this.state?.signing_address,this.state?.balance)

    return (
      <div>
        { body }
      </div>
    );
  }
}

export default Dashboard;
