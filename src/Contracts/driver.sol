pragma solidity ^0.5.0;

contract DriverContract {
  // Code goes here... 

  string public name="Driver's Contract";

  uint public imgCount = 0;
  mapping (uint => Driver) public driver;

  struct Driver{
    uint id;
    string hash;
    string name;
    uint tipAmount;
    address payable author;
  }

  event DiverCreated(
    uint id,
    string hash,
    string name,
    uint tipAmount,
    address payable author
  );

  function uploadImg(string memory _imgHash, string memory _name) public {

    require(bytes(_imgHash).length > 0);

    require(bytes(name).length > 0);

    require(msg.sender!=address(0x0));

    imgCount++;

    driver[imgCount] = Driver(imgCount, _imgHash, _name, 0 , msg.sender);

    emit DiverCreated(imgCount, _imgHash, _name, 0 , msg.sender);
  }
/*
  event ImageTipped(
    uint id,
    string hash,
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
  }
*/
}