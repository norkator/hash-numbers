export function SaltToCharCodeArray(salt: string): number[] {
    return Array.from(salt, (x) => x.charCodeAt(0));
}

export function GetFix(value: string | undefined): string {
    return value !== undefined ? value : '';
}

/**
 * Returns numerical value for character (a-z,A-Z,0-9) => (1-26,27-52,53-62)
 * @param char must be a character
 * @constructor
 */
export function RetCharNumVal(char: any): number {
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

/**
 * Returns character value for number (1-26,27-52,53-62) => (a-z,A-Z,0-9)
 * @param num must be a number
 * @constructor
 */
export function RetNumCharVal(num: number): any {
    if(num >= 1 && num <= 26){
        return String.fromCharCode(num + 96); 
    }
    if(num >= 27 && num <= 52){
        return String.fromCharCode(num + 38); 
    }
    if(num >= 53 && num <= 62){
        return String.fromCharCode(num - 5); 
    }
    return 0;
}

/**
 * Returns koblitz encoding for a string
 * @param salt must be a string to encode
 * @constructor
 */
export function KoblitzEncode(salt: string): number {
    const chars = salt.split("").reverse();

    let sum = 0;
    chars.forEach((c, i) => {
        const n = RetCharNumVal(c);
        sum = sum + (n * Math.pow(63, i));
    });
    return sum;
}

/**
 * Returns koblitz decoding for a string
 * @param salt must be a string to encode
 * @constructor
 */
export function KoblitzDecode(hash: number): string {
    var plainSalt = '';
    while(hash > 0){
        var numVal = hash % 63;
        plainSalt += RetNumCharVal(numVal);
        hash = Math.floor(hash / 63);
    }
    return plainSalt.split('').reverse().join('');
}

/**
 * Returns gcd of both the numbers
 * @param a must be a number
 * @param b must be a number
 * @constructor
 */
export function extgcd(a: number, b:number): any {
    if (a < b) {
        let tmp = extgcd(b, a);
        return {gcd: tmp.gcd, x: tmp.y, y: tmp.x};
    }

    if (b === 0) {
        return {gcd: a, x: 1,y: 0};
    }

    let r = a % b;
    let tmp = extgcd(b, r);

    return {gcd: tmp.gcd, x: tmp.y, y: (tmp.x-Math.floor(a/b)*tmp.y)};
}