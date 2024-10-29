import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'
const toast = useToast()

export const useCartStore = defineStore('cart',{
    state:()=>{
        return {
            cartItems:[]
        }
    },
    getters:{
        countCartItems(state){
            return state.cartItems.length
        },
        getCartItems(state){
            return state.cartItems
        },
    },
    actions:{
        addToCart(item){
            const index = this.cartItems.findIndex(product => product.id === item.id)
            if(index !== -1){
                this.cartItems[index].quantity += 1
                toast.success('Product quantity increased.',{timeout:2000})
            }else{
                item.quantity = 1
                this.cartItems.push(item)
                toast.success('Product added into cart.',{timeout:2000})
            }
        },
        increasedQty(item){
            const index = this.cartItems.findIndex(product => product.id === item.id)
            if(index !== -1){
                this.cartItems[index].quantity += 1
                toast.success('Product quantity increased.',{timeout:2000})
            }else{
                toast.error('Product not found.',{timeout:2000})
            }
        },
        decrementQty(item){
            const index = this.cartItems.findIndex(product => product.id === item.id)
            if(index !== -1){
                this.cartItems[index].quantity -= 1
                if(this.cartItems[index].quantity === 0){
                    this.cartItems.splice(index, 1);
                    toast.success('Product removed from cart.', { timeout: 2000 });
                }else{
                    toast.success('Product quantity decreased.',{timeout:2000})
                }
            }else{
                toast.error('Product not found.',{timeout:2000})
            }
        },
        removeFromCart(item){
            const index = this.cartItems.findIndex(product => product.id === item.id)
            if(index !== -1){
                this.cartItems.splice(index, 1);
                toast.success('Product removed from cart.', { timeout: 2000 });
            }else{
                toast.error('Product not found.',{timeout:2000})
            }
        },
    }
})