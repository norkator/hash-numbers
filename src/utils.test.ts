import * as chai from 'chai';
import {ToCharCodeArray} from './utils';

const expect = chai.expect;

const salt = '!H2sHNumb3rS@!';
const expected = [33, 72, 50, 115, 72, 78, 117, 109, 98, 51, 114, 83, 64, 33];

describe('utils', async () => {

    it('should return expected salt char code array', async () => {
        const array = ToCharCodeArray(salt);
        let i = 0;
        array.forEach((n: number) => {
            expect(n).to.equal(expected[i]);
            i++;
        });
    });
});