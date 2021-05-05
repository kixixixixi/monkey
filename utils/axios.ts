import axios from "axios"

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3333/v1"

export default axios
