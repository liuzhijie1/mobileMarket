<template>
  <div class="cart">
      <liu-header>购物车</liu-header>
      <div class="content"></div>
      <div class="footer"></div>
  </div>
</template>

<script>
import LiuHeader from '@/components/share/LiuHeader.vue';
import api from '@/axios/api'
import {Toast} from 'vant'
export default {
    components: {
        LiuHeader,
        [Toast.name]:Toast,
    },
    created(){
        api.getCart().then(data=>{
            if(data.errcode==90101){
                Toast.fail('请先登录');
                this.$router.push('/login');
            }else if(data.errcode==0){
                console.log(data.data);
            }else{
                Toast.fail('未知错误');
            }
        })
    }
}
</script>

<style scoped>
.content{
    height: calc(100vh - 16vh);
}
.footer{
    height: 8vh;
    background: #eee;
}
</style>