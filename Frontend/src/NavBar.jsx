import { useNavigate } from "react-router-dom"


const NavigationBar = () => {
    const navigate = useNavigate()
    return (
        <div className="w-[100%] h-[70px] bg-[#001F3F] flex flex-row ">
            <div className="ml-[50px] mr-[150px] cursor-pointer">
                <img onClick={() => navigate('/')} src="./logo.png" width={'100px'} height={'100px'} className="mt-[-15px]" />
            </div>

            <div className="flex flex-row gap-[20px]">
                <button className="bg-[transparent]">
                    Doctors
                </button>

                <button className="bg-[transparent]">
                    Appointments
                </button>
                <button className="bg-[transparent]">
                    Prescriptions
                </button>

                <button className="bg-[transparent]">
                    Pharmacy
                </button>
                
            </div>

            <div>
                <div onClick={() => navigate('/account')} className="cursor-pointer w-[50px] h-[50px] mt-[8px] ml-[330px] rounded-full overflow-hidden">
                    <img src={'./profile.png'} alt={'pic'} className="w-full h-full object-cover" />
                </div>
            </div>
            <button
                    type="button"
                    className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none bg-[transparent]"
                    onClick={() => navigate('/cart')}
                >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                </button>
        </div>
    )
}

export default NavigationBar