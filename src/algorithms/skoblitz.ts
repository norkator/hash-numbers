import {KoblitzDecode, KoblitzEncode} from '../utils';

/**
 * Encoding method
 * @param value which is always number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function SKoblitzEncode(value: number, salt: string): number {
    var pos = value % salt.length;
    var saltedValue = salt.slice(0,pos) + value + salt.slice(pos);
    return KoblitzEncode(saltedValue);
}

/**
 * Decoding method
 * @param value which is encoding result number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function SKoblitzDecode(value: number, salt: string): number {
    var saltedValue = KoblitzDecode(value);
    
    var id = 0;
    var a=0, b=0;
    while(a<salt.length){
        if(salt[a] == saltedValue[b]){
            a++; b++;
        } else {
            id = id*10 + Number(saltedValue[b]);
            b++;
        }
    }
    return id;
}