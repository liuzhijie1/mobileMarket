import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import('@/views/Home.vue');


Vue.use(Router)

const router = new Router({
    mode:'history',
    routes:[
      {
        path:'/',
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
      }
    ]
})

router.beforeEach((to,from,next) => {
  window.document.title = to.meta.title;
  next();
})

router.afterEach((to,from,next)=>{
  window.scrollTo(0,0);
})

export default router
