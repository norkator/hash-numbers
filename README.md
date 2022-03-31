# hash-numbers

Goal is to turn incrementing number into harder to guess numbers. Big plus would be to be able to decode encoded result
back to original number.

### Usage

```javascript
const HashNumber = require("hash-numbers");
const hashNumber = new HashNumber({
    algorithm: 'DEFAULT',
    salt: 'rvQAyZG4',
    prefix: 'HN-'
});
console.log(hashNumber.encode(1));
console.log(hashNumber.encode(2));
console.log(hashNumber.encode(3));
```

### Features

* Prefix and suffix option.
* Salted/seeded encoding result.
* ALGORITHM option to support more future ideas.

