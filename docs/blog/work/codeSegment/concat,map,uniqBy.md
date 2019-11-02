# 代码段学习

```js
const newListDataSource = uniqBy(
      listDataSource.concat(selectedRows.map(o => ({ key: uuidv4(), ...o }))),
      'supplierCompanyId'
    );
```

说明：

- uniqby: lodash API 去重，第一个参数为一个数组，第二个参数为一个iteratee方法，[参考](https://www.cnblogs.com/hahazexia/p/9834888.html)
- concat: ES5数组拼接
- map: 数组遍历处理