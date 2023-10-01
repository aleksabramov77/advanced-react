type Mods = Record<string, string | boolean>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [cls]
        .concat(additional)
        .filter(Boolean)
        .concat(Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([className]) => className))
        .join(' ');
}
