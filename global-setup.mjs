import { createRequire } from 'module';
import { resolve as pathResolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));

export function resolve(specifier, context, defaultResolve) {
  if (specifier === 'vite-node/client') {
    return {
      url: `file://${pathResolve(__dirname, 'node_modules/vite-node/dist/client.mjs')}`
    };
  }
  return defaultResolve(specifier, context, defaultResolve);
}

globalThis.D = globalThis;
globalThis.D.URL = globalThis.URL;
globalThis.D.Blob = class Blob {};
globalThis.D.atob = (str) => Buffer.from(str, 'base64').toString('binary');
globalThis.D.btoa = (str) => Buffer.from(str, 'binary').toString('base64');

// Ensure URL.createObjectURL is defined
if (!globalThis.D.URL.createObjectURL) {
  globalThis.D.URL.createObjectURL = () => 'blob:mock-object-url';
}
if (!globalThis.D.URL.revokeObjectURL) {
  globalThis.D.URL.revokeObjectURL = () => {};
}

// Mock document object
globalThis.document = {
  createElement: (tagName) => {
    if (tagName === 'canvas') {
      return {
        getContext: () => ({
          fillRect: () => {},
          drawImage: () => {},
          getImageData: () => ({ data: new Uint8ClampedArray(4) }),
        }),
        width: 0,
        height: 0,
      };
    }
    if (tagName === 'video') {
      return {
        setAttribute: () => {},
        appendChild: () => {},
        style: {},
        width: 640,
        height: 480,
      };
    }
    return {
      setAttribute: () => {},
      appendChild: () => {},
      style: {},
    };
  },
  getElementById: () => null,
  body: {
    appendChild: () => {},
  },
  addEventListener: () => {},
  removeEventListener: () => {},
};

// Mock window object
globalThis.window = globalThis;
globalThis.window.innerWidth = 1024;
globalThis.window.innerHeight = 768;
globalThis.window.devicePixelRatio = 1;
globalThis.window.addEventListener = () => {};
globalThis.window.removeEventListener = () => {};

// Mock screen object
globalThis.window.screen = {
  width: 1024,
  height: 768,
};

// Mock localStorage
globalThis.localStorage = {
  storage: {},
  getItem: function (key) {
    return this.storage[key] || null;
  },
  setItem: function (key, value) {
    this.storage[key] = value;
  },
  removeItem: function (key) {
    delete this.storage[key];
  },
  clear: function () {
    this.storage = {};
  },
};

// Mock dispatchEvent
globalThis.dispatchEvent = () => {};

// mock database
globalThis.database = {
  storage: {},
  getItem: function (key) {
    return this.storage[key] || null;
  },
  setItem: function (key, value) {
    this.storage[key] = value;
  },
  removeItem: function (key) {
    delete this.storage[key];
  },
  clear: function () {
    this.storage = {};
  },
};

// Logging to verify setup
console.log('globalThis.D:', globalThis.D);
console.log('globalThis.D.URL:', globalThis.D.URL);
console.log('globalThis.D.URL.createObjectURL:', globalThis.D.URL.createObjectURL);
console.log('globalThis.D.URL.revokeObjectURL:', globalThis.D.URL.revokeObjectURL);
console.log('globalThis.document:', globalThis.document);
console.log('globalThis.window:', globalThis.window);
console.log('globalThis.window.screen:', globalThis.window.screen);
console.log('globalThis.localStorage:', globalThis.localStorage);
console.log('globalThis.dispatchEvent:', globalThis.dispatchEvent);
console.log('globalThis.database:', globalThis.database);