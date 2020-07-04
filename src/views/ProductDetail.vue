<template>
  <div class="product-detail">
    <liu-header>商品详情</liu-header>
    <div class="main">
      <div class="info">
        <div class="swipe">
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in lazyImage" :key="index">
              <img v-lazy="image.path" />
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="intro">
          <div class="content">
            <p>{{ name }}</p>
            <p>{{ price | money }}</p>
          </div>
          <div class="detail">
            <p>
              <span>免运费&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
              ><span>剩余: {{ stock }}</span>
            </p>
            <p>
              <span>销量： {{ sales }}</span
              ><span>收藏: {{ likes }}</span>
            </p>
          </div>
          <div class="content-tab">
            <van-tabs>
              <van-tab title="图片">
                <img
                  v-lazy="img.path"
                  alt=""
                  v-for="(img, index) in detailImgList"
                  :key="index"
                />
              </van-tab>
              <van-tab title="参数">
                <div class="params">
                  <p v-for="(item, index) in properties" :key="index">
                    <span>{{ item.name }}</span>
                    <span>{{ item.detail }}</span>
                  </p>
                </div>
              </van-tab>
            </van-tabs>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <van-goods-action>
        <!-- <van-goods-action-icon icon="star" text="已收藏"  color="#ff5000"/> -->
        <van-goods-action-icon icon="star-o" text="收藏" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-button
          color="#be99ff"
          type="warning"
          text="加入购物车"
        />
        <van-goods-action-button
          color="#7232dd"
          type="danger"
          text="立即购买"
        />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import api from "@/axios/api";
import LiuHeader from "@/components/share/LiuHeader.vue";
import {
  Swipe,
  SwipeItem,
  Tab,
  Tabs,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from "vant";
export default {
  data() {
    return {
      ProductDetail: ""
    };
  },
  created() {
    // let data;
      api.getDetail(this.$route.query.id).then(data => {
        // console.log(data);
        this.ProductDetail = data.data;
      });
  },
  computed: {
    lazyImage() {
      return this.ProductDetail.imgList;
    },
    name() {
      return this.ProductDetail.name;
    },
    price() {
      return this.ProductDetail.price;
    },
    likes() {
      return this.ProductDetail.likes;
    },
    sales() {
      return this.ProductDetail.sales;
    },
    stock() {
      return this.ProductDetail.stock;
    },
    detailImgList() {
      return this.ProductDetail.detailImgList;
    },
    properties() {
      return this.ProductDetail.properties;
    }
  },
  components: {
    LiuHeader,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  }
};
</script>

<style>
.main {
  height: calc(100vh - 16vh);
  overflow: auto;
}
.footer {
  height: 8vh;
  background: #eee;
}
.swiper,
.van-swipe {
  width: 100%;
  height: 45vh;
}
img {
  width: 100%;
  height: 100%;
}
.content {
  border-bottom: 1px solid #ebedf0;
}
.content p:first-of-type {
  padding: 15px;
  line-height: 24px;
  font-size: 14px;
}
.content p:last-of-type {
  padding: 0 15px 10px 15px;
  color: red;
  font-size: 14px;
}
.detail p {
  padding: 10px 15px;
  border-bottom: 1px solid #ebedf0;
  font-size: 12px;
}
.detail p > span:first-of-type {
  margin-right: 30vw;
}
.params {
  padding: 10px 15px;
}
.params p {
  border-bottom: 1px solid #ebedf0;
  padding: 10px 0;
  font-size: 12px;
  font-weight: 300;
}
.params p span:first-of-type {
  display: inline-block;
  width: 45vw;
}
</style>
