<template>
  <div class="product-detail">
      <liu-header>商品详情</liu-header>
      
  </div>
</template>

<script>
import api from '@/axios/api'
import LiuHeader from '@/components/share/LiuHeader.vue'
export default {
    data() {
        return {
            ProductDetail: null,
        }
    },
    created () {
        // let data;
        api.getDetail(this.$route.query.id).then(data=>{
            console.log(data);
        })
    },
    components: {
        LiuHeader,
    },
}
</script>

<style>

</style>