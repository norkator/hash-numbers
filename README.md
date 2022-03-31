# hash-numbers

Goal is to turn incrementing number into harder to guess numbers. Big plus would be to be able to decode encoded result
back to original number.

### Usage

```javascript
const HashNumber = require("hash-numbers");
const hashNumber = new HashNumber({
    algorithm: 'CRC32',
    salt: 'something1234',
    prefix: 'HN-'
});
console.log(hashNumber.encode(1));
```

### Features

* Prefix and suffix option.
* Salted/seeded encoding result.
* ALGORITHM option to support more future ideas.

