require('../models/socialProjectModel')
const mongoose = require('mongoose');
const socialProjectModel = mongoose.model('SocialProject')

module.exports = {
    async getRegisters(req, res, next){
        const {page=1} = req.query;
        const socialProjects = await socialProjectModel.paginate({},{page, limit:50});
        return res.status(200).json(socialProjects);
    },
    async store(req, res, next){
        const socialProject = await socialProjectModel.create(req.body)
        return res.status(201).json(socialProject);
    },
    async update (req, res, next){
        const socialProject = await socialProjectModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(201).json(socialProject);

    },
    async delete (req, res, next) {
        const socialProject = await socialProjectModel.findByIdAndDelete(req.params.id);
        return res.status(200).send()
    },
    async show(req, res, next){
        const socialProject = await socialProjectModel.findById(req.params.id);
        return res.status(200).json(socialProject);
    }
};