import { lensPath, over } from "rambda";
import axios from "axios";
import { DeepPick } from "ts-deep-pick";
import { StateCreator } from "zustand";

import { UserSlice } from "./slices.types";
import { getIsLoggedIn, logout } from "@multiversx/sdk-dapp/utils";

export const createUserSlice: StateCreator<
  UserSlice,
  [["zustand/persist", UserSlice]],
  []
> = (set, get) => ({
  user: {
    updateState: (path: Array<string>, value: any) => {
      // Update a specific part of the state using rambda's lensPath
      set((state: any) => over(lensPath(path), () => value, state));
    },
    refresh: async () => {
      // Refresh authentication if the user is logged in
      if (getIsLoggedIn()) {
        console.log("Refreshing user state...");
        get().user.updateState(["user", "wallet", "initialized"], true);
      }
    },
    reset: () => {
      // Reset authentication and wallet state
      console.log("Resetting user state...");
      get().user.auth.reset();
      get().user.updateState(["user", "wallet", "initialized"], false);
    },
    auth: {
      reset: () => {
        // Reset auth tokens and expiration dates
        console.log("Resetting auth tokens...");
        get().user.updateState(["user", "auth", "authToken", "value"], "");
        get().user.updateState(
          ["user", "auth", "authToken", "expirationDate"],
          new Date(Date.now() + 31536000000) // Set expiration one year from now
        );
        get().user.updateState(["user", "auth", "bearerToken", "value"], "");
        get().user.updateState(
          ["user", "auth", "bearerToken", "expirationDate"],
          new Date(Date.now() + 31536000000)
        );
      },
      refresh: async () => {
        // Refresh the auth token by calling the backend
        try {
          console.log("Refreshing auth token...");
          const { data } = await axios.get(`/api/auth/generateToken`);
          if (data.error) {
            console.error("Error in token refresh:", data.error);
            return;
          }

          // Update state with new token and expiration
          get().user.updateState(["user", "auth", "authToken", "value"], data.token);
          get().user.updateState(
            ["user", "auth", "authToken", "expirationDate"],
            new Date(data.expires)
          );
        } catch (error) {
          console.error("Error refreshing auth token:", error);
        }
      },
      verifySignature: async (address: string, signature: string, authToken: string) => {
        // Verify the token signature with the backend
        console.log("Verifying signature...");
        if (!get().user.auth.bearerToken.value && authToken && signature) {
          try {
            const { data } = await axios.get(
              `/api/auth/verifyToken/${address}/${authToken}/${signature}`
            );

            // Update state with the new bearer token
            get().user.updateState(
              ["user", "auth", "bearerToken", "value"],
              data.bearerToken
            );

            // Refresh user data after obtaining the bearer token
            console.log("Signature verified, refreshing user state...");
            get().user.refresh();
          } catch (error) {
            console.error("Error verifying token:", error);
            get().user.reset();
            logout();
          }
        }
      },
      authToken: {
        value: "", // Initial auth token value
        expirationDate: new Date(), // Initial expiration date
      },
      bearerToken: {
        value: "", // Initial bearer token value
        expirationDate: new Date(), // Initial expiration date
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
