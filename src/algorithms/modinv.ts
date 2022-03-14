/**
 * Encoding method (both numbers must be co-prime)
 * @param value which is always number
 * @param saltNum (seed) must be a RSA number from (https://bigprimes.org/RSA-challenge)[50bit]
 * @constructor
 */
export function ModInvEncode(value: number, saltNum: number): number {
    return (extGcd(value, saltNum).x < 0) ? (extGcd(value, saltNum).x + saltNum) % saltNum : extGcd(value, saltNum).x;
}

/**
 * Decoding method (both numbers must be co-prime)
 * @param value which is encoding result number
 * @param saltNum  (seed) must be a RSA number from (https://bigprimes.org/RSA-challenge)[50bit]
 * @constructor
 */
export function ModInvDecode(value: number, saltNum: number): number {
    return (extGcd(value, saltNum).x < 0) ? (extGcd(value, saltNum).x + saltNum) % saltNum : extGcd(value, saltNum).x;
}


/**
 * Returns gcd of both the numbers
 * @param a must be a number
 * @param b must be a number
 * @constructor
 */
function extGcd(a: number, b: number): any {
    if (a < b) {
        const tmp = extGcd(b, a);
        return {gcd: tmp.gcd, x: tmp.y, y: tmp.x};
    }

    if (b === 0) {
        return {gcd: a, x: 1, y: 0};
    }

    const r = a % b;
    const tmp = extGcd(b, r);

    return {gcd: tmp.gcd, x: tmp.y, y: (tmp.x - Math.floor(a / b) * tmp.y)};
}