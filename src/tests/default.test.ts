import * as chai from 'chai';
import Index, {HashParamsInterface} from '../index';

const params: HashParamsInterface = {
    algorithm: 'DEFAULT',
    salt: 'rvQAyZG4',
    prefix: '',
    suffix: ''
}

const arr: number[] = [];

const expect = chai.expect;
describe('default', async () => {

    it('should generate default ids', async () => {
        const hashNumber = new Index(params);
        for (let i = 1; i < 10000; i++) {
            const encoded = hashNumber.encode(i);
            arr.push(Number(encoded));
        }
        expect(arr[arr.length - 1]).to.equal(7119288);
    });

    it('should not have duplicates', async () => {
        const toFindDuplicates = (arry: number[]) => arry.filter((item: number, index: number) => arr.indexOf(item) !== index)
        const duplicates = toFindDuplicates(arr);
        expect(duplicates.length).to.equal(0);
    });


    it('should decode them back', async () => {
        const hashNumber = new Index(params);
        for (let i = 0; i < arr.length; i++) {
            const enc = String(arr[i]);
            const decoded = hashNumber.decode(enc);
            console.log(enc, '->', decoded);
            expect(decoded).to.equal(i + 1);
        }
    });
});