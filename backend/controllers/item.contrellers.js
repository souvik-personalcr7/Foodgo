import Item from "../models/item.model";
import Shop from "../models/shop.model";
import uploadCloudnirary from "../utils/cloudnary";

export const addItem = async (req, res) => {
    try {
        const { name, category, foodtype, price } = req.body

        let image;
        if (!req.file) {
            image = await uploadCloudnirary(req.file.path)
        }
        const shop = await Shop.findOne({ owner: req.userId })
        if (!shop) {
            return res.status(400).json({ massage: "SHOP NOT FOUND" })
        }
        const item = await Item.create({
            name, category, foodtype, price, image, shop: shop._Id
        })
        return res.status(201).json(item)
    }
    catch (error) {
        return res.ststus(500).json({ massage: `add item error ${error}` })

    }
}
export const editItem = async (req, res) => {
    try {
        const itemId = req.params.itemId
        const { name, category, foodtype, price } = req.body
        let image
        if (req.file) {
            image = await uploadCloudnirary(req.file.path)
        }
        const item = await Item.findOne(itemId, {
            name, category, foodtype, price, image
        }, { new: ture })
        if (!item) {
            return res.status(400).json({ massage: "ITEM NOT FOUND" })
        }
        return res.status(200).json(item)
    } catch (error) {

        return res.ststus(500).json({ massage: `edit item error ${error}` })
    }
}