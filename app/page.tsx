'use client'
import React, { useState } from "react";
import {WalletButton} from "@vechain/dapp-kit-react"


const App: React.FC = () => {
  // Local states just to capture input values
  const [tipAmount, setTipAmount] = useState("");
  const [tipMessage, setTipMessage] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [recentDonationCount, setRecentDonationCount] = useState("");
  const [donationIndex, setDonationIndex] = useState("");
  const [topDonorLimit, setTopDonorLimit] = useState("");
  const [newOwner, setNewOwner] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-800 space-y-8">
      <h1 className="text-3xl font-bold">Tip Jar Frontend</h1>
      <WalletButton />
      {/* Send Tip Section */}
      <div className="p-4 bg-white rounded-xl shadow-md w-full max-w-md space-y-3">
        <h2 className="text-xl font-semibold">Send Tip</h2>
        <input
          type="number"
          placeholder="Amount (ETH)"
          value={tipAmount}
          onChange={(e) => setTipAmount(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Message"
          value={tipMessage}
          onChange={(e) => setTipMessage(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">
          Send Tip
        </button>
      </div>

      {/* Withdraw Section */}
      <div className="p-4 bg-white rounded-xl shadow-md w-full max-w-md space-y-3">
        <h2 className="text-xl font-semibold">Withdraw</h2>
        <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Withdraw All
        </button>
        <input
          type="number"
          placeholder="Withdraw Specific Amount"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Withdraw Amount
        </button>
      </div>

      {/* Read Functions */}
      <div className="p-4 bg-white rounded-xl shadow-md w-full max-w-md space-y-3">
        <h2 className="text-xl font-semibold">View Data</h2>
        <button className="w-full p-2 bg-purple-500 text-white rounded hover:bg-purple-600">
          Get Contract Balance
        </button>
        <button className="w-full p-2 bg-purple-500 text-white rounded hover:bg-purple-600">
          Get Total Donation Count
        </button>
        <input
          type="number"
          placeholder="Recent Donation Count"
          value={recentDonationCount}
          onChange={(e) => setRecentDonationCount(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button className="w-full p-2 bg-purple-500 text-white rounded hover:bg-purple-600">
          Get Recent Donations
        </button>
        <input
          type="number"
          placeholder="Donation Index"
          value={donationIndex}
          onChange={(e) => setDonationIndex(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button className="w-full p-2 bg-purple-500 text-white rounded hover:bg-purple-600">
          Get Donation by Index
        </button>
        <input
          type="number"
          placeholder="Top Donors Limit"
          value={topDonorLimit}
          onChange={(e) => setTopDonorLimit(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button className="w-full p-2 bg-purple-500 text-white rounded hover:bg-purple-600">
          Get Top Donors
        </button>
      </div>

      {/* Transfer Ownership */}
      <div className="p-4 bg-white rounded-xl shadow-md w-full max-w-md space-y-3">
        <h2 className="text-xl font-semibold">Ownership</h2>
        <input
          type="text"
          placeholder="New Owner Address"
          value={newOwner}
          onChange={(e) => setNewOwner(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600">
          Transfer Ownership
        </button>
      </div>
    </div>
  );
};

export default App;
