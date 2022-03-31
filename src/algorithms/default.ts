import {ToCharCodeArray} from '../utils';

const sumReducer = (accumulator: number, curr: number) => accumulator + curr;

/**
 * Encoding method
 * @param value which is always number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function DefaultEncode(value: number, salt: string): number {
    return Number(run(value, salt, false));
}

/**
 * Decoding method
 * @param value which is encoding result number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function DefaultDecode(value: number, salt: string): number {
    return Number(run(value, salt, true));
}


function run(value: number, salt: string, reverse = false): string {
    let result = "";
    const saltArray = ToCharCodeArray(salt);
    const saltSum = saltArray.reduce(sumReducer);
    return reverse ? String(value / saltSum) : String(value * saltSum);
}