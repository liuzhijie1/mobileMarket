import Vue from "vue"
import Vuex from 'vuex';
import api from '@/axios/api'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        productList:[],
        page:1,
        size:10,
        flag:true,
        location:'',
        citySelect:'',
        cityArea:'',
        nowPath:'',
        cartList:[],
    },
    mutations:{
        moreProduct(state,data){
            data.forEach((item)=>{
                state.productList.push(item);
            })
        },
        addPage(state){
            state.page++;
        },
        reqon(state){
            state.flag = false;
        },
        reqoff(state){
            state.flag = true;
        },
        setLocation(state,city){
            state.location = city;
        },
        setCitySelect(state,citySelect){
            state.citySelect = citySelect;
        },
        setCityArea(state,cityarea){
            state.cityArea = cityarea;
        },
        changeNowPath(state,Path){
            state.nowPath = Path;
        },
        setCart(state,data){
            state.cartList = data;
        }
    },
    getters: {
        List(state){
            return state.productList;
        },
        mylocation(state){
            return state.location;
        },
        myCitySelect(state){
            return state.citySelect;
        },
        getPath(state){
            return state.nowPath;
        },
        getCart(state){
            return state.cartList;
        }
    },
    actions:{
        reqProduct({commit},params){
            api.getProduct(params).then(data=>{
                commit('moreProduct',data.data.data);
                commit('reqoff');
            })
        }
    }
})

