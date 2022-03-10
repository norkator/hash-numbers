import {HashNumbers, HashParamsInterface} from './src/hash-numbers'

const params: HashParamsInterface = {
    algorithm: 'CRC32',
    salt: 'Test123',
    prefix: 'HN-',
    suffix: ''
}
const hashNumber = new HashNumbers(params);

for (let i = 1; i < 20; i++) {
    const encoded = hashNumber.encode(i);
    const decoded = hashNumber.decode(encoded);
    console.log(encoded + ' / ' + decoded);
}