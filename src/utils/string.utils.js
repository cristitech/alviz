export const arrayToString = (array = []) => {
    return '[' + array.reduce(
                (arrStr, val) => arrStr + (arrStr === '' ? '' : ', ') + val, '') + 
        ']'
}