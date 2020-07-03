<template>
  <div>
    <liu-header></liu-header>
    <liu-product-list></liu-product-list>
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
            
        }
    },
    components: {
        'liuHeader':Header,
        'liuFooter':Footer,
        'liuProductList':ProductList,
    },
    methods: {
        
    },
};
</script>

<style>

</style>
