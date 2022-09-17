import create from 'zustand';
import axios from 'axios';


export const useProductStore = create((set) => ({

  products: [],
  getProducts: async () => {
    const response = await axios.get(API_URL + '/products')
    set({ products: response.data })
  }


}))



