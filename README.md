# chartBuilder
Build Multiple SVG charts from JSON input. Original idea of @milanfon

# Disclaimer
As i already said, the original idea is from @milanfon. But i completely rewrote the code and make it more readable and more flexible. I also added split bars and colors. More in TODO section.

# Usage
## Input
The input is a JSON file. The structure is as follows:
```json
[
    {
      "name": "CoD: MW II – 1080p – Balanced preset [FPS]",
      "cpu": "Intel Core i7-7700K @ 4.20GHz",
      "gpus": {
        "gpu1": {
          "name": "NVIDIA GeForce GTX 1080 Ti",
          "fps": 22,
          "fps2": 34
        },
        "gpu2": {
          "name": "NVIDIA GeForce GTX 2080 Ti",
          "fps": 90,
          "fps2": 32
        },
        "gpu3": {
          "name": "NVIDIA GeForce GTX 4080",
          "fps": 67,
          "fps2": 12
        }
           // and so on ....
      }
    },
    {
      "name": "CoD: MW II – 1080p – Balanced preset [FPS]",
      "cpu": "Intel Core i7-1999 @ 4.20GHz",
      "gpus": {
        "gpu1": {
          "name": "NVIDIA GeForce GTX 400 Ti",
          "fps": 22,
          "fps2": 34
        },
        "gpu2": {
          "name": "NVIDIA GeForce GTX 3080 Ti",
          "fps": 90,
          "fps2": 32
        }
        // and so on ....
        
      }
    }
  ]
```

## Run
```bash
node app.js
```

## Output
output are the svg files with name in this format:
```bash
chart_cpu1.svg
chart_cpu2.svg
chart_cpu3.svg
```

