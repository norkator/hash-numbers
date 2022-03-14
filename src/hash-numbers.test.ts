import * as chai from 'chai';
import {HashNumbers, HashParamsInterface} from './hash-numbers';

const params: HashParamsInterface = {
    algorithm: 'CRC32',
    salt: 'Test123',
    prefix: '',
    suffix: ''
}

const arr: number[] = [];

const expect = chai.expect;
describe('hash-numbers', async () => {

    it('should generate CRC32 ids', async () => {
        const hashNumber = new HashNumbers(params);
        for (let i = 1; i < 10000; i++) {
            const encoded = hashNumber.encode(i);
            arr.push(Number(encoded));
            // const decoded = hashNumber.decode(encoded);
            console.log(encoded);
        }
        expect(arr[arr.length - 1]).to.equal(589633172);
    });

    it('should not have duplicates', async () => {
        const toFindDuplicates = (arry: number[]) => arry.filter((item: number, index: number) => arr.indexOf(item) !== index)
        const duplicates = toFindDuplicates(arr);
        expect(duplicates.length).to.equal(0);
    });
});