/**
 * Encoding method
 * @param value which is always number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function KoblitzEncode(value: number, salt: string): number {
    salt = salt.toUpperCase();
    const chars = salt.split("").reverse();
    
    var sum = 0;
    chars.forEach((c, i) => {
        var n = c.charCodeAt(0) - 65;
        sum = sum + (n * Math.pow(36,i));
    });
    return sum + value;
}


/**
 * Decoding method
 * @param value which is encoding result number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function KoblitzDecode(value: number, salt: string): number {

    return 0;
}