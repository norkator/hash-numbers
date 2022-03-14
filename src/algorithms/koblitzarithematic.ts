/**
 * Encoding method
 * @param value which is always number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function KoblitzArithmeticEncode(value: number, salt: string): number {
    return KoblitzEncode(salt) + value;
}

/**
 * Decoding method
 * @param value which is encoding result number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function KoblitzArithmeticDecode(value: number, salt: string): number {
    return value - KoblitzEncode(salt);
}


/**
 * Returns koblitz encoding for a string
 * @param salt must be a string to encode
 * @constructor
 */
function KoblitzEncode(salt: string): number {
    const chars = salt.split("").reverse();

    let sum = 0;
    chars.forEach((c, i) => {
        const n = RetCharNumVal(c);
        sum = sum + (n * Math.pow(63, i));
    });
    return sum;
}

/**
 * Returns numerical value for character (a-z,A-Z,0-9) => (1-26,27-52,53-62)
 * @param char must be a character
 * @constructor
 */
function RetCharNumVal(char: any): number {
    if ((/[a-z]/).test(char)) {
        return char.charCodeAt(0) - 96;
    }
    if ((/[A-Z]/).test(char)) {
        return char.charCodeAt(0) - 38;
    }
    if ((/[0-9]/).test(char)) {
        return char.charCodeAt(0) + 5;
    }
    return 0;
}