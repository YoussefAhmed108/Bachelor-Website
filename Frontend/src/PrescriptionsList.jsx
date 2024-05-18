import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Prescription from "./Prescription";
import NavigationBar from "./NavBar";

const PrescriptionsTable = () => {
  const [index, setIndex] = useState(0);
  const prescriptions = [
    {
      id : '1',
      name : 'Youssef Ahmed',
      status : 'Unfilled',
      prescription : [
        {
          name: 'Panadol',
          dosage : '2 Times a week',
          quantity : 3
        }
      ],
      date : '2024-02-13'
    }
  ]
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date("2023-10-01"));
  const [endDate, setEndDate] = useState(new Date("2024-10-15"));
  const [filterTextValue, setFilterTextValue] = useState("All");
  const [doctor, setDoctor] = useState("");
  const filteredItems = prescriptions.filter((item) => {
    const itemDate = new Date(item.date);
    if (doctor === "") {
      return itemDate >= startDate && itemDate <= endDate;
    } else {
      return (
        itemDate >= startDate &&
        itemDate <= endDate &&
        item.name.toLowerCase().includes(doctor.toLowerCase())
      );
    }
  });

  function onFilterValueChanged(event) {
    onFilterValueSelected(event.target.value);
  }

  function onFilterValueSelected(filterValue) {
    setFilterTextValue(filterValue);
  }

  const filteredPrescriptionsList = (data) => {
    const filtered = data.filter((item) => {
      if (filterTextValue === "Filled") {
        return item.status === "Filled";
      }
      if (filterTextValue === "Unfilled") {
        return item.status === "Unfilled";
      }
      return true;
    });
    return filtered;
  };

  const handleViewPDF = (input) => {
    navigate(`./pdf`);
  };

  return (
    <div style={{ backgroundColor:"white", minHeight:'1000px'}}>
      <NavigationBar/>
      <div className="flex flex-col items-center">
        <div className = "flex flex-row items-center pt-[30px] w-[980px] justify-between text-[black]">
          <select className="bg-[#eee] pl-[20px] rounded-lg curosr-pointer" onChange={onFilterValueChanged}>
            <option style={{ cursor: "pointer" }}> All</option>
            <option style={{ cursor: "pointer" }}>Filled</option>
            <option style={{ cursor: "pointer" }}>Unfilled</option>
          </select>
          <div
          >
            <label>From: </label>
            <input
              type="date"
              value={startDate.toISOString().split("T")[0]}
              onChange={(e) => setStartDate(new Date(e.target.value))}
              className="outline-none rounded-lg ml-[15px] pl-[10px] curosr-pointer bg-[#eee]"/>
            <label style={{ marginLeft: "15px" }}>To:</label>
            <input
              type="date"
              value={endDate.toISOString().split("T")[0]}
              onChange={(e) => setEndDate(new Date(e.target.value))}
              className="ml-[15px] outline-none rounded-lg pl-[10px] curosr-pointer bg-[#eee]"/>
          </div>
          <input
            className="outline-none rounded-lg p-[5px] w-[200px] bg-[#eee]"
            type="text"
            onChange={(e) => setDoctor(e.target.value)}
            placeholder="Search..."
          ></input>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="outline-none rounded-lg absolute ml-[950px]"
            style={{
              color: "#7d7878",
            }}
          />
        </div>

        <div
          className="flex flex-col gap-[20px] justify-center align-center mt-[20px]"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            marginTop:"20px"
          }}
        >
          {filteredPrescriptionsList(filteredItems).map((prescription, idx) => (
            <Prescription
              doctor={prescription.name}
              status={prescription.status}
              prescriptions={prescription.prescription}
              number={index + idx + 1}
              date={prescription.date}
              id={prescription._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrescriptionsTable;