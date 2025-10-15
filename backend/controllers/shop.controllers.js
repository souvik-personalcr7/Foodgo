import Shop from "../models/shop.model"
import uploadCloudnirary from "../utils/cloudnary"

export const createEditShop = async (req, res) => {
    try {
        const { name, city, state, address } = req.body
        let image
        if (req.file) {
            image = await uploadCloudnirary(req.file.path)
        }
        let shop = await Shop.findOne({ owner: req.userId })
        if (!shop) {
            const shop = await Shop.create({
                name, city, state, address, image, owner: req.userId
            })
        } else {
            const shop = await Shop.findByIdAndDelete( shop._id, {
                name, city, state, address, image, owner: req.userId
            },{new:true})
        }

        await shop.populate("owner")
        return res.status(201).json(shop)

    } catch (error) {
        return res.status(500).json({ massage: `creat shop error ${error}` })
    }
}