import * as chai from 'chai';
import Index, {HashParamsInterface} from '../index';

const crc32Params: HashParamsInterface = {
    algorithm: 'CRC32',
    salt: 'Test123',
    prefix: '',
    suffix: ''
}

const arr: number[] = [];

const expect = chai.expect;
describe('crc32', async () => {

    it('should generate ids', async () => {
        const hashNumber = new Index(crc32Params);
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