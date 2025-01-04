import { lensPath, over } from "rambda";
import { DeepPick } from "ts-deep-pick";
import { StateCreator } from "zustand";

import { UserSlice } from "./slices.types";

export const createUserSlice: StateCreator<
  UserSlice,
  [["zustand/persist", UserSlice]],
  []
> = (set) => ({
  user: {
    updateState: (path: Array<string>, value: any) =>
      set((state: any) => over(lensPath(path), () => value, state)),
    auth: {
      authToken: {
        value: "",
        expirationDate: new Date(),
      },
      bearerToken: {
        value: "",
        expirationDate: new Date(),
      },

    },
  },
});

type PersistedUserSlice = DeepPick<
  UserSlice,
  | "user.auth.authToken.value"
  | "user.auth.authToken.expirationDate"
  | "user.auth.bearerToken.value"
  | "user.auth.bearerToken.expirationDate"
>;

export const partializeUserSlice = (state: UserSlice): PersistedUserSlice => ({
  user: {
    auth: {
      authToken: {
        value: state.user.auth.authToken.value,
        expirationDate: state.user.auth.authToken.expirationDate,
      },
      bearerToken: {
        value: state.user.auth.bearerToken.value,
        expirationDate: state.user.auth.bearerToken.expirationDate,
      },
    },
  },
});
