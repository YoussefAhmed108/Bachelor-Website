import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Prescription = ({ doctor, status, date, prescriptions, number, id }) => {
  const [expanded, setExpanded] = useState(false);
  const dateObject = new Date(date);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const headStyle = {
    paddingBottom: "20px",
    fontSize: "18px",
    flex: "1",
    textAlign: "start",
    color: "black",
  };
  return (
    <div className="bg-[#eee] rounded-lg">
      <ToastContainer />
      <div className="transition-height duration-600 ease flex flex-row rounded-lg bg-[#001F3F] h-auto"

      >
        <div>
          <div className="px-[20px] pl-[20px] w-[900px] flex flex-col  text-left ">
            <h2 className="p-0">Prescription #{number}</h2>
            <p>By : {doctor}</p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p className="ml-auto mr-[50px] mt-[-40px]">
                {" "}
                Date Issued : {dateObject.toISOString().split("T")[0]}
              </p>
            </div>
          </div>

          {expanded && (
            <div className="flex flex-col p-[10px] pl-[70px]">
              <hr />
              {prescriptions.length == 0 ? (
                <div>
                  <p> No Medicines in this Prescription</p>
                </div>
              ) : (
                <div>
                  <div className="w-[840px] pb-[50px] rounded-lg flex flex-col">
                    <div className="flex w-[840px] font-bold bg-[#8284f7] rounded-lg pl-[40px] pt-[5px] mb-[10px]">
                      <div className="pb-5 text-lg flex-1 text-left text-black">
                        Drug
                      </div>
                      <div className="pb-[20px] text-lg flex-1 text-left text-black">
                        Dosage
                      </div>
                      <div className="pb-[20px] text-lg flex-1 text-left text-black">
                        Quantity
                      </div>
                      <div className="pb-[20px] text-lg flex-1 text-left text-black"></div>
                      <div className="w-[100px] h-[20px] text-xs bg-white ml-auto cursor-pointer flex flex-col justify-center mt-[10px]">
                        <button>Download as PDF </button>
                      </div>
                    </div>
                    <div className="flex flex-col mt-[10px]">
                      {prescriptions.map((pre) => {
                        return (
                          <div
                            key={pre.id}
                            className="bg-[#fff] flex w-[840px] pt-[15px] justify-evenly rounded-lg pl-[40px] text-black">
                            <div className="pb-5 text-lg flex-1 text-left text-black">
                              {pre.name}
                            </div>
                            <div className="pb-5 text-lg flex-1 text-left text-black">
                              {pre.dosage}
                            </div>
                            <div className="pb-5 text-lg flex-1 text-left text-black">
                              {pre.quantity}
                            </div>

                            <div className="pb-5 text-lg flex-1 text-left text-black">
                              <img
                                style={{ width: "100px", height: "100px" }}
                                src="./medicine.jpeg"
                              />
                            </div>

                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <button
            style={{
              marginRight: "20px",
              marginTop: "20px",
              padding: "5px",
              borderRadius: "5px",
              backgroundColor: "#6366f1",
              color: "white",
              textAlign: "center",
            }}
            onClick={toggleExpand}
          >
            {expanded ? "Collapse" : "Expand"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prescription;