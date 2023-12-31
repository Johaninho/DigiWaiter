import express from "express";
import menuController from "../Controllers/menusController.js";

const routesmenu = new express.Router()
const {
    getmenus,
    getmenu,
    createmenu,
    updatemenu,
    deletemenu
} = menuController

routesmenu.get('/', getmenus)
routesmenu.get('/:slug', getmenu)
routesmenu.post('/', createmenu)
routesmenu.put('/:slug', updatemenu)
routesmenu.delete('/:slug', deletemenu)

export default routesmenu