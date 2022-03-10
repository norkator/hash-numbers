import {extgcd} from '../utils';

/**
 * Encoding method (both numbers must be co-prime)
 * @param value which is always number
 * @param saltNum (seed) must be a RSA number from (https://bigprimes.org/RSA-challenge)[50bit]
 * @constructor
 */
export function ModInvEncode(value: number, saltNum: number): number {
    return (extgcd(value,saltNum).x < 0)?(extgcd(value,saltNum).x + saltNum) % saltNum:extgcd(value,saltNum).x;
}

/**
 * Decoding method (both numbers must be co-prime)
 * @param value which is encoding result number
 * @param saltNum  (seed) must be a RSA number from (https://bigprimes.org/RSA-challenge)[50bit]
 * @constructor
 */
export function ModInvDecode(value: number, saltNum: number): number {
    return (extgcd(value,saltNum).x < 0)?(extgcd(value,saltNum).x + saltNum) % saltNum:extgcd(value,saltNum).x;
}