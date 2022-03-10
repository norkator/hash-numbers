import {SaltToCharCodeArray} from '../utils';

/**
 * Encoding method
 * @param value which is always number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function DefaultEncode(value: number, salt: string): number {
    const saltCharCodeArray: number[] = SaltToCharCodeArray(salt);
    let sum: number = 0;
    saltCharCodeArray.forEach((number: number) => {
        sum = sum + (number + value);
    });
    return sum;
}

/**
 * Decoding method
 * @param value which is encoding result number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function DefaultDecode(value: number, salt: string): number {
    const saltCharCodeArray: number[] = SaltToCharCodeArray(salt);
    const length = saltCharCodeArray.length;
    let sum: number = value;
    saltCharCodeArray.forEach((number: number) => {
        sum = sum - number;
    });
    return sum / length;
}