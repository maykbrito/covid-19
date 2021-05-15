export const formatIntegerNumber = (number, separator = '.') => {
    return Number(number)
    .toLocaleString('pt')
    .split('.')
    .join(separator)
}