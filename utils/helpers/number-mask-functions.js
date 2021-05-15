export const formatIntegerNumber = (number, separator = '.') => {
    return String(number)
    .split('')
    .reverse()
    .join('')
    .split(/(\d\d\d)/)
    .filter(elm => elm != '')
    .join(separator)
    .split('')
    .reverse()
    .join('')
}