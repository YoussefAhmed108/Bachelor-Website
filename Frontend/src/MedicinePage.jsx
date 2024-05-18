import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavigationBar from "./NavBar";
import { viewPage } from "./metricsSlice"
const MedicinePage = () => {
    const dispatch = useDispatch();
    dispatch(viewPage('MedicinePage'))
    const medicine = {
        name: 'Panadol',
        price: 30,
        description: 'A pain killer medicine',
        capacity: 200,
        activeIngredients: 'Not Avaliable'
    }
    return (
        <div>
            <NavigationBar />
            <div>
                <div style={{ display: "flex", flexDirection: "row", gap: "-10px" }} className="flex flex-row justify-center align-center w-[90%] mb-[-50px] mt-[-40px]">
                    <h2 className='w-[10px] font-bold mb-[20px] mt-[50px] ml-[90px] text-center p-[20px] text-black' style={{ fontSize: '60px' }}>{medicine.name} </h2>
                </div>
                <div className="flex flex-row flex-wrap justify-center align-start">
                    <div className="flex-1">
                        <img className="max-w-[80%] mt-[70px] ml-[130px] h-auto shadow-md" src={'./medicine.jpeg'} alt={medicine.name} />
                    </div>
                    <div>
                        <div className="mt-[0px] flex-row flex">
                            <div className='w-[500px] flex flex-col'>
                                <button className='w-[150px] h-[50px] ml-[150px] bg-[#001F3F]'>Add To Cart</button>
                                <div>
                                    <p className="text-2xl ml-[200px] font-bold mb-[70px] mt-[50px] underline rounded-lg text-center p-[15px] text-black bg-[##9CA7FA] w-1/2 font-serif">Price:</p>
                                    <p className="mt-[-30px] mb-[30px] ml-[210px] text-3xl text-center font-bold p-[10px] text-black w-1/2">{medicine.price}</p>
                                </div>
                                <div>
                                    <p className="text-2xl ml-[200px] font-bold mb-[70px] mt-[50px] underline rounded-lg text-center p-[15px] text-black bg-[##9CA7FA] w-1/2 font-serif">Description:</p>
                                    <p className="mt-[-30px] mb-[30px] ml-[210px] text-3xl text-center font-bold p-[10px] text-black w-1/2">{medicine.description}</p>
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }} className='flex flex-col w-full'>
                                <div>
                                    <p className="text-2xl ml-[200px] font-bold mb-[70px] mt-[50px] underline rounded-lg text-center p-[15px] text-black bg-[##9CA7FA] w-1/2 font-serif">Active Ingredients:</p>
                                    <p className="mt-[-30px] mb-[30px] ml-[210px] text-3xl text-center font-bold p-[10px] text-black w-1/2">{medicine.activeIngredients}</p>
                                </div>
                                <div>
                                    <p className="text-2xl ml-[200px] font-bold mb-[70px] mt-[50px] underline rounded-lg text-center p-[15px] text-black bg-[##9CA7FA] w-1/2 font-serif">Capacity:</p>
                                    <p className="mt-[-30px] mb-[30px] ml-[210px] text-3xl text-center font-bold p-[10px] text-black w-1/2">{medicine.capacity}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default MedicinePage;