<script setup>
import ProductListItem from './ProductListItem.vue';
defineProps({
    products: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="row my-4 mx-1">
        <ProductListItem v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>