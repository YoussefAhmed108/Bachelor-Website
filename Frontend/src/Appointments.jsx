import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
  faEllipsis,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "./NavBar";
import AppointmentOptions from "./AppointmentOptions";
import { useDispatch } from 'react-redux'
import { viewPage } from "./metricsSlice"

const Appointments = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch()
  dispatch(viewPage('Appointments'))
  const appointments = [
    {
      id : 1,
      doctor : 'Youssef Ahmed',
      date : '2024-02-12',
      status : 'Canceled'
    },
    {
      id : 2,
      doctor : 'Youssef Ahmed',
      date : '2024-02-12',
      status : 'Upcoming'
    },
    {
      id : 3,
      doctor : 'Youssef Ahmed',
      date : '2024-01-12',
      status : 'Completed'
    }
  ]
  const [startDate, setStartDate] = useState(new Date("2023-10-01"));
  const [endDate, setEndDate] = useState(new Date("2024-10-15"));
  const [filterTextValue, setFilterTextValue] = useState("All");
  const filteredItems = appointments.filter((item) => {
    console.log(item);
    const itemDate = new Date(item.date);
    console.log(itemDate + " " + startDate);
    return itemDate >= startDate && itemDate <= endDate;
  });

  function onFilterValueChanged(event) {
    onFilterValueSelected(event.target.value);
  }

  function onFilterValueSelected(filterValue) {
    setFilterTextValue(filterValue);
  }

  const filteredAppointmentList = (data) => {
    console.log(data);
    return data.filter((item) => {
      if (filterTextValue === "Completed") {
        return item.status === "Completed";
      }
      if (filterTextValue === "Canceled") {
        return item.status === "Canceled";
      }
      if (filterTextValue === "Upcoming") {
        return item.status === "Upcoming";
      }
      if (filterTextValue === "Rescheduled") {
        return item.status === "Rescheduled";
      }
      return item;
    });
  };

  return (
    <div className="min-h-[1500px] flex flex-col bg-[#eee] pb-[50px]">
      <NavigationBar />
      <div className="flex min-h-[1500px] flex-col items-center">
        <div className="flex pt-[80px] pb-[60px] w-[950px]">
        <label className="mr-[20px] text-[black]">Status : </label>
          <select className="bg-white pl-[20px] rounded-lg cursor-pointer text-[black] " onChange={onFilterValueChanged}>
            <option style={{ cursor: "pointer",color : 'black' }}> All</option>
            <option style={{ cursor: "pointer",color : 'black' }}>Upcoming</option>
            <option style={{ cursor: "pointer",color : 'black' }}>Completed</option>
            <option style={{ cursor: "pointer",color : 'black' }}>Canceled</option>
            <option style={{ cursor: "pointer",color : 'black' }}>Rescheduled</option>
          </select>
          <div className="ml-[40px] text-[black]">
            <label>From: </label>
            <input
              type="date"
              value={startDate.toISOString().split("T")[0]}
              onChange={(e) => setStartDate(new Date(e.target.value))}
              className="ml-[10px] text-[white] outline-none rounded-lg pl-[10px] cursor-pointer"
            />
            <label className="ml-[15px] text-[black]" >To:</label>
            <input
              type="date"
              value={endDate.toISOString().split("T")[0]}
              onChange={(e) => setEndDate(new Date(e.target.value))}
              className="ml-[15px] outline-none rounded-lg text-[white] pl-[10px] cursor-pointer"
            />
          </div>
        </div>
        <div className="w-[950px] mt-[-20px] bg-white pb-[50px] rounded-[20px] flex flex-col">
          <div className="mt-[40px] mb-[20px] text-black text-2xl font-bold w-[850px] pl-[40px] mx-auto">
            Appointments
          </div>
          <div className="flex flex-row justify-start w-[850px] font-bold self-center pl-[40px] gap-[180px]">
            <div className="pb-[20px] text-lg text-base flex-1 text-left text-black" style={{ color: 'black' }}>Doctor</div>
            <div className="pb-[20px] pl-[20px] text-lg text-base flex-1 text-left text-black" style={{ color: 'black' }}>Date</div>
            <div className="pb-[20px] text-lg text-base flex-1 text-left text-black" style={{ color: 'black' }}>Status</div>
          </div>
          <div className="felx flex-col">
            {filteredAppointmentList(filteredItems).map((appointment) => {
              return (
                <div
                  key={appointment.id}
                  className="bg-[#eee] flex w-[900px] self-center mt-[10px] h-[50px] justify-start gap-[250px] ml-[20px] my-auto rounded-lg pl-[40px] text-black" >
                  <div className="my-auto">
                    {appointment.doctor}
                  </div>
                  <div className="my-auto">
                    {appointment.date}
                  </div>
                  <div className=" my-auto pb-[20px] text-lg text-base flex-1 text-left text-black">
                    {appointment.status === "Completed" && (
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="w-[20px] h-[20px] text-[#1d43d7] pt-[5px] absolute ml-[20px]"
                      />
                    )}{" "}
                    {appointment.status === "Canceled" && (
                      <FontAwesomeIcon
                        icon={faCircleXmark}
                        className="w-[20px] h-[20px] text-[#ff1414] pt-[5px] absolute ml-[20px]" />
                    )}{" "}
                    {appointment.status === "Upcoming" && (
                      <img className="w-[20px] h-[20px] absolute ml-[20px] mt-[5px]" src="./UpcomingIcon.png"/>
                    )}{" "}
                  </div>
                  <div className="mt-[15px]" style={{ position: "absolute", marginLeft: "800px" }}>
                    <AppointmentOptions status={appointment.status}/>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;