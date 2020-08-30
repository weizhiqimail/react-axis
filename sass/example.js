const fs = require('fs');
const sass = require('node-sass');

const result = sass.renderSync({
  file: './index.scss',
  outFile: './output.css',
  sourceMap: true
});

fs.writeFileSync('./output.css', result.css.toString(), 'utf8');

console.log('编译成功');
