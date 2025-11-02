# Merge Time Ranges (NodeJS)

This module merges system activity time ranges.  
It combines ranges that overlap or are separated by a small gap (threshold).

### Usage

```js
const { mergeTimeRanges } = require('./mergeTimeRanges.js');

const ranges = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100]
];

const threshold = 200;
console.log(mergeTimeRanges(ranges, threshold));
