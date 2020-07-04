<template>
  <div class="search">
    <liu-header>
      <van-search
        v-model.lazy="value"
        placeholder="请输入搜索关键词"
        @change="search"
      />
    </liu-header>
    <div class="content">
      <van-row>
        <van-col
          class="item"
          span="12"
          v-for="(product, index) in list"
          :key="index"
          @click="goDetail(product.id)"
        >
          <div class="item-pro">
            <div class="img">
              <img :src="product.cover" alt="" />
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
import LiuHeader from "@/components/share/LiuHeader.vue";
// 这里是设计的作用域的问题
import { Search, Col, Row } from "vant";
import api from "@/axios/api";
export default {
  components: {
    LiuHeader,
    [Search.name]: Search,
    [Col.name]: Col,
    [Row.name]: Row
  },
  data() {
    return {
      value: "",
      list: []
    };
  },
  methods: {
    search() {
    //   console.log(this.value);
      api.SearchItem({ page: 1, size: 20, key: this.value }).then(data => {
        // console.log(data.data.data);
        this.list = data.data.data;
      });
    },
    goDetail(id) {
      // console.log(id);
      this.$router.push({
        path: "/product",
        query: {
          id
        }
      });
    }
  }
};
</script>

<style>
.item {
  height: 32vh;
  /* background: chartreuse; */
  padding: 6px;
}
.item .item-pro {
  width: 100%;
  height: 100%;
  /* background: teal; */
  border-radius: 6px;
  border: 1px solid gray;
  box-shadow: 1px 1px 4px 0px gray;
}
.img {
  height: 70%;
  /* background: red; */
  margin-top: 10px;
}
img {
  width: 100%;
  height: 100%;
}
.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 900;
}
.price {
  padding: 0 10px;
  color: red;
}
</style>
