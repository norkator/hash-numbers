import {KoblitzEncode} from '../utils';

/**
 * Encoding method
 * @param value which is always number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function SKoblitzEncode(value: number, salt: string): number {
    console.log(KoblitzEncode(salt));
    return 0;
}

/**
 * Decoding method
 * @param value which is encoding result number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function SKoblitzDecode(value: number, salt: string): number {
    
    return 0;
}