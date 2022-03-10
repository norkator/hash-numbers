'use strict'

import {GetFix} from './utils';
import {KoblitzArithematicEncode, KoblitzArithematicDecode} from './algorithms/koblitzarithematic';
import {DefaultDecode, DefaultEncode} from './algorithms/default';
import { SKoblitzEncode, SKoblitzDecode } from './algorithms/skoblitz';

export type ALGORITHM = 'DEFAULT' | 'KOBLITZARITHEMATIC' | 'SKR_KOBLITZ_ALGO';

export interface HashParamsInterface {
    algorithm: ALGORITHM;
    salt: string;
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
            case 'DEFAULT':
                result = DefaultEncode(value, this.params.salt);
                break;
            case 'KOBLITZARITHEMATIC':
                result = KoblitzArithematicEncode(value, this.params.salt);
                break;
            case 'SKR_KOBLITZ_ALGO':
                result = SKoblitzEncode(value, this.params.salt);
                break;
        }
        return GetFix(this.params.prefix) + result + GetFix(this.params.suffix);
    }

    public decode(value: string): number {
        let n = Number(value); // todo... remove prefix, suffix first
        switch (this.params.algorithm) {
            case "DEFAULT":
                n = DefaultDecode(n, this.params.salt);
                break;
            case "KOBLITZARITHEMATIC":
                n = KoblitzArithematicDecode(n, this.params.salt);
                break;
            case "SKR_KOBLITZ_ALGO":
                n = SKoblitzDecode(n, this.params.salt)
                break;
        }
        return n;
    }

}
