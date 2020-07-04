<template>
  <div class="city-select">
    <liu-header>
      <span slot="title">{{ $store.getters.mylocation }}</span>
      选择城市
    </liu-header>
    <div class="content">
      <van-index-bar>
        <template v-for="(value, key) in citylist.cities">
          <van-index-anchor :index="key" :key="key" />
          <van-cell :title="item.name" v-for="(item,index) in value" :key="index" @click="changCity(item.name)"/>
        </template>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import LiuHeader from "@/components/share/LiuHeader.vue";
import { IndexBar, IndexAnchor, Cell } from "vant";
export default {
  data() {
    return {};
  },
  computed: {
    citylist() {
      console.log(this.$store.getters.myCitySelect);
      return this.$store.getters.myCitySelect;
    }
  },
  methods: {
      changCity(city) {
        //   console.log(city);
          this.$store.commit('setLocation',city);
          this.$router.back();
      }
  },
  components: {
    LiuHeader,
    [IndexBar.name]: IndexBar,
    [IndexAnchor.name]: IndexAnchor,
    [Cell.name]: Cell
  }
};
</script>

<style scoped></style>
