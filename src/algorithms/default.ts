/**
 * Encoding method
 * @param value which is always number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function DefaultEncode(value: number, salt: string): number {
    return 123;
}

/**
 * Decoding method
 * @param value which is encoding result number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function DefaultDecode(value: number, salt: string): number {
    return -1;
}
