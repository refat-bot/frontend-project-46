import makePlain from './plain.js';
import makeStylish from './stylish.js';

const getFormattedData = (data, format) => {
  switch (format) {
    case 'stylish':
      return makeStylish(data);
    case 'plain':
      return makePlain(data);
    case 'json':
      return JSON.stringify(data);
    default:
      throw new Error(`Invalid file format type: '.${format}'! Try supported file formats. Use "gendiff -h" to see all options.`);
  }
};

export default getFormattedData;
