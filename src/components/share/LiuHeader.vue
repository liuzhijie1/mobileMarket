<template>
  <div class="header">
    <div class="back" @click="goback()"><van-icon name="arrow-left"/><span><slot name="title">返回</slot></span></div>
    <div class="content">
      <slot>项目</slot>
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  components: {
    [Icon.name]: Icon,
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
};
</script>

<style scoped>
.header {
  height: 8vh;
  background: #eee;
  box-shadow: 0 0 5px #eee;
  display: flex;
  line-height: 8vh;
}
.header .back{
  flex: 2;
  color: skyblue;
  text-align: center;
}
.header .content{
  flex: 6;
  text-indent: 20%;
}
.header .back span{
  text-align: right;
}
.van-icon::before{
  /* margin-top: 3px; */
  position: relative;
  top: 3px;
}

</style>
