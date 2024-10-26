

import { instantiate } from './kotlin-wasm-fibonacci-example-wasm-js.uninstantiated.mjs';

const exports = (await instantiate({

})).exports;

export default new Proxy(exports, {
    _shownError: false,
    get(target, prop) {
        if (!this._shownError) {
            this._shownError = true;
            if (typeof console !== "undefined") {
                console.error("Do not use default import. Use corresponding named import instead.")
            }
        }
        return target[prop];
    }
});
export const {
    main,
    fibonacciKotlin,
    _initialize,
    memory
} = exports;

