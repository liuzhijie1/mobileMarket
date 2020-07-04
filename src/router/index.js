import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'


const Home = () => import('@/views/Home.vue');


Vue.use(Router)


// 解决重复点击报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}




const router = new Router({
    mode:'history',
    routes:[
      {
        path:'/',
        redirect:'/home'
      },
      {
        path:'/home',
        component:Home,
        meta:{
          title:'主页'
        }
      },
      {
        path:'/product',
        component:()=> import('@/views/ProductDetail.vue'),
        meta:{
          title:'商品详情'
        }
      },
      {
        path:'/selectCity',
        component:()=>import('@/views/citySelector/CitySelector.vue'),
        meta:{
          title:'选择城市'
        }
      },
      {
        path:'/search',
        component:()=>import('@/views/search/search.vue'),
        meta:{
          title:'搜索页面'
        }
      },
      {
        path:'/cart',
        component:()=>import('@/views/cart/Cart.vue'),
        meta:{
          title:'购物车'
        }
      },
      {
        path:'/login',
        component:()=>import('@/views/login/Login.vue'),
        meta:{
          title:'登录/注册页面'
        }
      },
      {
        path:'/user',
        component:()=>import('@/views/user/User.vue'),
        meta:{
          title:'用户页面'
        }
      }
    ]
})

router.beforeEach((to,from,next) => {
  window.document.title = to.meta.title;
  store.commit('changeNowPath',to.path);
  next();
})

router.afterEach((to,from,next)=>{
  window.scrollTo(0,0);
})



export default router
