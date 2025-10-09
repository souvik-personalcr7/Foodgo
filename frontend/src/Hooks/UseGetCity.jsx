import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { serverUrl } from "../App";
import { setCity } from "../Redux/userSlice";

function useGetCity() {
    const dispatch = useDispatch();
    const {userData} = useSelector(state => state.user)
    const apikey = import.meta.env.VITE_GEOAPI_KEY
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            console.log(position)
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude
            const result = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${apikey}`);

            //console.log(result.data.results[0].city)
            dispatch(setCity(result ?.data.results[0].city))
        })
    }, [userData])
}

export default useGetCity;