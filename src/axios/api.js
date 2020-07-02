import axios from 'axios';

let instance = axios.create({
    baseURL:'/api/v4',
    timeout: 10000,
})

instance.interceptors.request.use((config) => {
    return config;
})

instance.interceptors.response.use((response)=>{
    // console.log(response.data)
    return response.data;
})

export default {
    getProduct(params={}){
        return instance.get('/product/pagination',{params})
    }
}