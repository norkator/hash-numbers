/**
 * Encoding method
 * @param value which is always number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function SKoblitzEncode(value: number, salt: string): string {
    const pos = value % salt.length;
    const saltedValue = salt.slice(0, pos) + value + salt.slice(pos);
    // console.log(saltedValue)
    return KoblitzEncode(saltedValue).toLocaleString('fullwide', {useGrouping: false});
}

/**
 * Decoding method
 * @param value which is encoding result number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function SKoblitzDecode(value: number, salt: string): number {
    const saltedValue = KoblitzDecode(value);

    let id = 0;
    let a = 0, b = 0;
    while (a < salt.length) {
        if (salt[a] == saltedValue[b]) {
            a++;
            b++;
        } else {
            id = id * 10 + Number(saltedValue[b]);
            b++;
        }
    }
    return id;
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


/**
 * Returns koblitz decoding for a string
 * @param hash must be a string to encode
 * @constructor
 */
function KoblitzDecode(hash: number): string {
    let plainSalt = '';
    while (hash > 0) {
        const numVal = hash % 63;
        plainSalt += RetNumCharVal(numVal);
        hash = Math.floor(hash / 63);
    }
    return plainSalt.split('').reverse().join('');
}


/**
 * Returns character value for number (1-26,27-52,53-62) => (a-z,A-Z,0-9)
 * @param num must be a number
 * @constructor
 */
function RetNumCharVal(num: number): any {
    if (num >= 1 && num <= 26) {
        return String.fromCharCode(num + 96);
    }
    if (num >= 27 && num <= 52) {
        return String.fromCharCode(num + 38);
    }
    if (num >= 53 && num <= 62) {
        return String.fromCharCode(num - 5);
    }
    return 0;
}

