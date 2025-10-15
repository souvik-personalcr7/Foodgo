import multer from "multer"

const storgae = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"/public")

    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
export const uploal=multer(storgae)