import axios from "axios";

const BASEURL = 'https://fakestoreapi.com/products';

const api = {
    getProducts: function () {
        return axios.get(BASEURL);
    },
};

export default api;