import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faXmark } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";


const AppointmentOptions = ({ username, status, appointment }) => {
    console.log(appointment);
    const [dots, setDots] = useState(false);
    const [newDate, setNewDate] = useState("");
    const [rescheduled, setRescheduled] = useState(false);
    const [doctor, setDoctor] = useState({});

    const openDots = () => {
        setDots(!dots);
        console.log(status);
        if (!dots) {
            setNewDate(""); // Reset new date input when opening/closing options
        }
    };

    const clickReschedule = () => {
        setRescheduled(!rescheduled);
    }

    const modalStyle = {
        content: {
            border: 'none',
            borderRadius: '8px',
            padding: '20px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '75%', // Adjust the width as needed
            height: '100%', // Adjust the height as needed
            maxHeight: '80%', // Set a maximum height if needed
            overflow: 'auto', // Add overflow for content that exceeds the modal height
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1000,
        },
    };
    const closeButtonStyle = {
        background: 'grey',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '10px 20px',
        margin: '10px',
        marginLeft: '800px',
        cursor: 'pointer',
        fontSize: '16px',
    };

    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    const [showReschedule, setShowReschedule] = useState(false);
    const openReschedule = () => {
        setShowReschedule(true);
    };

    const closeReschedule = () => {
        setShowReschedule(false);
    };
    return (
        <div>
            {" "}
            {status != "Canceled" && (
                <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    style={{ color: "#001F3F", cursor: "pointer" }}
                    onClick={openDots}
                />
            )}
            {dots == true && (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "white",
                        color: "grey",
                        fontSize: "15px",
                        position: "absolute",
                        marginLeft: "10px",
                        padding: "3px",
                        borderRadius: "5px",
                        marginTop: "-20px",
                        boxShadow: "0px 2px 5px #a4a7ad",
                    }}
                >
                    {(status === "Upcoming" || status === "rescheduled") && (
                        <div>
                            <div className="p-[10px] w-[120px] text-left cursor-pointer hover:bg-[#add8e6]">
                                Cancel
                            </div>
                            <div className="p-[10px] text-left cursor-pointer hover:bg-[#add8e6]">
                                Reschedule
                            </div>
                        </div>
                    )}
                    {status === "Completed" && (
                        <div className="appointmentOption">
                            <div onClick={openModal} className="p-[10px] text-left cursor-pointer hover:bg-[#add8e6]">
                                Followup
                            </div>
                            <Modal
                                isOpen={showModal}
                                onRequestClose={closeModal}
                                style={modalStyle}
                            >
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
                                            <p style={{ fontSize: "19px" }}>
                                                <b>Sunday</b>
                                            </p>
                                            {doctor.schedule && (
                                                <div style={{ marginLeft: "20px", width: "100%" }}>

                                                </div>
                                            )}
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
                                            <p style={{ fontsize: "20px" }}>
                                                <b>Monday</b>
                                            </p>
                                            {doctor.schedule && (
                                                <div style={{ display: "flex", marginLeft: "20px", }}>

                                                </div>
                                            )}
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
                                            <p style={{ fontsize: "20px" }}>
                                                <b>Tuesday</b>
                                            </p>
                                            {doctor.schedule && (
                                                <div style={{ display: "flex", marginLeft: "20px" }}>

                                                </div>
                                            )}
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
                                            <p style={{ fontsize: "20px" }}>
                                                <b>Wednesday</b>
                                            </p>
                                            {doctor.schedule && (
                                                <div style={{ display: "flex", marginLeft: "20px" }}>

                                                </div>
                                            )}
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
                                            <p style={{ fontsize: "20px" }}>
                                                <b>Thursday</b>
                                            </p>
                                            {doctor.schedule && (
                                                <div style={{ marginLeft: "20px" }}>

                                                </div>
                                            )}
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
                                            <p style={{ fontsize: "20px" }}>
                                                <b>Friday</b>
                                            </p>
                                            {doctor.schedule && (
                                                <div style={{ marginLeft: "20px" }}>

                                                </div>
                                            )}
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
                                            <p style={{ fontsize: "20px" }}>
                                                <b>Saturday</b>
                                            </p>
                                            {doctor.schedule && (
                                                <div style={{ marginLeft: "20px" }}>

                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    )}
                    {(status === "upcoming" || status === "rescheduled") && (
                        <div className="appointmentOption" onClick={clickReschedule}><button onClick={openReschedule}>
                            Reschedule
                        </button>
                            <Modal
                                isOpen={showReschedule}
                                onRequestClose={closeReschedule}
                                style={modalStyle}
                            >
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
                                            <p style={{ fontSize: "19px" }}>
                                                <b>Sunday</b>
                                            </p>
                                            {doctor.schedule && (
                                                <div style={{ marginLeft: "20px", width: "100%" }}>

                                                </div>
                                            )}
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
                                            <p style={{ fontsize: "20px" }}>
                                                <b>Monday</b>
                                            </p>
                                            {doctor.schedule && (
                                                <div style={{ display: "flex", marginLeft: "20px", }}>

                                                </div>
                                            )}
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
                                            <p style={{ fontsize: "20px" }}>
                                                <b>Tuesday</b>
                                            </p>
                                            {doctor.schedule && (
                                                <div style={{ display: "flex", marginLeft: "20px" }}>

                                                </div>
                                            )}
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
                                            <p style={{ fontsize: "20px" }}>
                                                <b>Wednesday</b>
                                            </p>
                                            {doctor.schedule && (
                                                <div style={{ display: "flex", marginLeft: "20px" }}>

                                                </div>
                                            )}
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
                                            <p style={{ fontsize: "20px" }}>
                                                <b>Thursday</b>
                                            </p>
                                            {doctor.schedule && (
                                                <div style={{ marginLeft: "20px" }}>

                                                </div>
                                            )}
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
                                            <p style={{ fontsize: "20px" }}>
                                                <b>Friday</b>
                                            </p>
                                            {doctor.schedule && (
                                                <div style={{ marginLeft: "20px" }}>

                                                </div>
                                            )}
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
                                            <p style={{ fontsize: "20px" }}>
                                                <b>Saturday</b>
                                            </p>
                                            {doctor.schedule && (
                                                <div style={{ marginLeft: "20px" }}>

                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <button onClick={closeModal} style={closeButtonStyle}>
                                    Cancel
                                </button>
                            </Modal></div>
                    )}
                </div>
            )}
            {rescheduled === true && (
                <div
                    style={{
                        display: "flex",
                        boxShadow: "0px 2px 5px #a4a7ad",
                        justifyContent: "center",
                        width: "200px",
                        height: "70px",
                        backgroundColor: "white",
                        position: "absolute",
                        marginLeft: "20px",
                        marginTop: "-50px",
                        borderRadius: "10px",
                        outline: "none",
                    }}
                >
                    <FontAwesomeIcon icon={faXmark} style={{ position: 'absolute', marginLeft: '150px', marginTop: '10px', color: 'grey', cursor: 'pointer' }} onClick={clickReschedule} />
                </div>
            )}
        </div>
    );
};

export default AppointmentOptions;