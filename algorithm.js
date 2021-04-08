// In the language of your choice, write a function which, taking a positive integer n as input, finds all
// sets of numbers that sum up to n.
// For example, n=4, we have:
// 4
// 3,1
// 2,2
// 2,1,1
// 1,1,1,1

function sumUp(n) {
    //check if the n is zero
    if (n === 0) {
        console.error(Error)
    }
    //make a temp array
    let temp = []
    //round the n
    for (let i = 1; i <= n; i++) {
        temp.push(i)
       
        for (let j = 0; j <= temp.length; j++) {
            for (let k = j; k >= 0; k--) {
                let temp1 = []
                if (temp[j] + temp[k] === n) {
                    temp1.push(temp[j], temp[k])
                }
                if (temp1.length != 0) {
                    temp.push(temp1)
                }
            }
        }
        if (temp.length > 1) {
            return temp
        }
    }
}

console.log(sumUp(4))

