console.log('スクリプトがロードされました。');

let fibonacciKotlin;

// Wasmモジュールのインポートを動的に行う
import('../kotlin-wasm-fibonacci-example-wasm-js.mjs')
    .then(module => {
        fibonacciKotlin = module.fibonacciKotlin;
        console.log('Wasmモジュールが正常にインポートされました。');
    })
    .catch(error => {
        console.error('Wasmモジュールのインポートに失敗しました:', error);
    });

/**
 * フィボナッチ数を再帰的に計算する関数（メモ化なし）
 */
function fibonacciJs(n) {
    return n <= 1 ? n : fibonacciJs(n - 1) + fibonacciJs(n - 2);
}

/**
 * フィボナッチ数列を生成する関数
 * @param {number} n - 計算する項数
 * @returns {number[]} フィボナッチ数列の配列
 */
function generateFibonacciJavaScript(n) {
    const sequence = [];
    for (let i = 0; i < n; i++) {
        sequence.push(fibonacciJs(i));
    }
    return sequence;
}

/**
 * フィボナッチ数列を生成する関数（Kotlin Wasm）
 * @param {number} n - 計算する項数
 * @returns {number[]} フィボナッチ数列の配列
 */
function generateFibonacciWasm(n) {
    const sequence = [];
    for (let i = 0; i < n; i++) {
        sequence.push(fibonacciKotlin(i));
    }
    return sequence;
}

function displayResult(method, sequence, time) {
    if (method === 'javaScript') {
        document.getElementById('javaScriptSequence').textContent = sequence.join(', ');
        document.getElementById('javaScriptTime').textContent = `計算にかかった時間: ${time.toFixed(3)} ミリ秒`;
    } else if (method === 'wasm') {
        document.getElementById('wasmSequence').textContent = sequence.join(', ');
        document.getElementById('wasmTime').textContent = `計算にかかった時間: ${time.toFixed(3)} ミリ秒`;
    }
}

/**
 * 計算ボタンのクリックイベントハンドラー
 */
function handleCalculateButtonClick() {
    const input = document.getElementById('numberInput').value;
    const n = parseInt(input, 10);
    console.log('計算する項数:', n);

    // 入力値の検証
    if (isNaN(n) || n < 0) {
        alert('正の整数を入力してください。');
        return;
    }

    // JavaScriptの計算
    const startJavaScript = performance.now();
    const javaScriptSequence = generateFibonacciJavaScript(n);
    const endJavaScript = performance.now();
    const timeJavaScript = endJavaScript - startJavaScript;
    displayResult('javaScript', javaScriptSequence, timeJavaScript);

    // Kotlin Wasmの計算
    const startWasm = performance.now();
    const wasmSequence = generateFibonacciWasm(n);
    const endWasm = performance.now();
    const timeWasm = endWasm - startWasm;
    displayResult('wasm', wasmSequence, timeWasm);
}

/**
 * 初期化関数: イベントリスナーを設定する
 */
function init() {
    const calculateBtn = document.getElementById('calculateBtn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', handleCalculateButtonClick);
        console.log('計算ボタンのイベントリスナーが設定されました。');
    } else {
        console.error('計算ボタンが見つかりません。');
    }
}

// ページが読み込まれたら初期化関数を実行
document.addEventListener('DOMContentLoaded', init);
