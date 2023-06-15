import Restaurant from "../Model/restaurantModel.js";

const getRestaurants = async (req, res) => {
    const allRestaurants = await Restaurant.find()
    return res.status(200).json(allRestaurants)
}

const getRestaurant = async (req, res) => {
    const { slug } = req.params
    const restaurant = await Restaurant.find({slug: slug})
    return res.status(200).json(restaurant)
}

const createRestaurant = async (req, res) => {
    const newRestaurant = new Restaurant({ ...req.body });
    const insertedRestaurant = await newRestaurant.save();
    return res.status(201).json(insertedRestaurant);
}

const updateRestaurant = async (req, res) => {
    const { slug } = req.params
    const updateRestaurant = await Restaurant.findOneAndUpdate({slug: slug}, {...req.body}, {new: true})
    return res.status(200).json(updateRestaurant)
}

const deleteRestaurant = async (req, res) => {
    const { slug } = req.params
    await Restaurant.deleteOne({slug: slug})
    return res.status(200).json('restaurant suprimer')
}

export default {
    getRestaurants,
    getRestaurant,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
}