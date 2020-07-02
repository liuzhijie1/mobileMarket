<template>
  <div>
    <liu-header></liu-header>
    <liu-product-list :productList="productList"></liu-product-list>
    <liu-Footer></liu-Footer>
  </div>
</template>

<script>
import api from '@/axios/api';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import ProductList from '@/components/home/ProductList';
export default {
    data() {
        return {
            productList:[],
        }
    },
    components: {
        'liuHeader':Header,
        'liuFooter':Footer,
        'liuProductList':ProductList,
    },
    mounted () {
        api.getProduct().then(data=>{
            this.productList = data.data.data;
        });
    },
};
</script>

<style>

</style>
