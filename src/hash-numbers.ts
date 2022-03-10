'use strict'

import {GetFix} from './utils';
import {KoblitzArithematicEncode, KoblitzArithematicDecode} from './algorithms/koblitzarithematic';
import {CRC32Decode, CRC32Encode} from './algorithms/crc32';
import {SKoblitzEncode, SKoblitzDecode} from './algorithms/skoblitz';
import {ModInvDecode, ModInvEncode} from './algorithms/modinv';

export type ALGORITHM = 'CRC32' | 'KOBLITZARITHEMATIC' | 'SKR_KOBLITZ_ALGO' | 'MOD_INV';

export interface HashParamsInterface {
    algorithm: ALGORITHM;
    salt: string | number;
    prefix?: string; // appended at beginning before number hash
    suffix?: string; // appended at the end after number hash
}

export class HashNumbers {
    private params: HashParamsInterface;

    constructor(params: HashParamsInterface) {
        this.params = params;
    }

    public encode(value: number): string {
        let result;
        switch (this.params.algorithm) {
            case 'CRC32':
                result = CRC32Encode(value, String(this.params.salt));
                break;
            case 'KOBLITZARITHEMATIC':
                result = KoblitzArithematicEncode(value, String(this.params.salt));
                break;
            case 'SKR_KOBLITZ_ALGO':
                result = SKoblitzEncode(value, String(this.params.salt));
                break;
            case 'MOD_INV':
                result = ModInvEncode(value, Number(this.params.salt));
                break;
        }
        return GetFix(this.params.prefix) + result + GetFix(this.params.suffix);
    }

    public decode(value: string): number {
        let n = Number(value);
        switch (this.params.algorithm) {
            case "CRC32":
                n = CRC32Decode(n, String(this.params.salt));
                break;
            case "KOBLITZARITHEMATIC":
                n = KoblitzArithematicDecode(n, String(this.params.salt));
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
