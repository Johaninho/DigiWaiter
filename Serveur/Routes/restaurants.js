import express from "express";
import restaurantController from "../Controllers/restaurantController.js";

const routesRestaurant = new express.Router()
const {
    getRestaurants,
    getRestaurant,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
} = restaurantController

routesRestaurant.get('/', getRestaurants)
routesRestaurant.get('/:slug', getRestaurant)
routesRestaurant.post('/', createRestaurant)
routesRestaurant.put('/:slug', updateRestaurant)
routesRestaurant.delete('/:slug', deleteRestaurant)

export default routesRestaurant