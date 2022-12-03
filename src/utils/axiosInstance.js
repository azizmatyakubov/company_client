import axios from 'axios'
import jwtDecode from 'jwt-decode'
import dayjs from 'dayjs'

const baseURL = process.env.REACT_APP_API_URL

let accessToken = localStorage.getItem('accessToken') || null

const axiosInstance = axios.create({
    baseURL,
    headers:{Authorization: `Bearer ${accessToken}`}
});

axiosInstance.interceptors.request.use(async req => {
    accessToken = localStorage.getItem('accessToken') || null
    req.headers.Authorization = `Bearer ${accessToken}`
    if(accessToken){
        const decoded = jwtDecode(accessToken)
        const isExpired = dayjs().isAfter(dayjs.unix(decoded.exp))
        if(!isExpired) return req
         
        try {
            const res = await axios.get('api/v1/auth/refresh')
            localStorage.setItem('accessToken', res.data.accessToken)
            req.headers.Authorization = `Bearer ${res.data.accessToken}`
            return req
        } catch (error) {
            console.log(error)
        }  
    }
    return req
})


export default axiosInstance;