import {HashNumbers, HashParamsInterface} from './src/hash-numbers'

const params: HashParamsInterface = {
    salt: 'test',
    prefix: '',
    suffix: ''
}
const hashNumber = new HashNumbers(params);


for (let i = 1; i < 100; i++) {
    const encoded = hashNumber.encode(i);
    const decoded = hashNumber.decode(encoded);
    console.log(encoded + ' / ' + decoded);
}