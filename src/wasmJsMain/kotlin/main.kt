import kotlin.wasm.WasmExport

/**
 * メイン関数は、Wasmモジュールのエントリーポイントとして呼び出される。
 * Wasmモジュールがローディングされると、この関数が呼び出される。
 */
fun main() {
    println("Hello from Kotlin/Wasm")
}

/**
 * フィボナッチ数列を計算する関数
 * JavaScriptから呼び出すために、@WasmExportアノテーションを付与している。
 */
@WasmExport
fun fibonacciKotlin(n: Int): Int {
    return if (n <= 1) {
        // nが0または1の場合は、nを返す
        n
    } else {
        // nが2以上の場合は、再帰的に計算する
        fibonacciKotlin(n - 1) + fibonacciKotlin(n - 2)
    }
}
