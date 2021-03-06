import axios from 'axios';
import storage from 'good-storage'

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
    },
    getDetail(id){
        // console.log(id);
        return instance.get('/product',{params:{id,}});
    },
    userLogin(data){
        return instance.post('/user/signin',data);
    },
    getCitySelect(){
        return instance.get('/data/city');
    },
    getCityArea(){
        return instance.get('/data/area');
    },
    SearchItem(params={}){
        return instance.get('/product/pagination',{params})
    },
    getCart(params){
        return instance({
            method:'get',
            url:'/cart/all',
            headers:{
                Authorization:storage.session.get('token')||'',
            },
            params,
        });
    }
}