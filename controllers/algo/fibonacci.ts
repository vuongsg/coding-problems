export const fibo = (n: number): number[] => {
    if (n < 0) return [];

    const arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }

    return arr;
}