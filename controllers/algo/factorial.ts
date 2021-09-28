export const factorial = (n: number) => {
    if (n === 0 || n === 1) return 1;
    let res = 1;

    for (let i = 2; i <= n; i++) {
        res *= i;
    }

    return res;
}