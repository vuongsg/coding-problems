/*
Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter
"userDate" and the return value are strings.
For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API
*/
export const formatDate = (userDate: string) => {
    //format from M/D/YYYY to YYYYMMDD
    const arr = userDate.split('/');
    return (`${arr[2]}${formattedNumber(parseInt(arr[0]))}${formattedNumber(parseInt(arr[1]))}`);
}

const formattedNumber = (num: number) => num.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
})