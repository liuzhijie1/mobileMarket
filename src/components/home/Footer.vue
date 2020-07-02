<template>
  <div class="footer">
      <div class="left">
        <p><van-icon name="star-o" size="18px"/></p>
        <p>精选</p>
      </div>
      <div class="center">
        <p><van-icon name="shopping-cart-o" size="18px"/></p>
        <p>购物车</p>
      </div>
      <div class="right">
        <p><van-icon name="user-o" size="18px"/></p>
        <p>我的</p>
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

<style>
.footer{
  display: flex;
  height: 8vh;
  background: #eee;
  text-align: center;
}
.footer>div{
  flex: 1;
  margin-top: 7px;
}
.footer>div>p:nth-of-type(2){
  margin-top: 3px;
}
</style>