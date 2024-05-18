import { useState, useEffect } from "react";
import NavigationBar from "./NavBar";
import AccountDetails from "./AccountDetails";
import { useDispatch } from 'react-redux'
import { viewPage } from "./metricsSlice"
const MyAccount = () => {
  const [chosen, setChosen] = useState("");
  const dispatch = useDispatch();
  dispatch(viewPage('MyAccount'))

  const handleClick = (name) => {
    setChosen(name);
  };

  return (
    <div>
      <NavigationBar />
      <div>
        {
          <div className="flex flex-row h-full mt-[5px">
            <div className="w-[27%] flex flex-col gap-[20px]">
              <div className="flex justify-center items-center rounded-full overflow-hidden h-[250px] w-[250px]">
                <img src="./profile.png" className="circular__image" />
              </div>
              <div className="flex flex-col h-[61%] gap-[7px]">
                <div
                  className={chosen == "AccountDetails" ?
                    "font-bold shadow-md h-[50px]" :
                    "flex-row gap-[10px] flex h-[50px] items-center pl-[20px] hover:cursor-pointer hover:shadow-md hover:font-bold"}
                  onClick={() => handleClick("AccountDetails")}
                >
                  <i className="fa-solid fa-user  "></i>
                  <p className="mt-[14px]"> Account Details</p>
                </div>
                <div className={chosen == "Payment" ?
                  "font-bold shadow-md h-[50px]" :
                  "flex-row gap-[10px] flex h-[50px] items-center pl-[20px] hover:cursor-pointer hover:shadow-md hover:font-bold"}>
                  <i className="fa-solid fa-wallet"></i>
                  <p style={{ marginBottom: 0 }}>Payment and Wallet</p>
                </div>
                <div className={chosen == "HealthPackages" ?
                  "font-bold shadow-md h-[50px]" :
                  "flex-row gap-[10px] flex h-[50px] items-center pl-[20px] hover:cursor-pointer hover:shadow-md hover:font-bold"} onClick={() => handleClick("Packages")}>
                  <i className="fa-solid fa-vials"></i>
                  <p style={{ marginBottom: 0 }}> Health Packages</p>
                </div>
                <div
                  className={chosen == "FamilyMembers" ?
                    "font-bold shadow-md h-[50px]" :
                    "flex-row gap-[10px] flex h-[50px] items-center pl-[20px] hover:cursor-pointer hover:shadow-md hover:font-bold"}
                  onClick={() => handleClick("Family Members")}
                >
                  <i className="fa-solid fa-user-group"></i>
                  <p style={{ marginBottom: 0 }}> Family Members</p>
                </div>
                <div
                  className={chosen == "MedicalHistory" ?
                    "font-bold shadow-md h-[50px]" :
                    "flex-row gap-[10px] flex h-[50px] items-center pl-[20px] hover:cursor-pointer hover:shadow-md hover:font-bold"}
                  onClick={() => handleClick("Medical History")}
                >
                  <i className="fa-solid fa-file"></i>
                  <p style={{ marginBottom: 0 }}> My Medical History</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              {chosen == "AccountDetails" && <AccountDetails />}
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default MyAccount;