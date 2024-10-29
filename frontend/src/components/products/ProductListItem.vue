<script setup>
import {useCartStore} from '../../stores/useCartStore.js'
const cartStore = useCartStore()
defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="col-md-4 mb-4">
        <div class="card h-100">
            <img :src="product.image" :alt="product.name" class="card-img-top"/>
            <div class="card-body">
                <div class="cart-title">
                    {{ product.name }}
                </div>
                <p class="card-text">{{ product.desc }}</p>
                <p>
                    <span class="fw-bold text-danger">${{ product.price }}</span>
                </p>
                <button class="btn btn-primary" type="button" @click="cartStore.addToCart(product)">
                    <i class="bi bi-cart-check"></i> add to cart
                </button>
            </div>
        </div>
    </div>
</template>