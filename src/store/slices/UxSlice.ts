import { lensPath, over } from "rambda";
import { DeepPick } from "ts-deep-pick";
import { StateCreator } from "zustand";

import { UxSlice } from "./slices.types";

export const createUxSlice: StateCreator<
  UxSlice,
  [["zustand/persist", UxSlice]],
  []
> = (set) => ({
  ux: {
    updateState: (path: Array<string>, value: any) =>
      set((state: any) => over(lensPath(path), () => value, state)),
    loginModal: {
      isOpen: false,
      setIsOpen: (isOpen: boolean) => {
        set((state: UxSlice) =>
          over(lensPath("ux.loginModal.isOpen"), () => isOpen, state)
        );
      },
    },
    sendTokenModal: {
      isOpen: false,
      setIsOpen: (value: boolean) => {
        set((state: UxSlice) =>
          over(lensPath("ux.sendTokenModal.isOpen"), () => value, state)
        );
      },
    },
  },
});

type PersistedUxSlice = DeepPick<
  UxSlice,
  "ux.loginModal.isOpen" | "ux.sendTokenModal.isOpen"
>;

export const partializeUxSlice = (state: UxSlice): PersistedUxSlice => ({
  ux: {
    loginModal: {
      isOpen: state.ux.loginModal.isOpen,
    },
    sendTokenModal: {
      isOpen: state.ux.sendTokenModal.isOpen,
    },
  },
});
