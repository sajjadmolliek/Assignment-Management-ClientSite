import axios from "axios";



const axiosSecure = axios.create({
    baseURL: 'http://localhost:5006',
    withCredentials: true,
  });

const useAxiosHook = () => {
    return axiosSecure;
};

export default useAxiosHook;