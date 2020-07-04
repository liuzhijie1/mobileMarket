<template>
  <div class="cart">
    <liu-header>购物车</liu-header>
    <div class="content">
      <div class="item" v-for="(item, index) in cartList" :key="index">
        <div class="checkbox">
          <van-checkbox v-model="item.checked" icon-size="24px"></van-checkbox>
        </div>
        <div class="mycard">
          <van-card
            :title="item.name"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          >
          
            <template #price-top>
                <div class="mid"><div>{{item.price | money}}</div><van-stepper v-model="value" /></div>
            </template>
            <template #bottom>
              <div class="xia">
                  <van-button type="danger">删除</van-button>
              </div>
            </template>
          </van-card>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import LiuHeader from "@/components/share/LiuHeader.vue";
import api from "@/axios/api";
import { Toast, Checkbox, CheckboxGroup, Card, Stepper, Button } from "vant";
export default {
  components: {
    LiuHeader,
    [Toast.name]: Toast,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Card.name]: Card,
    [Stepper.name]: Stepper,
    [Button.name]: Button
  },
  data() {
    return {
      checked: true,
      value: 1
    };
  },
  created() {
    api.getCart().then(data => {
      if (data.errcode == 90101) {
        Toast.fail("请先登录");
        this.$router.push("/login");
      } else if (data.errcode == 0) {
        console.log(data.data);
        this.$store.commit("setCart", data.data);
      } else {
        Toast.fail("未知错误");
      }
    });
  },
  computed: {
    cartList() {
      return this.$store.getters.getCart;
    }
  },
  methods: {
    //   这里的代码时测试组件可以绑定的方法  
    //   test() {
    //     console.log('test');
    //   }
  },
  mounted () {
      
  },
};
</script>

<style scoped>
.content {
  padding: 10px 10px;
}
.item {
  display: flex;
}
.checkbox {
  display: flex;
  align-items: center;
}
.van-card__price-currency {
  color: red;
}
.van-card__price-integer {
  color: red;
}
.mid{
    display: flex;
    justify-content: space-between;
}
.mid>div:first-of-type{
    color: red;
}
.xia{
    display: flex;
    flex-direction: row-reverse;
}
.item{
    margin: 10px 0;
}
</style>
