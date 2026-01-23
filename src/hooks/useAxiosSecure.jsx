import axios from "axios"
 
const axiosSecure=axios.create({
    baseURL: process.env.VITE_SERVER_URL,
})
const useAxiosSecure = () => {
  return axiosSecure
}

export default useAxiosSecure