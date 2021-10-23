export const isPalindromeNumber = (x: number): boolean => {
    let y = 0;
    let temp = x;
    
    while (temp > 0) {
        y = y * 10 + temp % 10;
        temp = Math.floor(temp / 10);
    }
    
    return x === y;
};