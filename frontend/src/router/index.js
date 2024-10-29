import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '@/views/CartView.vue'
import PaymentSuccess from '@/views/PaymentSuccess.vue'
import PaymentCancel from '@/views/PaymentCancel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    {
      path: '/payment/success',
      name: 'payment-success',
      component: PaymentSuccess,
    },
    {
      path: '/payment/cancel',
      name: 'payment-cancel',
      component: PaymentCancel,
    }
  ],
})

export default router
