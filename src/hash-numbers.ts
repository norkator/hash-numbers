'use strict'

import {GetFix, SaltToCharCodeArray} from './utils';
import {KoblitzDecode, KoblitzEncode} from './algorithms/koblitz';

export type ALGORITHM = 'KOBLITZ';

export interface HashParamsInterface {
    algorithm: ALGORITHM;
    salt: string;
    prefix?: string; // appended at beginning before number hash
    suffix?: string; // appended at the end after number hash
}

export class HashNumbers {
    private params: HashParamsInterface;
    private readonly saltCharCodeArray: number[];

    constructor(params: HashParamsInterface) {
        this.params = params;
        this.saltCharCodeArray = SaltToCharCodeArray(params.salt); // todo.. remove if never used
    }

    public encode(value: number): string {
        let result;
        switch (this.params.algorithm) {
            case 'KOBLITZ':
                result = KoblitzEncode(value, this.params.salt);
                break;
        }
        return GetFix(this.params.prefix) + result + GetFix(this.params.suffix);
    }

    public decode(value: string): number {
        let n = Number(value); // todo... remove prefix, suffix first
        switch (this.params.algorithm) {
            case "KOBLITZ":
                n = KoblitzDecode(n, this.params.salt);
                break;
        }
        return n;
    }

}
