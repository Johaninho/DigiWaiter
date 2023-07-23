import express from "express";
import groupeController from "../Controllers/groupesController.js";

const routesgroupe = new express.Router()
const {
    getgroupes,
    getgroupe,
    creategroupe,
    updategroupe,
    deletegroupe
} = groupeController

routesgroupe.get('/', getgroupes)
routesgroupe.get('/:slug', getgroupe)
routesgroupe.post('/', creategroupe)
routesgroupe.put('/:slug', updategroupe)
routesgroupe.delete('/:slug', deletegroupe)

export default routesgroupe