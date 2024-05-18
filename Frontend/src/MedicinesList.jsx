import { useNavigate } from "react-router-dom"
import NavigationBar from "./NavBar"
import { useDispatch } from 'react-redux'
import { viewPage } from "./metricsSlice"

const MedicinesList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    dispatch(viewPage('MedicinesList'))
    const meds = [
        {
            name : 'Panadol',
            usage : 'Pain Killer',
            price : 50
        },
        {
            name : 'Panadol',
            usage : 'Pain Killer',
            price : 50
        },
        {
            name : 'Panadol',
            usage : 'Pain Killer',
            price : 50
        },
        {
            name : 'Panadol',
            usage : 'Pain Killer',
            price : 50
        },
        {
            name : 'Panadol',
            usage : 'Pain Killer',
            price : 50
        },
        {
            name : 'Panadol',
            usage : 'Pain Killer',
            price : 50
        },
    ]
    return (
        <div>
            <NavigationBar />
            <div className="flex flex-row gap-[100px] flex-wrap pl-[50px] pt-[80px]">
                {
                    meds.map(med => (
                        <div>
                            <img src="./medicine.jpeg" className="mx-auto" width={'200px'} height={'300px'} />
                            <div className="flex flex-col bg-[offwhite]">
                                <p className="text-lg font-bold">{med.name}</p>
                                <div className="flex flex-col gap-[5px] my-[5px]">
                                    <div className="flex flex-row flex-wrap gap-[20px] mx-auto">
                                        <p><b>Usage : </b>{med.usage}</p>
                                        <p><b>Price : </b>{med.price}</p>
                                    </div>
                                </div>

                                <button onClick={() => navigate('/medicinePage')} className="bg-[#9e220f] mx-auto w-[60%] text-sm">View More</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MedicinesList