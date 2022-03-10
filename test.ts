import {HashNumbers, HashParamsInterface} from './src/hash-numbers'

const params: HashParamsInterface = {
    algorithm: 'MOD_INV',
    salt: 'Test123',
    saltNum: 918693761380649,
    prefix: '',
    suffix: ''
}
const hashNumber = new HashNumbers(params);

for (let i = 1; i < 10; i++) {
    const encoded = hashNumber.encode(i);
    const decoded = hashNumber.decode(encoded);
    console.log(encoded + ' / ' + decoded);
}