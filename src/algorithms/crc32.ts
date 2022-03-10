import {crc32} from '../utils';

/**
 * Encoding method
 * @param value which is always number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function CRC32Encode(value: number, salt: string): number {
    return Math.abs(crc32(salt + value));
}

/**
 * Decoding method
 * @param value which is encoding result number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function CRC32Decode(value: number, salt: string): number {
    return -1;
}