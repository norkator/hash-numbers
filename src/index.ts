'use strict'

import {GetPrefixSuffix, RemovePrefixSuffix} from './utils';
import {KoblitzArithmeticEncode, KoblitzArithmeticDecode} from './algorithms/koblitzarithematic';
import {CRC32Decode, CRC32Encode} from './algorithms/crc32';
import {SKoblitzEncode, SKoblitzDecode} from './algorithms/skoblitz';
import {ModInvDecode, ModInvEncode} from './algorithms/modinv';
import {DefaultDecode, DefaultEncode} from "./algorithms/default";

export type ALGORITHM = 'DEFAULT' | 'CRC32' | 'KOBLITZ_ARITHMETIC' | 'SKR_KOBLITZ_ALGO' | 'MOD_INV';

export interface HashParamsInterface {
    algorithm: ALGORITHM;
    salt: string | number;
    prefix?: string; // appended at beginning before number hash
    suffix?: string; // appended at the end after number hash
}

export default class Index {
    private params: HashParamsInterface;

    constructor(params: HashParamsInterface) {
        this.params = params;
    }

    public encode(value: number): string {
        let result;
        switch (this.params.algorithm) {
            case 'DEFAULT':
                result = DefaultEncode(value, String(this.params.salt));
                break;
            case 'CRC32':
                result = CRC32Encode(value, String(this.params.salt));
                break;
            case 'KOBLITZ_ARITHMETIC':
                result = KoblitzArithmeticEncode(value, String(this.params.salt));
                break;
            case 'SKR_KOBLITZ_ALGO':
                result = SKoblitzEncode(value, String(this.params.salt));
                break;
            case 'MOD_INV':
                result = ModInvEncode(value, Number(this.params.salt));
                break;
        }
        return GetPrefixSuffix(this.params.prefix) + result + GetPrefixSuffix(this.params.suffix);
    }

    public decode(value: string): number {
        let n = RemovePrefixSuffix(
            GetPrefixSuffix(this.params.prefix),
            GetPrefixSuffix(this.params.suffix),
            value
        );
        switch (this.params.algorithm) {
            case 'DEFAULT':
                n = DefaultDecode(n, String(this.params.salt));
                break;
            case "CRC32":
                n = CRC32Decode(n, String(this.params.salt));
                break;
            case "KOBLITZ_ARITHMETIC":
                n = KoblitzArithmeticDecode(n, String(this.params.salt));
                break;
            case "SKR_KOBLITZ_ALGO":
                n = SKoblitzDecode(n, String(this.params.salt));
                break;
            case "MOD_INV":
                n = ModInvDecode(n, Number(this.params.salt));
                break;
        }
        return n;
    }

}
