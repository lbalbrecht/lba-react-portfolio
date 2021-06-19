const axios = require('axios')

export default {
    getProjects: function() {
        return axios.get("/api/projects")
    }
}