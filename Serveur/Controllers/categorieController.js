import categorieModel from "../Model/categorieModel.js";

const {
    categorie
} = categorieModel

const findRestaurantCategorie = async (req, res) => {
    const categories = await categorie.find()
    return res.status(200).json(categories)
    // const restaurant = req.body
    // const categorie = await categorie.find({restaurant: restaurant})
    // return res.status(200).json(categorie)
}

const createCategorie = async (req, res) => {
    var data = {...req.body}
    const newCategorie = new categorie(data);
    const insertedCategorie = await newCategorie.save();
    return res.status(201).json(insertedCategorie);
}

export default {
    findRestaurantCategorie,
    createCategorie
}