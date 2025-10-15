import express from "express"
import { createEditShop } from "../controllers/shop.controllers.js"
import isAuth from "../middleweres/isAuth.js"
//import { getCurrentUser } from "../controllers/user.controllers.js"
//import isAuth from "../middleweres/isAuth.js"
//import { googleAuth, resetPassword, sendOtp, singIn, singOut, singUp, verifyOtp } from "../controllers/auth.controllers.js"

const shopRouter = express.Router()
// authrouter.post ("/singup",singUp)
// authrouter.post ("/singin",singIn)
//authrouter.post ("/singout",singOut)
shopRouter.get ("/create-edit",isAuth,upload.single("image"),createEditShop)

// authrouter.post ("/send-otp",sendOtp)
// authrouter.post ("/verify-otp",verifyOtp)
// authrouter.post ("/reset-password",resetPassword)
// authrouter.post ("/google-auth",googleAuth)



export default shopRouter