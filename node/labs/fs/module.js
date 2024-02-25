const path = require('path');

const getFileExt = () => {
  return path.extname(path.basename(__filename));
}

console.log(getFileExt());
