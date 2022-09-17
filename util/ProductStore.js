import create from 'zustand';
import axios from 'axios';


export const useProductStore = create((set) => ({

  products: [],
  getProducts: (data) => {
    set({ products: data })
  }


}))



