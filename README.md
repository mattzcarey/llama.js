# llama.js

> an experiment to run llama.cpp through a javascript runtime at near native speeds

## Installation

- Clone the repo recursively
- Install zig to the path
- cd into llama.cpp.zig

- Download a model

```bash
huggingface-cli download NousResearch Hermes-2-Pro-Mistral-7B-GGUF Hermes-2-Pro-Mistral-7B.Q4_0.gguf --local-dir models
```

- Run the model with llama.cpp.zig

```bash
zig build run-simple -Doptimize=ReleaseFast -- --model_path "./models/Hermes-2-Pro-Mistral-7B.Q4_0.gguf" --prompt "Hello! I am AI, and here are the 10 things I like to think about:"
```

- Build the library (zig bindings)

```bash
zig build
```

## Usage

- cd back to root and run the index.ts

```bash
bun run index.ts
```
