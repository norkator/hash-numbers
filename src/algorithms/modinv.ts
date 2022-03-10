import {extgcd} from '../utils';

/**
 * Encoding method
 * @param value which is always number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function ModInvEncode(value: number, saltNum: number): number {
    return (extgcd(value,saltNum).x < 0)?(extgcd(value,saltNum).x + saltNum) % saltNum:extgcd(value,saltNum).x;
}

/**
 * Decoding method
 * @param value which is encoding result number
 * @param salt (seed) which can be anything
 * @constructor
 */
export function ModInvDecode(value: number, saltNum: number): number {
    return (extgcd(value,saltNum).x < 0)?(extgcd(value,saltNum).x + saltNum) % saltNum:extgcd(value,saltNum).x;
}