import {HashNumbers, HashParamsInterface} from './src/hash-numbers'

const params: HashParamsInterface = {
    algorithm: 'SKR_KOBLITZ_ALGO',
    salt: 'abcd',
    prefix: '',
    suffix: ''
}
const hashNumber = new HashNumbers(params);

for (let i = 1; i < 1000; i++) {
    const encoded = hashNumber.encode(i);
    const decoded = hashNumber.decode(encoded);
    console.log(encoded + ' / ' + decoded + ' /' + i);
}