export function GetPrefixSuffix(value: string | undefined): string {
    return value !== undefined ? value : '';
}

export function RemovePrefixSuffix(prefix: string, suffix: string, value: string): number {
    return Number(
        value.replace(prefix, '').replace(suffix, '')
    );
}

export function ToCharCodeArray(value: string): number[] {
    return Array.from(value, (x) => x.charCodeAt(0));
}

export function CharCodeToChar(value: number): string {
    return String.fromCharCode(value);
}

