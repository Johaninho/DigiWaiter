import groupesModel from "../Model/groupesModel.js"

const getgroupes = async (req, res) => {
    const allgroupes = await groupesModel.find()
    return res.status(200).json(allgroupes)
}

const getgroupe = async (req, res) => {
    const { name } = req.params
    const groupes = await groupesModel.find({name: name})
    return res.status(200).json(groupes)
}

const creategroupe = async (req, res) => {
    const newgroupe = new groupesModel({ ...req.body });
    const insertedgroupe = await newgroupe.save();
    return res.status(201).json(insertedgroupe);
}

const updategroupe = async (req, res) => {
    if (!req.file) {
        res.send("No file upload")
    } else {
        console.log(req.file.filename)
        var imgsrc = req.file.filename
        const newgroupes = new groupesModel({name : imgsrc, restaurant : "bucky burger"});
        const insertedgroupes= await newgroupes.save();
        return res.status(201).json(insertedgroupes);
    }
}

const deletegroupe = async (req, res) => {
    const { name } = req.params
    await groupesModel.deleteOne({name: name})
    return res.status(200).json('image supprimer')
}

export default {
    getgroupes,
    getgroupe,
    creategroupe,
    updategroupe,
    deletegroupe
}  