import {HashNumbers, HashParamsInterface} from './src/hash-numbers'

const params: HashParamsInterface = {
    algorithm: 'KOBLITZARITHEMATIC',
    salt: 'Test123',
    prefix: '',
    suffix: ''
}
const hashNumber = new HashNumbers(params);

for (let i = 100; i < 110; i++) {
    const encoded = hashNumber.encode(i);
    const decoded = hashNumber.decode(encoded);
    console.log(encoded + ' / ' + decoded);
}