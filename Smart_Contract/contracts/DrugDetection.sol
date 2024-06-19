//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract DrugDetection {
    address public owner;
    uint256 public drugId = 0;

    struct Manufacturer {
        bool exists;
        string name;
        string website;
        address wallet_address;
    }

    struct drugData {
        address curOwner;
        uint256 curTimestamp;
    }

    struct Drug {
        bool exists;
        uint256 id;
        string name;
        string model;
        uint256 price;
        address manufacturer;
        uint256 manufacturedTimestamp;
        address curOwner;
        drugData[] owners;
    }

    mapping(address => Manufacturer) public manufacturers;
    mapping(uint256 => Drug) public drugs;

    event ManufacturerCreated(string name, address _address);
    event DrugCreated(uint256 id, address manufacturer);
    event OwnershipUpdated(uint256 id, address newOwner);

    constructor() {
        owner = msg.sender;
    }

    function createManufacturer(
        string memory _name,
        string memory _website,
        address _address
    ) public {
        require(
            msg.sender == owner,
            "Only owner is authorised to create a manufacturer!"
        );

        Manufacturer storage m = manufacturers[_address];
        m.exists = true;
        m.name = _name;
        m.wallet_address = _address;
        m.website = _website;
        emit ManufacturerCreated(_name, _address);
    }

    function createDrug(
        string memory _name,
        string memory _model,
        uint256 _price
    ) public {
        require(
            manufacturers[msg.sender].exists == true,
            "You are not a Manufacturer!"
        );
        Drug storage d = drugs[drugId];
        d.exists = true;
        d.id = drugId;
        d.name = _name;
        d.model = _model;
        d.price = _price;
        d.manufacturedTimestamp = block.timestamp;
        d.manufacturer = msg.sender;
        d.curOwner = msg.sender;
        drugData memory data = drugData(
            msg.sender,
            d.manufacturedTimestamp
        );
        d.owners.push(data);
        drugId++;
        emit DrugCreated(drugId - 1, msg.sender);
        // emit DrugCreated(drugId , msg.sender);
    }

    function getManufacture(address _address)
        public
        view
        returns (Manufacturer memory)
    {
        return manufacturers[_address];
    }

    function getDrug(uint256 _id) public view returns (Drug memory) {
        return drugs[_id];
    }

    function updateOwnership(uint256 _id, address _newOwner) public {
        Drug storage d = drugs[_id];
        require(d.curOwner == msg.sender, "Not authorized");
        d.curOwner = _newOwner;
        drugData memory data = drugData(_newOwner, block.timestamp);
        d.owners.push(data);

        emit OwnershipUpdated(_id, _newOwner);
    }
}
