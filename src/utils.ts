export function GetPrefixSuffix(value: string | undefined): string {
    return value !== undefined ? value : '';
}

export function RemovePrefixSuffix(prefix: string, suffix: string, value: string): number {
    return Number(
        value.replace(prefix, '').replace(suffix, '')
    );
}
