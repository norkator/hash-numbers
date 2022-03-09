export function retCharNumVal(char: any): number {
    if((/[a-z]/).test(char)){
        return char.charCodeAt(0) - 96;
    }
    if((/[A-Z]/).test(char)){
        return char.charCodeAt(0) - 38;
    }
    if((/[0-9]/).test(char)){
        return char.charCodeAt(0) + 5;
    }
    return 0;
}

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
        var n = retCharNumVal(c);
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
    salt = salt.toUpperCase();
    const chars = salt.split("").reverse();
    
    var sum = 0;
    chars.forEach((c, i) => {
        var n = retCharNumVal(c);
        sum = sum + (n * Math.pow(36,i));
    });
    return value - sum;
}