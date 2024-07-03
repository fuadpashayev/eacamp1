import { create } from "zustand";

const useCountStore = create((set) => ({
  count: 0,
  increase: (increaseBy = 1) =>
    set((state) => ({ count: state.count + increaseBy })),
}));

export default useCountStore;
