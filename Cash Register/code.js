function tableOfMoney() {
    return {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    }
}

function newCid() {
    return [
        ["PENNY", 0],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
    ]
}

function sortCid(cid, table = tableOfMoney()) {
    return cid.filter(value => value[1] > 0).sort((a, b) => table[b[0]] - table[a[0]])
}

function treatNumber(num) {
    return Number.parseFloat(num.toFixed(2))
}

function mountChange(changeDue, cid, mounted = 0, table = tableOfMoney(), changeCid = newCid()) {
    for (let money of sortCid(cid)) {
        for (let index = 0; index < money[1] / table[money[0]]; index++) {
            if (treatNumber(mounted + table[money[0]]) <= treatNumber(changeDue)) {
                changeCid.forEach(value => {
                    if (value[0] === money[0])
                        value[1] += table[money[0]]
                })
                mounted += table[money[0]]
            }
            if (treatNumber(mounted) === treatNumber(changeDue)) {
                return sortCid(changeCid)
            }
        }
    }
    return false
}

function checkCashRegister(price, cash, cid) {
    const moneyAvailable = cid.reduce((prev, curr) => prev + curr[1], 0)
    const changeValue = cash - price
    const change = mountChange(changeValue, cid)
    if (changeValue === moneyAvailable) return { status: "CLOSED", change: cid }
    if (!Array.isArray(change))
        return { status: "INSUFFICIENT_FUNDS", change: [] }
    else
        return { status: "OPEN", change }
}

console.log(checkCashRegister(4.75, 12.21, [
    ["PENNY", 10],
    ["NICKEL", 10],
    ["DIME", 10],
    ["QUARTER", 10],
    ["ONE", 10],
    ["FIVE", 10],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
]))