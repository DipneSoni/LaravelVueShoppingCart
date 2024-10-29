<script setup>
import axios from 'axios'
import { useCartStore } from '@/stores/useCartStore';
import { useToast } from 'vue-toastification'
const toast = useToast()
const cartStore = useCartStore()
const fetchPaymentUrl=async()=>{
  try {
    const res = await axios.post("http://127.0.0.1:8001/api/create-checkout-session",{
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