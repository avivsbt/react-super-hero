export function removeDuplicates<T>(arr: T[], key: keyof T): T[] {
    const seen = new Set();
    return arr.filter(item => {
        const itemValue = item[key];
        if (!seen.has(itemValue)) {
            seen.add(itemValue);
            return true;
        }
        return false;
    });
}