import React, { useState } from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { doneSuccessfulAction } from "./metricsSlice";
import "react-toastify/dist/ReactToastify.css";

const Timings = ({ timings, isReschedule }) => {
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch()
    const showToastMessage = (success, text) => {
        if (success) {
            toast.success(text, {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            toast.error(text, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }
    const handleClick = () => {
        setModal(true)
        dispatch(doneSuccessfulAction(1))
    }

    const confirmButtonStyle = {
        background: 'darkviolet',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '10px 20px',
        margin: '10px',
        cursor: 'pointer',
        fontSize: '16px',
    };

    const cancelButtonStyle = {
        background: 'red',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '10px 20px',
        margin: '10px',
        cursor: 'pointer',
        fontSize: '16px',
    };

    return (
        <div>
            
            <div className="flex flex-row w-[100%] justify-between gap-[10px]">

                {timings.map((timing) => {
                    return timing.available ? (
                        <button className='text-black w-[90px] h-[50px] rounded-lg ml-[10px] bg-[white] border-2 border-solid border-black' onClick={handleClick}>
                            <div className="flex justify-center items-center text-[19px]">
                                {timing.timing}
                            </div>
                        </button>
                    ) : (
                        <button className="text-black w-[90px] h-[50px] border-[2px] border-black rounded-lg line-through" onClick={() => showToastMessage(false, `Slot is already reserved`)}>
                            <div className="flex justify-center items-center text-[19px]">
                                {timing.timing}
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Timings;