import axios from "axios";

// 创建axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // api的base_url
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
