export function SaltToCharCodeArray(salt: string): number[] {
    return Array.from(salt, (x) => x.charCodeAt(0));
}


export function GetFix(value: string | undefined): string {
    return value !== undefined ? value : '';
}