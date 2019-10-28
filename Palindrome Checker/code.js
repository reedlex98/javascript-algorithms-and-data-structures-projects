function removeNonAlphaChar(str) {
    return str.replace(/[^a-zA-Z0-9]/gi, '')
}

function reverseString(str) {
    return str.split('').map((char, index, arr) => arr[arr.length - index - 1]).join('')
}

function palindrome(str) {
    const newStr = removeNonAlphaChar(str).toLowerCase()
    return newStr === reverseString(newStr);
}