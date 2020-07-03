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
        }
    },
    getters: {
        List(state){
            return state.productList;
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

