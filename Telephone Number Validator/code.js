function rawNumber(str) {
    return str.split('').filter(value => /[0-9]|\-1/.test(value)).map(value => Number.parseInt(value))
}

function telephoneCheck(str) {
    if (/[^\s\d\(\)\-]/.test(str)) return false

    const rawNum = rawNumber(str)
    const numValid = rawNum.length === 11 && rawNum[0] === 1 || rawNum.length === 10
    if (!(/\(|\)/g.test(str)))
        return numValid
    else
        return numValid && /^1*\s*\(\d{3}\)/.test(str)
}