function separateNumber(num) {
    return `${num}`.split('').map((value) =>
        Number.parseInt(value))
}

function mountNumber(num, category) {
    const roman = [
        ['I', 'V', 'X'],
        ['X', 'L', 'C'],
        ['C', 'D', 'M'],
        ['M']
    ]
    let mounted = ''
    if (num >= 1 && num <= 3) {
        mounted += roman[category][0].repeat(num)
    } else if (num === 4)
        mounted += roman[category][0] + roman[category][1]
    else if (num === 5)
        mounted += roman[category][1]
    else if (num >= 6 && num <= 8)
        mounted += roman[category][1] + roman[category][0].repeat(num - 5)
    else if (num === 9)
        mounted += roman[category][0] + roman[category][2]
    return mounted
}

function convertToRoman(num) {
    return separateNumber(num).map((value, category, arr) => mountNumber(value, arr.length - category - 1)).join('')
}