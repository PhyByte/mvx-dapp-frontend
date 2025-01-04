/* @ts-ignore */
import immer from "immer";
import merge from "ts-deepmerge";
import { create } from "zustand";
import { persist } from "zustand/middleware";

import { DappStoreType } from "./slices/slices.types";
import { createUserSlice, partializeUserSlice } from "./slices/UserSlice";
import { createUxSlice, partializeUxSlice } from "./slices/UxSlice";

const useDappStore = create<DappStoreType>()(
  persist(
    immer((...a) => ({
      ...createUserSlice(
        // @ts-ignore
        ...a
      ),
      ...createUxSlice(
        // @ts-ignore
        ...a
      ),
    })),
    {
      name: "dapp-store",
      merge: (persistedState, currentState) =>
        merge(currentState, persistedState),
      partialize: (state) => ({
        ...partializeUserSlice(state),
        ...partializeUxSlice(state),
      }),
    }
  )
);

export default useDappStore;
