'use strict'

import {GetFix, SaltToCharCodeArray} from './utils';

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
        this.saltCharCodeArray = SaltToCharCodeArray(params.salt);
    }

    public encode(value: number): string {
        let r = value;
        for (let i = 0; i < this.saltCharCodeArray.length; i++) {
            r = r * this.saltCharCodeArray[i];
        }
        return GetFix(this.params.prefix) + r + GetFix(this.params.suffix);
    }

    public decode(value: string): number {
        let n = Number(value);
        for (let i = this.saltCharCodeArray.length; i > 0; i--) {
            n = n / this.saltCharCodeArray[i - 1];
        }
        return n;
    }

}
