# hash-numbers

Goal is to turn incrementing numbers into harder to guess numbers. Big plus would be to be able to decode encoded result
back to original number.

### Usage

```javascript
const HashNumber = require("hash-numbers");
const hashNumber = new HashNumber({
    algorithm: 'DEFAULT',
    salt: 'Czb8ZQja',
    prefix: 'HN-',
    suffix: '',
});
console.log(hashNumber.encode(1));
console.log(hashNumber.encode(2));
console.log(hashNumber.encode(3));
```

### Features

* Prefix and suffix option.
* Salted/seeded encoding result.
* ALGORITHM option to support more future ideas.

### Sample results

#### DEFAULT

```text
717 / 1
1434 / 2
2151 / 3
2868 / 4
3585 / 5
4302 / 6
5019 / 7
5736 / 8
6453 / 9
```

* Salt affects to the length of encoded value.

#### CRC32

```text
1578314305
954565637
1340257427
779738832
1501490778
1065893916
1217360010
667914981
1355326067
```

* Encode only.

#### SKR_KOBLITZ_ALGO

```text
7410851152308010 / 1
7302372875975395 / 2
7299112721931640 / 3
7299117621102511 / 4
7299117543837988 / 5
7299117540150787 / 6
7299117539959456 / 7
```
