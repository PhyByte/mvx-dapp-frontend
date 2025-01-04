export enum Network {
  MAINNET = "mainnet",
  DEVNET = "devnet",
}

export const MVX_NETWORK: Network = import.meta.env.VITE_MVX_NETWORK as Network;

export const MAINNET_API: string = import.meta.env.VITE_MAINNET_API as string;
export const MAINNET_PROXY = import.meta.env.VITE_MAINNET_PROXY;


export const WALLET_CONNECT_ID = import.meta.env.VITE_WALLET_CONNECT_ID as string;