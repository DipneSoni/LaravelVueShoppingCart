<script setup>
import { useCartStore } from '@/stores/useCartStore';
const cartStore = useCartStore();
</script>

<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <RouterLink class="navbar-brand" :to="{name:'home'}">
                    <i class="bi bi-cart h1"></i>
                </RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <RouterLink class="nav-link active" aria-current="page" :to="{name:'home'}">
                                <i class="bi bi-house-door-fill"></i> Home
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" :to="{name:'cart'}">
                                <i class="bi bi-cart-check"></i> ({{ cartStore.countCartItems }})
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
