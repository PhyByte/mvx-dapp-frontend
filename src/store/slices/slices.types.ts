export interface UserSlice {
  user: {
    updateState: (path: Array<string>, value: any) => void;
    refresh: (signature?: string) => void;
    reset: () => void;
    auth: {
      reset: () => void;
      refresh: () => void;
      authToken: {
        value: string;
        expirationDate: Date;
      };
      bearerToken: {
        value: string;
        expirationDate: Date;
      };
      verifySignature: (
        address: string,
        signature: string,
        authToken: string,
      ) => void;
    };
  };
}

export interface UxSlice {
  ux: {
    updateState: (path: Array<string>, value: any) => void;
    loginModal: {
      isOpen: boolean;
      setIsOpen: (isOpen: boolean) => void;
    };
    sendTokenModal: {
      isOpen: boolean;
      setIsOpen: (value: boolean) => void;
    };
  };
}

export type DappStoreType = UserSlice & UxSlice;
