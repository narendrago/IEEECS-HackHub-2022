pragma solidity ^0.5.0;

contract user{
  //user Code goes here... 

  string public name="User's Contract";

  uint public reqCount = 0;
  mapping (uint => User) public users;

  struct User{
    uint id;    
    string source;
    string destination;
    uint tipAmount;
    string date;
    string time;
    address payable author;
  }
    
  event UserCreated(
    uint id,
    string source,
    string destination,
    uint tipAmount,
    string date,
    string time,
    address payable author
  );

  function rideReq(string memory _source, string memory _destination, string memory _date, string memory _time) public {

    require(bytes(_source).length > 0);

    require(bytes(_destination).length > 0);

    require(msg.sender!=address(0x0));

    reqCount++;

    users[reqCount] = User(reqCount, _source, _destination, 0 ,_date,_time, msg.sender);

    emit UserCreated(reqCount, _source, _destination, 0 ,_date,_time , msg.sender);
  }
/*
  event ImageTipped(
    uint id,
    string hash
    string description,
    uint tipAmount,
    address payable author
  );

  function tipImageOwner(uint _id) public payable {
    // Make sure the id is valid
    require(_id > 0 && _id <= imageCount);
    // Fetch the image
    Image memory _image = images[_id];
    // Fetch the author
    address payable _author = _image.author;
    // Pay the author by sending them Ether
    address(_author).transfer(msg.value);
    // Increment the tip amount
    _image.tipAmount = _image.tipAmount + msg.value;
    // Update the image
    images[_id] = _image;
    // Trigger an event
    emit ImageTipped(_id, _image.hash, _image.description, _image.tipAmount, _author);
  }*/

  //Driver code goes here
  uint public imgCount = 0;
  mapping (uint => Driver) public driver;

  struct Driver{
    uint did;
    string hash;
    string driver_name;
    uint drivertipAmount;
    bool verify;
    string verified;    
    address payable author;
  } 

  event DiverCreated(
    uint did,
    string hash,
    string driver_name,
    uint drivertipAmount,
    string verified,
    address payable author
  );

  function uploadImg(string memory _imgHash, string memory _name,bool _verified) public {

    require(bytes(_imgHash).length > 0);

    require(bytes(_name).length > 0);

    require(msg.sender!=address(0x0));
    string memory veri_fy;
    if(_verified){
       veri_fy = "Profile is verified";
    }
    else{
      veri_fy = "Profile is not verified";
    }

    imgCount++;

    driver[imgCount] = Driver(imgCount, _imgHash, _name, 0 ,_verified,veri_fy, msg.sender);

    emit DiverCreated(imgCount, _imgHash, _name, 0 ,veri_fy, msg.sender);
  }

  function verifyDriver(uint _id, string memory hashs,string memory dname,address payable author) public {
/*
    Driver memory _driver = driver[_id];

    _driver.verify = _verification;
    _driver.driver_name = "Random Name";

    if(_verification==true){
      _driver.verified = "Profile is verified";

    }*/

    driver[_id] = Driver(_id,hashs, dname, 0,true ,"Profile is verified",author);

    //emit DiverCreated(_id, _driver.hash, _driver.driver_name, 0 ,_driver.verified, _driver.author);

  }

  //Ride code goes here
  uint public rideCount = 0;
  mapping (uint => Ride) public ride;

  struct Ride{
    uint rid;
    string rsource;
    string rdestination;
    string rdate;
    string rtime;
    string rider;
    uint rideamount;
    address payable author;
    
  } 

  event RideCreated(
     uint rid,
    string rsource,
    string rdestination,
    string rdate,
    string rtime,
    string rider,
    uint rideamount,
    address payable author
  );

  function uploadRide(string memory _rsource, string memory _rdestination, string memory _rdate, string memory _rtime, string memory _ride, uint amount) public {

    

    rideCount++;


    ride[rideCount] = Ride(rideCount, _rsource, _rdestination, _rdate ,_rtime,_ride,amount,msg.sender);

    emit RideCreated(rideCount, _rsource, _rdestination, _rdate ,_rtime,_ride,amount,msg.sender);
  }

  event rideAmount(
    uint id,
    uint amount,
    address payable author
  );

  function ridePayment(address payable _author) public payable{
    

    address(_author).transfer(msg.value);

    //emit rideAmount(pid,0,_author);

  }




}