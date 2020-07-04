<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import api from "@/axios/api";
import Vue from "vue";
export default {
  name: "App",
  created() {
    Vue.jsonp(
      "http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location=22.62,114.07&output=json&pois=0"
    ).then(res => {
      // console.log(res.result.addressComponent.street);
      // console.log(res.result.addressComponent.city);
      this.$store.commit("setLocation", res.result.addressComponent.city);
      // this.$store.commit("setLocation", res.result.addressComponent.city);
    });

    api.getCitySelect().then(data => {
      // console.log(data);
      this.$store.commit("setCitySelect", data.data);
    });
    api.getCityArea().then(data => {
      this.$store.commit("setCityArea", data.data);
    });
  }
};
</script>

<style>
@import url(./style.css);
</style>
