import axios from "axios";
import { create } from "zustand";

const productListUrl = "https://fakestoreapi.com/products";

const useProductStore = create((set, get) => ({
  products: [],

  setProducts: (newProducts) =>
    set((state) => ({ products: [...state.products, ...newProducts] })),

  getProductsFromApi: async () => {
    try {
      const response = await axios.get(productListUrl);
      get().setProducts(response.data);
    } catch (error) {
      console.log({ error });
    }
  },
}));

// const useProductStoreDetailed = create((set) => {
//   return {
//     products: [],
//     setProducts: (newProducts) => {
//       return set((state) => {
//         return {
//           products: [...state.products, newProducts],
//         };
//       });
//     },
//   };
// });

export default useProductStore;
