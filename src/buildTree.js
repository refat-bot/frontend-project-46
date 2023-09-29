import _ from 'lodash';

const buildTreeAST = (data1, data2) => {
  const sortedKeys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));
  return sortedKeys.map((key) => {
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key, children: buildTreeAST(data1[key], data2[key]), type: 'nested' };
    }
    if (!_.has(data1, key)) {
      return { key, value: data2[key], type: 'added' };
    }
    if (!_.has(data2, key)) {
      return { key, value: data1[key], type: 'removed' };
    }
    if (data1[key] !== data2[key]) {
      return {
        key, value1: data1[key], value2: data2[key], type: 'changed',
      };
    }
    return { key, value: data1[key], type: 'unchanged' };
  });
};

const buildTree = (obj1, obj2) => {
  const rootWrapper = {
    type: 'root',
    children: buildTreeAST(obj1, obj2),
  };
  return rootWrapper;
};

export default buildTree;
