function convert(alphabet, letter) {
    const index = alphabet.indexOf(letter)
    return index <= 12 ? alphabet[index + 13] : alphabet[index - 13]
}

function rot13(str, alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') { // LBH QVQ VG!
    return str.split('').map((value) => {
        if (alphabet.includes(value)) return convert(alphabet, value)
        return value
    }).join('')
}