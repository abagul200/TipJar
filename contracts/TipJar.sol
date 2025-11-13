// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; 
   
contract TipJar {
    address payable public owner;
    uint256 public totalDonations;
    uint256 public donorCount;
    
    struct Donation {
        address donor;
        uint256 amount;
        uint256 timestamp;
        string message;
    }
    
    Donation[] public donations;
    mapping(address => uint256) public donorTotalContributions;
    
    event TipReceived(
        address indexed donor,
        uint256 amount,
        string message,
        uint256 timestamp
    );
    
    event Withdrawal(
        address indexed owner,
        uint256 amount,
        uint256 timestamp
    );
    
    constructor() {
        owner = payable(msg.sender);
    }
    
    // Function 1: Send a tip/donation with optional message
    function sendTip(string memory _message) public payable {
        require(msg.value > 0, "Tip amount must be greater than 0");
        
        // Track if this is a new donor
        if (donorTotalContributions[msg.sender] == 0) {
            donorCount++;
        }
        
        // Record donation
        donations.push(Donation({
            donor: msg.sender,
            amount: msg.value,
            timestamp: block.timestamp,
            message: _message
        }));
        
        // Update totals
        totalDonations += msg.value;
        donorTotalContributions[msg.sender] += msg.value;
        
        emit TipReceived(msg.sender, msg.value, _message, block.timestamp);
    }
    
    // Function 2: Withdraw accumulated tips (owner only)
    function withdraw() public {
        require(msg.sender == owner, "Only owner can withdraw");
        require(address(this).balance > 0, "No funds to withdraw");
        
        uint256 amount = address(this).balance;
        
        owner.transfer(amount);
        
        emit Withdrawal(owner, amount, block.timestamp);
    }
    
    // Withdraw specific amount (owner only)
    function withdrawAmount(uint256 _amount) public {
        require(msg.sender == owner, "Only owner can withdraw");
        require(_amount > 0, "Amount must be greater than 0");
        require(address(this).balance >= _amount, "Insufficient balance");
        
        owner.transfer(_amount);
        
        emit Withdrawal(owner, _amount, block.timestamp);
    }
    
    // Get contract balance
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
    
    // Get total number of donations
    function getDonationCount() public view returns (uint256) {
        return donations.length;
    }
    
    // Get recent donations (last N donations)
    function getRecentDonations(uint256 _count) public view returns (Donation[] memory) {
        uint256 totalDonationCount = donations.length;
        uint256 count = _count > totalDonationCount ? totalDonationCount : _count;
        
        Donation[] memory recentDonations = new Donation[](count);
        
        for (uint256 i = 0; i < count; i++) {
            recentDonations[i] = donations[totalDonationCount - count + i];
        }
        
        return recentDonations;
    }
    
    // Get specific donation by index
    function getDonation(uint256 _index) public view returns (
        address donor,
        uint256 amount,
        uint256 timestamp,
        string memory message
    ) {
        require(_index < donations.length, "Donation does not exist");
        
        Donation memory donation = donations[_index];
        return (
            donation.donor,
            donation.amount,
            donation.timestamp,
            donation.message
        );
    }
    
    // Get top donors (returns arrays of addresses and amounts)
    function getTopDonors(uint256 _limit) public view returns (
        address[] memory topDonors,
        uint256[] memory amounts
    ) {
        uint256 limit = _limit > donorCount ? donorCount : _limit;
        
        topDonors = new address[](limit);
        amounts = new uint256[](limit);
        
        // Simple implementation - for production, use more efficient sorting
        address[] memory allDonors = new address[](donorCount);
        uint256 donorIndex = 0;
        
        // Collect all unique donors
        for (uint256 i = 0; i < donations.length; i++) {
            address donor = donations[i].donor;
            bool exists = false;
            
            for (uint256 j = 0; j < donorIndex; j++) {
                if (allDonors[j] == donor) {
                    exists = true;
                    break;
                }
            }
            
            if (!exists) {
                allDonors[donorIndex] = donor;
                donorIndex++;
            }
        }
        
        // Find top donors (bubble sort for simplicity)
        for (uint256 i = 0; i < limit; i++) {
            uint256 maxAmount = 0;
            address maxDonor;
            uint256 maxIndex;
            
            for (uint256 j = 0; j < donorIndex; j++) {
                if (donorTotalContributions[allDonors[j]] > maxAmount) {
                    maxAmount = donorTotalContributions[allDonors[j]];
                    maxDonor = allDonors[j];
                    maxIndex = j;
                }
            }
            
            if (maxAmount > 0) {
                topDonors[i] = maxDonor;
                amounts[i] = maxAmount;
                allDonors[maxIndex] = address(0);
            }
        }
        
        return (topDonors, amounts);
    }
    
    // Transfer ownership
    function transferOwnership(address payable _newOwner) public {
        require(msg.sender == owner, "Only owner can transfer ownership");
        require(_newOwner != address(0), "Invalid new owner address");
        
        owner = _newOwner;
    }
}
