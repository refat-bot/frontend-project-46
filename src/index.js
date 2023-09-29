import process from 'process';
import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildTree from './buildTree.js';
import getFormattedData from './formatters/index.js';

const getData = (filePath) => {
  const fullPath = path.resolve(process.cwd(), filePath);
  const rawData = fs.readFileSync(fullPath, 'utf-8');
  return rawData;
};

const getExtname = (file) => path.extname(file).slice(1);

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parse(getData(filepath1), getExtname(filepath1));
  const data2 = parse(getData(filepath2), getExtname(filepath2));

  const diff = buildTree(data1, data2);
  const formattedData = getFormattedData(diff, format);
  return formattedData;
};

export default gendiff;
