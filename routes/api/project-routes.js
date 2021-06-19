const router = require('express').Router();
const Project = require('../../models/Project')

router.get('/', async (req, res) => {
    console.log('Route reached!')
    try {
        const allProjects = await Project.findAll();
        res.status(200).json(allProjects);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    console.log('Route reached!')
    try {
        const projectData = await Project.findByPk(req.params.id);
        if (!projectData) {
            res.status(404).json({ message: "Project not found"})
        }
        res.status(200).json(allProjects);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router