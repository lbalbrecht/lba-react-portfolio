const axios = require('axios')

// const URL_PREFIX = 'http://localhost:3001';
const URL_PREFIX = 'https://leightonalbrecht.herokuapp.com';

const API = {
    getProjects: function() {
        return axios.get(`${URL_PREFIX}/api/projects`)
    }
}

export default API