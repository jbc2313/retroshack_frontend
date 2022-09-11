import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(persist((set) => ({
  products: [],
  addProduct: (newproduct) => set((state) => ({ products: [
    {
      id: newproduct.id,
      category: newproduct.category,
      sku: newproduct.sku,
      name: newproduct.name,
      price: newproduct.price,
      description: newproduct.description,
      image: newproduct.image,
      quantity: newproduct.quantity,
      rating: newproduct.rating,
      amountInCart: 1,

    },
    ...state.products
  ]})),
  addAmountInCart: (product) => set((state) => ({ products: state.products.map(prod => {
    if(prod.id === product.id) {
      return {
        ...prod,
        amountInCart: amountInCart + 1
      }
    } else {
      return prod
    }
  })})) ,
  decreaseAmountInCart: (product) => set((state) => ({ products: state.products.map(prod => {
    if(prod.id === product.id) {
      return {
        ...prod,
        amountInCart: amountInCart - 1
      }
    } else {
      return prod
    }
  })})) ,
  removeProduct: (product) => set((state) => ({ products: state.products.filter(prod => prod.id !== product.id)})),
  removeAllProducts: () => set({ products: [] }),
})),
{
  name: 'cart-storage',

}
)