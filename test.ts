import {HashNumbers, HashParamsInterface} from './src/hash-numbers'

const params: HashParamsInterface = {
    algorithm: 'CRC32',
    salt: 'Test123',
    prefix: '',
    suffix: ''
}
const hashNumber = new HashNumbers(params);


let arr: number[] = []


for (let i = 1; i < 10000; i++) {
    const encoded = hashNumber.encode(i);
    arr.push(Number(encoded));
    const decoded = hashNumber.decode(encoded);
    console.log(encoded + ' / ' + decoded);
}

const toFindDuplicates = (arry: number[]) => arry.filter((item: number, index: number) => arr.indexOf(item) !== index)
const duplicates = toFindDuplicates(arr);
console.log(duplicates);