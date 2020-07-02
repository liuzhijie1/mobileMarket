<template>
  <div class="header">
      <div class="left">
        <van-icon name="location-o" color="#1989fa" />&nbsp;<span>深圳市</span>
      </div>
      <div class="center">
        精选
      </div>
      <div class="right">
        <van-icon name="search" color="#1989fa" size="24px"/>
      </div>
  </div>
</template>

<script>
import {Icon} from 'vant';
export default {
  components: {
    [Icon.name]:Icon,
  },
}
</script>

<style scoped>
.header{
    background: #eee;
    height: 8vh;
    display: flex;
    text-align: center;
    height: 8vh;
    line-height: 8vh;
}
.header>div{
  flex:1;
}
.header>div:nth-of-type(3){
  margin-top: 6px;
}
</style>