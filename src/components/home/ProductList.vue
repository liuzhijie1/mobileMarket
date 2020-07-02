<template>
  <div class="product">
      <div class="main">
        <van-row>
          <van-col class="item" span="12" v-for="(product,index) in productList" :key="index">
            <div class="item-pro">
              <div class="img">
                <img :src="product.cover" alt="">
              </div>
              <div class="title">
                {{ product.name }}
              </div>
              <div class="price">
                {{ product.price | money }}
              </div>
            </div>
          </van-col>
        </van-row>
      </div>
  </div>
</template>

<script>
import { Col, Row } from 'vant';
export default {
  props:{
    productList:{
      type:Array,
    }
  },
  components: {
    [Col.name]:Col,
    [Row.name]:Row
  },
  mounted () {
    console.log(this.productList);
  },
  filters: {
    money: function(value) {
      return '￥'+value;
    }
  }
}
</script>

<style scoped>
.product{
  height: calc(100vh - 16vh);
  overflow: auto;
}
.item{
  height: 32vh;
  /* background: chartreuse; */
  padding: 6px;
}
.item .item-pro{
  width: 100%;
  height: 100%;
  /* background: teal; */
  border-radius: 6px;
  border: 1px solid gray;
  box-shadow: 1px 1px 4px 0px gray;
}
.img{
  height: 70%;
  /* background: red; */
  margin-top: 10px;
}
img{
  width: 100%;
  height: 100%;
}
.title{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 900;
}
.price{
  padding: 0 10px;
  color: red;
}
</style>