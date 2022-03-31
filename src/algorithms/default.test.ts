import * as chai from 'chai';
import {DefaultDecode, DefaultEncode} from './default';

const expect = chai.expect;

const salt = 'rvQAyZG4';

describe('default', async () => {

    it('should return expected encoded value', async () => {
        const encoded = DefaultEncode(1, salt);
        expect(encoded).to.equal(712);
    });

    it('should return expected decoded value', async () => {
        const encoded = DefaultDecode(712, salt);
        console.log(encoded);
        expect(encoded).to.equal(1);
    });

});