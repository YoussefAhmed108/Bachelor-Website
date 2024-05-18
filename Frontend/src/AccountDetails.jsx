
import ChangePassword from "./ChangePassword";
import { useState } from "react";
const AccountDetails = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const user = {
        name: 'Youssef Ahmed',
        username: 'YoussefAhmed2',
        email: 'youssef.ahmed108@gmail.com',
        number: '01224412001',
        dateOfBirth: '2002-08-10',
        gender: 'Male',
        emergencyContact: {
            emergencyContactName: 'Laila Gohar',
            emergencyContactNumber: '015529019902'
        }
    }

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    console.log(user);
    const dateObject = new Date(user.dateOfBirth);

    return (
        <div>
            <div className="flex flex-col p-[80px] w-[950px]">
                <div className="flex justify-between text-lg my-[10px] text-[#403f3d]">
                    <div className="px-[15px] text-[grey]"> Name </div>
                    <div className="px-[15px]">{user.name}</div>
                </div>
                <div
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, transparent, #ccc, transparent)",
                        backgroundSize: "100% 1px",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "20px",
                        color: "#403f3d",
                    }}
                >
                    {" "}
                    <div className="px-[15px] text-[grey]" style={{ color: "grey", paddingTop: "15px", paddingBottom: "15px" }}>Username</div>
                    <div className="px-[15px]" style={{ paddingTop: "15px", paddingBottom: "15px" }}> {user.username}</div>
                </div>
                <div
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, transparent, #ccc, transparent)",
                        backgroundSize: "100% 1px",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "20px",
                        color: "#403f3d",
                    }}
                    
                >
                    <div className="px-[15px] text-[grey]"> Email</div>
                    <div className="px-[15px]">{user.email}</div>
                </div>
                <div
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, transparent, #ccc, transparent)",
                        backgroundSize: "100% 1px",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "20px",
                        color: "#403f3d",
                    }}
                >
                    <div className="px-[15px] text-[grey]"> Number</div>
                    <div className="px-[15px]"> {user.number}</div>
                </div>
                <div
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, transparent, #ccc, transparent)",
                        backgroundSize: "100% 1px",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "20px",
                        color: "#403f3d",
                    }}
                >
                    <div className="px-[15px] text-[grey]">
                        {" "}
                        Date of Birth
                    </div>
                    <div className="px-[15px]">{dateObject.toISOString().split('T')[0]}</div>
                </div>
                <div
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, transparent, #ccc, transparent)",
                        backgroundSize: "100% 1px",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "20px",
                        color: "#403f3d",
                    }}
                >
                    {" "}
                    <div className="px-[15px] text-[grey]">Gender</div>
                    <div className="px-[15px]"> {user.gender}</div>
                </div>
                <div
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, transparent, #ccc, transparent)",
                        backgroundSize: "100% 1px",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "20px",
                        color: "#403f3d",
                    }}
                >
                    <div className="px-[15px] text-[grey]">
                        {" "}
                        Emergency Contact Name
                    </div>
                    <div className="px-[15px]">
                        {" "}
                        {user.emergencyContact.emergencyContactName}
                    </div>
                </div>
                <div
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, transparent, #ccc, transparent)",
                        backgroundSize: "100% 1px",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "20px",
                        color: "#403f3d",
                    }}
                >
                    <div className="px-[15px] text-[grey]">
                        {" "}
                        Emergency Contact No.
                    </div>
                    <div className="px-[15px]">
                        {" "}
                        {user.emergencyContact.emergencyContactNumber}
                    </div>
                </div><div
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, transparent, #ccc, transparent)",
                        backgroundSize: "100% 1px",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "20px",
                        color: "#fff",
                    }}
                >
                    <div className="px-[15px] text-[grey]">
                        {" "}
                        Password
                    </div>
                    <div className="px-[15px]">
                        <div>
                            <div className="flex flex-row">
                                <button className="bg-[#6366f1] p-[10px] rounded-lg text-lg" onClick={() => setIsPopupOpen(true)}>Change Password</button>
                            </div>
                            <ChangePassword
                                isOpen={isPopupOpen}
                                onClose={handleClosePopup}
                                username={user.username}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AccountDetails;
