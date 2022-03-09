export function SaltToCharCodeArray(salt: string): number[] {
    return Array.from(salt, (x) => x.charCodeAt(0));
}

export function GetFix(value: string | undefined): string {
    return value !== undefined ? value : '';
}

/**
 * Returns numerical value for character (a-z,A-Z,0-9) => (1-26,27-52,53-62)
 * @param char must be a character
 * @constructor
 */
export function RetCharNumVal(char: any): number {
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