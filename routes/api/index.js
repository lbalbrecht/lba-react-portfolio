const router = require("express").Router();
const projectRoutes = require("./project-routes");

// Post routes
router.use("/projects", projectRoutes);

module.exports = router;
