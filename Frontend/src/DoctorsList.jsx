import { useNavigate } from "react-router-dom"
import NavigationBar from "./NavBar"
import { useDispatch , useSelector } from 'react-redux'
import { doneSuccessfulAction, viewPage } from "./metricsSlice"
import { useEffect } from "react"
import { getState } from "./metricsSlice"
import axios from "axios"

const DoctorsList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    dispatch(viewPage('Doctors List'))
    const handleClick = (page) => {
        navigate(page)
        dispatch(doneSuccessfulAction(2))
    }
    
    const doctors = [
        {
            name: "Youssef Ahmed",
            speciality: "Cardio",
            price: 10,
            hospital: 'El salam'
        },
        {
            name: "Laila Gohar",
            speciality: "Physciatric",
            price: 20,
            hospital: 'El salam'
        },
        {
            name: "Salma Ahmed",
            speciality: "Pediatrics",
            price: 50,
            hospital: 'El salam'
        },
    ]
    return (
        <div>
            <NavigationBar />
            <div className="flex flex-row gap-[100px] flex-wrap pl-[50px] pt-[80px]">
                {
                    doctors.map((doctor,index) => (
                        <div id={index}>
                            <img src="./doctor1.jpeg" className="mx-auto" width={'200px'} height={'300px'} />
                            <div  className="flex flex-col bg-[offwhite]">
                                <p className="text-lg font-bold">{doctor.name}</p>
                                <div className="flex flex-col gap-[5px] my-[5px]">
                                    <div className="flex flex-row flex-wrap gap-[20px] mx-auto">
                                        <p><b>Speciality : </b>{doctor.speciality}</p>
                                        <p><b>Price : </b>{doctor.price}</p>
                                    </div>
                                    <p><b>Hospital : </b>{doctor.hospital}</p>
                                </div>

                                <button onClick={() => handleClick('/doctorPage')} className="bg-[#9e220f] mx-auto w-[60%] text-sm">View More</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DoctorsList