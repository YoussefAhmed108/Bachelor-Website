import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavigationBar from "./NavBar";
import { useDispatch } from 'react-redux'
import { doneSuccessfulAction, viewPage } from "./metricsSlice"
import Timings from "./Timings";

const DoctorPage = () => {
    const { username } = useParams();
    const dispatch = useDispatch()
    dispatch(viewPage('DoctorPage'))

    const [doctor, setDoctor] = useState({
        name: 'Youssef Ahmed',
        speciality: 'Cardio',
        affiliation: 'El Salam'
    });

   
    return (
        <div>
            
            <NavigationBar />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#eee",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className="medicine-image" style={{ display: "flex" }}>
                        <img
                            style={{
                                width: "250px",
                                height: "230px",
                                backgroundColor: "white",
                                borderRadius: '10px',
                                margin: "20px",
                            }}
                            src={'./doctor1.jpeg'}
                            alt={doctor.name}
                        />
                        <div style={{ margin: "10px" }}>
                            <div>
                                <p
                                    style={{
                                        fontSize: "40px",
                                        fontWeight: "bolder",
                                        color: "black",
                                    }}
                                >
                                    {doctor.name}
                                </p>
                            </div>
                            <div
                                style={{ marginTop: "0px", fontSize: "19px", color: "grey" }}
                            >
                                <p>Specialialty: {doctor.speciality}</p>

                                <p style={{ marginTop: "-15px" }}>
                                    Affiliation : {doctor.affiliation}
                                </p>
                                <p>
                                    {" "}
                                    <button
                                        style={{
                                            border: "1px solid",
                                            padding: "8px 16px",
                                            marginTop: "7px",
                                            backgroundColor: "darkviolet",
                                            color: "white", // Other styles, like padding
                                            borderRadius: "4px", // Border radius for rounded corners (optional)
                                        }}
                                    >
                                        View Educational Background
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-black">Note : To reserve a slot click on the desired timing</p>
                    </div>
                    <div
                        style={{
                            paddingBottom: "50px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            width: "1000px",
                            borderRadius: "15px",
                            backgroundColor: "white",
                            alignSelf: "center",
                        }}
                    >
                        <p style={{ fontSize: "30px", margin: "40px", color: "black", marginLeft: '70px' }}>
                            <b>Available Appointments</b>
                        </p>
                        <div style={{ paddingLeft: "50px" }}>
                            <div
                                style={{
                                    display: "flex",
                                    marginLeft: "20px",
                                    borderRadius: "10px",
                                    width: "800px",
                                    marginBottom: "10px",
                                    backgroundColor: "#eee",
                                    padding: "10px",
                                }}
                            >
                                <p className="font-bold text-black" style={{ fontSize: "w0px" }}>
                                    <b>Sunday</b>
                                </p>

                                <div style={{ marginLeft: "20px", width: "100%" }}>
                                    <Timings timings={[{timing:'12:00',available:true}]}/>
                                </div>

                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    marginLeft: "20px",
                                    marginBottom: "10px",
                                    backgroundColor: "#eee",
                                    borderRadius: "10px",
                                    padding: "10px",
                                    width: "800px",
                                }}
                            >
                                <p className="font-bold text-black" style={{ fontsize: "20px" }}>
                                    <b>Monday</b>
                                </p>
                                
                                <div style={{ display: "flex", marginLeft: "20px", }}>

                                </div>
                                
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    marginLeft: "20px",
                                    marginBottom: "10px",
                                    backgroundColor: "#eee",
                                    borderRadius: "10px",
                                    padding: "10px",
                                    width: "800px",
                                }}
                            >
                                <p className="font-bold text-black" style={{ fontsize: "20px" }}>
                                    <b>Tuesday</b>
                                </p>
                                
                                <div style={{ display: "flex", marginLeft: "20px" }}>

                                </div>
                                
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    marginLeft: "20px",
                                    marginBottom: "10px",
                                    backgroundColor: "#eee",
                                    borderRadius: "10px",
                                    padding: "10px",
                                    width: "800px",
                                }}
                            >
                                <p className="font-bold text-black" style={{ fontsize: "20px" }}>
                                    <b>Wednesday</b>
                                </p>
                                
                                <div style={{ display: "flex", marginLeft: "20px" }}>

                                </div>
                                
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    marginLeft: "20px",
                                    marginBottom: "10px",
                                    backgroundColor: "#eee",
                                    borderRadius: "10px",
                                    padding: "10px",
                                    width: "800px",
                                }}
                            >
                                <p className="font-bold text-black" style={{ fontsize: "20px" }}>
                                    <b>Thursday</b>
                                </p>
                                
                                <div style={{ marginLeft: "20px" }}>

                                </div>
                                
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    marginLeft: "20px",
                                    marginBottom: "10px",
                                    backgroundColor: "#eee",
                                    borderRadius: "10px",
                                    padding: "10px",
                                    width: "800px",
                                }}
                            >
                                <p className="font-bold text-black" style={{ fontsize: "20px" }}>
                                    <b>Friday</b>
                                </p>
                                
                                <div style={{ marginLeft: "20px" }}>

                                </div>
                                
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    marginLeft: "20px",
                                    marginBottom: "10px",
                                    backgroundColor: "#eee",
                                    borderRadius: "10px",
                                    padding: "10px",
                                    width: "800px",
                                }}
                            >
                                <p className="font-bold text-black" style={{ fontsize: "20px" }}>
                                    <b>Saturday</b>
                                </p>
                                
                                <div style={{ marginLeft: "20px" }}>

                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorPage;