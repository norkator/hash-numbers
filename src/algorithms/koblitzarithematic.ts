import {KoblitzEncode} from '../utils';

/**
 * Encoding method
 * @param value which is always number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function KoblitzArithematicEncode(value: number, salt: string): number {
    return KoblitzEncode(salt) + value;
}

/**
 * Decoding method
 * @param value which is encoding result number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function KoblitzArithematicDecode(value: number, salt: string): number {
    return value - KoblitzEncode(salt);
}