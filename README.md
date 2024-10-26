# Kotlin/Wasm Fibonacci Example

This repository is a sample project that calculates the Fibonacci sequence using Kotlin/Wasm(WEBAssembly).  
It is based on JetBrains' [Kotlin/kotlin-wasm-nodejs-template](https://github.com/Kotlin/kotlin-wasm-nodejs-template).

From an HTML file, a Kotlin/Wasm function is called via JavaScript to compute the Fibonacci sequence.  
For comparison purposes, a JavaScript function to calculate the Fibonacci sequence is also implemented to compare the performance between JavaScript and Kotlin/Wasm.

## Tech Stack
- Kotlin
- Kotlin/Wasm
- JavaScript

## Public URL
https://wasm-fibonacci-example.s3.ap-northeast-1.amazonaws.com/kotlin/index.html

## Set up the Environment

Before you begin, make sure you have the necessary IDE set up to run the application.

### IDE

We recommend using [IntelliJ IDEA 2023.1 or later](https://www.jetbrains.com/idea/) for this project.  
It has built-in support for Kotlin/Wasm.

## Build

To build the application:

1. Open the repository in IntelliJ IDEA.
2. Run the application by entering the following Gradle command in the terminal:

   ```bash
   ./gradlew wasmJsNodeRun
   ```

You may encounter a build error, but the artifacts will still be generated successfully.

## Output Directory
After building, files are generated in the following directory:

```
.
└── build
   └── compileSync
         └── wasmJs
             └── main
                 └── developmentExecutable
                     └── kotlin
                          ├── kotlin-wasm-fibonacci-example-wasm-js.mjs
                          ├── kotlin-wasm-fibonacci-example-wasm-js.uninstantiated.mjs
                          ├── kotlin-wasm-fibonacci-example-wasm-js.wasm
                          └── kotlin-wasm-fibonacci-example-wasm-js.wasm.map

```

## File Descriptions

The Fibonacci sequence calculation logic is implemented in `main.kt`, located in `/src/wasmMain/kotlin/`.
Opening `/src/wasmMain/resources/index.html` in a browser displays the Fibonacci calculation application.

## Other Repositories
Rust/Wasm Fibonacci Example: https://github.com/k-negishi/rust-wasm-fibonacci-example