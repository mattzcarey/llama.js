import { dlopen, FFIType } from "bun:ffi";

const libPath =
  "/Users/matt/Documents/Github/llama.js/llama.cpp.zig/zig-out/lib/libllama_simple.dylib";

const lib = dlopen(libPath, {
  run_simple: {
    args: [
      FFIType.cstring, // model_path
      FFIType.cstring, // prompt
      FFIType.u64, // max_len
      FFIType.u32, // seed
      FFIType.u64, // threads
      FFIType.u64, // threads_batch
      FFIType.i32, // gpu_layers
    ],
    returns: FFIType.void,
  },
});

function runSimple(
  modelPath: string,
  prompt: string,
  maxLen: number = 1024,
  seed: number = 0,
  threads: number = 0,
  threadsBatch: number = 0,
  gpuLayers: number = 0
) {
  lib.symbols.run_simple(
    Buffer.from(modelPath + "\0"),
    Buffer.from(prompt + "\0"),
    maxLen,
    seed,
    threads,
    threadsBatch,
    gpuLayers
  );
}

// Example usage
const modelPath = "/Users/matt/Documents/Github/llama.js/models/Hermes-2-Pro-Mistral-7B.Q4_0.gguf";
const prompt =
  "Hello! I am AI, and here are the 10 things I like to think about:";

console.log("Starting LLM inference...");
runSimple(modelPath, prompt);
console.log("Inference completed.");
