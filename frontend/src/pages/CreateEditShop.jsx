import React, { useRef, useState } from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaUtensils } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setMyShopData } from '../Redux/ownerSlice';
import axios from 'axios';


const serverUrl = "http://localhost:8000";



function CreateEditShop() {
    const Navigate = useNavigate()
    const { myShopData } = useSelector(state => state.owner)
    const { currentCity, currentState, currentAddress } = useSelector(state => state.user)
    const [name, setName] = useState(myShopData?.name || "")
    const [address, setAddress] = useState(myShopData?.address || currentAddress)
    const [city, setCity] = useState(myShopData?.city || currentCity)
    const [state, setState] = useState(myShopData?.state || currentState)
    const [frontendImage, setFrontendImage] = useState(myShopData?.image || null)
    const [backendImage, setBackendImage] = useState(null)
    const dispatch = useDispatch()
    //const imageRef = useRef()
    const handelImage = (e) => {
        const file = e.target.files[0]
        setBackendImage(file)
        setFrontendImage(URL.createObjectURL(file))
    }

    const handelSubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append("name", name)
            formData.append("city", city)
            formData.append("state", state)
            formData.append("address", address)
            if (backendImage) {
                formData.append("image", backendImage)
            }
            const result = await axios.post(`${serverUrl}/api/shop/create-edit-shop`, formData,
                { withCredentials: true })
            dispatch(setMyShopData(result.data.shop))
            Navigate("/owner/dashboard")
            console.log(result.data)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='flex justify-center flex-col items-center p-6 
               bg-amber-50 text-amber-50 relative min-h-screen'>

            <div>
                <IoMdArrowRoundBack size={45} className='absolute top-6 left-6 cursor-pointer 
                text-amber-900 transition-colors' onClick={() => Navigate("/")} />
            </div >
            <div className='max-w-lag  bg-amber-600 rounded-2xl shadow-xl p-8 border-orange-100'>
                <div className='flex flex-col items-center mb-6'>
                    <FaUtensils className='text-amber-100 w-16 h-16 sm:h-20 mb-4' />
                </div>
                <div className='flex justify-center w-full text-amber-50 font-extrabold text-3xl'>
                    {myShopData ? "Edit Shop" : "Add Shop"}

                </div>
                <form className='space-y-5' onSubmit={handelSubmit}>
                    <div>
                        <label className='block text-sm font-medium text-white mb-2'>Name</label>
                        <input type="text" placeholder='Enter Shop Name'
                            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
                            focus:ring-amber-600' onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-white mb-2'>Shop Image</label>
                        <input type="file" accept='image/*'
                            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
                            focus:ring-amber-600'    onChange={handelImage} />
                        {frontendImage && <div className='mt-5'>
                            <img src={frontendImage} alt="" className='w-full h-58 object-cover rounded-lg border' />
                        </div>}


                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <label className='block text-sm font-medium text-white mb-2'>City</label>
                            <input type="text" placeholder='Enter Your City'
                                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
                            focus:ring-amber-600'onChange={(e) => setCity(e.target.value)} value={city} />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-white mb-2'>State</label>
                            <input type="text" placeholder='Enter Your State'
                                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
                            focus:ring-amber-600'onChange={(e) => setState(e.target.value)} value={state} />
                        </div>
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-white mb-2'>Address</label>
                        <input type="text" placeholder='Enter Your Address'
                            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
                            focus:ring-amber-600' onChange={(e) => setAddress(e.target.value)} value={address} />
                    </div>
                    <button className='w-full bg-amber-50 text-black px-6 py-3 rounded-lg font-semibold
                          shadow-md hover:bg-amber-900 hover:text-amber-50 transition-all duration-200 cursor-pointer'>
                        Save</button>

                </form>

            </div>

        </div>
    )
}

export default CreateEditShop
