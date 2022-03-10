import {KoblitzDecode, KoblitzEncode} from '../utils';

/**
 * Encoding method
 * @param value which is always number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function SKoblitzEncode(value: number, salt: string): string {
    const pos = value % salt.length;
    const saltedValue = salt.slice(0, pos) + value + salt.slice(pos);
    // console.log(saltedValue)
    return KoblitzEncode(saltedValue).toLocaleString('fullwide', {useGrouping: false});
}

/**
 * Decoding method
 * @param value which is encoding result number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function SKoblitzDecode(value: number, salt: string): number {
    const saltedValue = KoblitzDecode(value);

    let id = 0;
    let a = 0, b = 0;
    while (a < salt.length) {
        if (salt[a] == saltedValue[b]) {
            a++;
            b++;
        } else {
            id = id * 10 + Number(saltedValue[b]);
            b++;
        }
    }
    return id;
}