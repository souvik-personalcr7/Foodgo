import React, { use } from 'react'
import Nav from './Nav'
import { useSelector } from 'react-redux'
import { FaUtensils } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function OwnerdDashbord() {
  const { myShopData } = useSelector(state => state.owner)
  const Navigate = useNavigate()
  return (
    <div>
      {!myShopData &&
        <div className='flex justify-center items-center p-4 sm:p-6'>
          <div className=' w-full max-w-md bg-amber-50 rounded-2xl p-6 border border-gray-50 hover:shadow-xl
            transition-shadow duration-300'>
            <div className='flex flex-col items-center text-center'>
              <FaUtensils className='text-amber-700 w-16 h-16 sm:h-20 mb-4' />
              <h2 className='text-xl sm:text-2xl font-bold text-gray-800 mb-2 '> Add your Restaurant</h2>
              <p className='text-gray-600 mb-4 text-sm sm:text-base'>
                Join our food delivery platform and rech thousand coustomers every day
              </p>
              <button className=' bg-amber-700 text-white px-5 sm:px-6 py-2 rounded-full
              font-medium hover:bg-amber-900  transition-colors duration-200 shadow-gray-600 '
               onClick={()=> Navigate("/create-edit-shop")}>
                Get Started</button>
            </div>

          </div>

        </div>}

    </div>
  )
}

export default OwnerdDashbord
