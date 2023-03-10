export const isServer = typeof window === 'undefined';

export const isClient = !isServer;

export const NODE_ENV = 'development';

export const PORT = process.env.PORT || 3000;
