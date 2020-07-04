<template>
  <div class="user">
      <div class="content"></div>
      <liu-footer></liu-footer>
  </div>
</template>

<script>
import LiuHeader from '@/components/share/LiuHeader.vue';
import Footer from '@/components/home/Footer.vue';
export default {
    components: {
        LiuHeader,
        LiuFooter:Footer,
    },
}
</script>

<style scoped>
.content{
    height: calc(100vh - 8vh);
}
</style>