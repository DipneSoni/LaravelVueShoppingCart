<script setup>
import { reactive, onMounted } from 'vue'
import api from '@/api/axios';
import ProductList from '@/components/products/ProductList.vue';
import { useToast } from 'vue-toastification'
const toast = useToast()
const data = reactive({
  products:[]
})
const fetchAllProducts= async()=>{
  try {
    const res = await api('/api/products')
    data.products = res.data.data
  } catch (error) {
    toast.error(error.message, { timeout: 2000 })
  }
}
onMounted(() => {
  fetchAllProducts()
})
</script>
<template>
  <div class="container">
    <ProductList :products="data.products" />
  </div>
</template>
