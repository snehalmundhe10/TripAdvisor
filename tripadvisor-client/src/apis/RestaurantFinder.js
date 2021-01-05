import axios from "axios";
// initializing axios instance
export default axios.create({
    baseURL: "http://localhost:4000/api/v1/restaurants"
})