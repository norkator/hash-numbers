import Index, {HashParamsInterface} from '.';

const params: HashParamsInterface = {
    algorithm: 'DEFAULT',
    salt: 'Czb8ZQja',
    prefix: '',
    suffix: ''
}
const hashNumber = new Index(params);

const arr: number[] = []

for (let i = 1; i < 10; i++) {
    const encoded = hashNumber.encode(i);
    arr.push(Number(encoded));
    const decoded = hashNumber.decode(encoded);
    console.log(encoded + ' / ' + decoded);
}
