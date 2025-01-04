export interface UserSlice {
  user: {
    auth: {
      authToken: {
        value: string;
        expirationDate: Date;
      };
      bearerToken: {
        value: string;
        expirationDate: Date;
      };
    };
  };
}

export interface UxSlice {
  ux: {
    updateState: (path: Array<string>, value: any) => void;
    loginModal: {
      loginModalIsOpen: boolean;
      setLoginModalIsOpen: (isOpen: boolean) => void;
    };
  };
}

export type DappStoreType = UserSlice & UxSlice;
