import React, { useState } from "react";

const ChangePassword = ({ isOpen, onClose, onPasswordChange, username }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  console.log(username);
  const isPasswordValid = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(newPassword);
  };

  const handlePasswordChange = async () => {

  };

  return (
    <div className={`${isOpen? 'block' : 'hidden'} fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-[20px] shadow-md z-50`}>
      <div className="text-center">
        <h2 className="text-lg pb-[20px]">Password Change</h2>
        <label className="block mb-[10px]">
          Old Password:
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            style={{border: '1px solid #e0e0e0',borderRadius:"5px"}}
            className="w-full p-[8px] mt-[5px] box-border"
          />
        </label>
        <label className="block mb-[10px]">
          New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={{border: '1px solid #e0e0e0',borderRadius:"5px"}}
            className="w-full p-[8px] mt-[5px] box-border"
          />
        </label>
        <label className="block mb-[10px]">
          Confirm New Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{border: '1px solid #e0e0e0',borderRadius:"5px"}}
            className="w-full p-[8px] mt-[5px] box-border"
          />
        </label>
        <button className="w-[45%] p-[10px] mt-[10px] mx-[5px] box-border" style={{fontSize:"15px", width:"150px", backgroundColor:"#6366f1", color:"white", borderRadius:"5px"}} onClick={handlePasswordChange}>Change Password</button>
        <button className="w-[45%] p-[10px] mt-[10px] mx-[5px] box-border" style={{fontSize:"15px", width:"80px", backgroundColor:"#b8182d", color:"white", borderRadius:"5px"}} onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default ChangePassword;