const fs = require('fs');

//load data from JSON file
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

function generateSvgElements(gpus) {
    const gpuKeys = Object.keys(gpus);

    // Calculate the maximum FPS value for scaling
    const maxFps = Math.max(...gpuKeys.map(key => Math.max(gpus[key].fps, gpus[key].fps2)));
  
    const barWidthFactor = 400 / maxFps;
  
    // Generate SVG elements for GPUs
    const svgElements = gpuKeys.map((key, index) => {
      const gpu = gpus[key];
      const bar1Width = gpu.fps * barWidthFactor;
      const bar2Width = gpu.fps2 * barWidthFactor;
      return `
        <text x="20" y="${80 + index * 100}" font-family="Arial" font-size="16">${gpu.name}</text>
        <rect x="300" y="${60 + index * 100}" width="${bar1Width}" height="40" fill="blue" />
        <text x="${310 + bar1Width}" y="${85 + index * 100}" font-family="Arial" font-size="12">${gpu.fps} FPS</text>
        <rect x="300" y="${100 + index * 100}" width="${bar2Width}" height="40" fill="green" />
        <text x="${310 + bar2Width}" y="${125 + index * 100}" font-family="Arial" font-size="12">${gpu.fps2} FPS</text>
      `;
    }).join('');
  
    return svgElements;
}

function generateSvgTemplate(cpu) {
    //rename cpu from parameter to to chart
    const chart = cpu;
    return `
      <svg width="800" height="${70 + (Object.keys(chart.gpus).length * 100)}" xmlns="http://www.w3.org/2000/svg">
        <text x="20" y="30" font-family="Arial" font-size="20">${chart.name}</text>
        <text x="20" y="60" font-family="Arial" font-size="16">${chart.cpu}</text>
        ${generateSvgElements(chart.gpus)}
      </svg>
    `;
  }
  
  data.forEach((cpu, index) => {
    const svgTemplate = generateSvgTemplate(cpu);
    const outputFile = `chart_cpu${index + 1}.svg`;
    fs.writeFileSync(outputFile, svgTemplate);
    console.log(`Chart saved to ${outputFile}`);
  });
