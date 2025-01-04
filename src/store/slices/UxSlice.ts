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
      loginModalIsOpen: false,
      setLoginModalIsOpen: (isOpen: boolean) => {
        set((state: UxSlice) =>
          over(lensPath("ux.loginModal.loginModalIsOpen"), () => isOpen, state)
        );
      },
    },
  },
});

type PersistedUxSlice = DeepPick<UxSlice, "ux.loginModal.loginModalIsOpen">;

export const partializeUxSlice = (state: UxSlice): PersistedUxSlice => ({
  ux: {
    loginModal: {
      loginModalIsOpen: state.ux.loginModal.loginModalIsOpen,
    },
  },
});
