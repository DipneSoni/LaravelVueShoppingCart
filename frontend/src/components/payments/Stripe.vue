<script setup>
import api from '@/api/axios';
import { useCartStore } from '@/stores/useCartStore';
import { useToast } from 'vue-toastification'
const toast = useToast()
const cartStore = useCartStore()
const fetchPaymentUrl=async()=>{
  try {
    const res = await api.post("/api/create-checkout-session",{
      'items': cartStore.getCartItems,
      'successUrl':'http://localhost:5173/payment/success',
      'cancelUrl': 'http://localhost:5173/payment/cancel',
    })
    window.location.href=res.data.url
  } catch (error) {
    toast.error(error.message, { timeout: 2000 })
  }
}
</script>
<template>
  <button class="btn btn-primary float-end" @click="fetchPaymentUrl()">Pay now</button>
</template>