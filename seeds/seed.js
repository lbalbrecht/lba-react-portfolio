const sequelize = require('../config/connection');
const Project = require('../models/Project');

const projectSeedData = require('./projectSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await Project.bulkCreate(projectSeedData);
}

seedDatabase();