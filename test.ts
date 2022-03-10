import {HashNumbers, HashParamsInterface} from './src/hash-numbers'

const params: HashParamsInterface = {
    algorithm: 'SKOBLITZ',
    salt: 'Test123',
    prefix: '',
    suffix: ''
}
const hashNumber = new HashNumbers(params);

for (let i = 1; i < 10; i++) {
    const encoded = hashNumber.encode(i);
    const decoded = hashNumber.decode(encoded);
    console.log(encoded + ' / ' + decoded);
}