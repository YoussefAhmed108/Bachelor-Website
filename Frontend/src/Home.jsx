import { useNavigate } from "react-router-dom"
import NavigationBar from "./NavBar"
import { useDispatch } from 'react-redux'
import { viewPage , doneSuccessfulAction } from "./metricsSlice"
const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    dispatch(viewPage('Home'))

    const handleClick = (page) => {
        navigate(page)
        dispatch(doneSuccessfulAction(1))
    }
    return (
        <div>
            <NavigationBar />
            <div className="bg-[#ace1cf] h-[100vh]">

                <div className="flex flex-col gap-[50px] pl-[40px] pt-[40px]">
                    <div className="flex flex-row gap-[100px] ">
                        <div className="flex flex-col w-[200px] border-solid">
                            <div className="w-[100px] h-[100px] mx-auto rounded-full overflow-hidden">
                                <img src={'./doctor.jpeg'} alt={'pic'} className="w-full h-full object-cover" />
                            </div>
                            <button onClick={() => handleClick('/doctors')} className="bg-[#001F3F] w-[200px] mx-auto">
                                Book an appointment
                            </button>
                        </div>
                        <div className="flex flex-col w-[200px] border-solid">
                            <div className="w-[100px] h-[100px] mx-auto rounded-full overflow-hidden">
                                <img src={'./pharmacy.jpeg'} alt={'pic'} className="w-full h-full object-cover" />
                            </div>
                            <button onClick={() => handleClick('/medicines')} className="bg-[#001F3F] w-[200px] mx-auto">
                                Buy a Medicine
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-row gap-[100px]">
                        <div>
                            <div className="w-[100px] h-[100px] mx-auto rounded-full overflow-hidden">
                                <img src={'./appointments.jpeg'} alt={'pic'} className="w-full h-full object-cover" />
                            </div>
                            <button onClick={() => handleClick('/appointments')} className="bg-[#001F3F] w-[200px] mx-auto">
                                View your appointments
                            </button>
                        </div>
                        <div>
                            <div className="w-[100px] h-[100px] mx-auto rounded-full overflow-hidden">
                                <img src={'./pre.jpeg'} alt={'pic'} className="w-full h-full object-cover" />
                            </div>
                            <button onClick={() => handleClick('/prescriptions')} className="bg-[#001F3F] w-[200px] mx-auto">
                                View your prescription
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home