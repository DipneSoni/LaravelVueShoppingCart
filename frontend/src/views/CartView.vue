<script setup>
import Stripe from '@/components/payments/Stripe.vue';
import { useCartStore } from '@/stores/useCartStore';
import { computed } from 'vue';
const cartStore = useCartStore()
const formattedCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}
const total = computed(() => {
    let sum = 0;
    for (let i = 0; i < cartStore.getCartItems.length; i++) {
        sum += cartStore.getCartItems[i].quantity * cartStore.getCartItems[i].price;
    }
    return sum;
});
</script>

<template>
    <div class="container">
        <div class="row my-4">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Subtotal</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in cartStore.getCartItems" :key="item.id">
                                <td>{{ item.id }}</td>
                                <td><img :src="item.image" class="fluid rounded" width="64" height="48" /></td>
                                <td>{{ item.name }}</td>
                                <td><i class="bi bi-caret-up" @click="cartStore.increasedQty(item)"></i> {{
                                    item.quantity }}
                                    <i class="bi bi-caret-down" @click="cartStore.decrementQty(item)"></i>
                                </td>
                                <td>{{ formattedCurrency(item.price) }}</td>
                                <td>{{ formattedCurrency(item.quantity * item.price) }}</td>
                                <td><i class="bi bi-cart-x" @click="cartStore.removeFromCart(item)"></i></td>
                            </tr>
                            <tr>
                                <td colspan="4"></td>
                                <th>Total</th>
                                <th>{{ formattedCurrency(total)}}</th>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-if="total>0">
                    <Stripe />
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<style scoped>
i {
    cursor: pointer;
}
</style>