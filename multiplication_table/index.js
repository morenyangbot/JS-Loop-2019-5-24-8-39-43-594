for (let i = 1; i <= 9; i++) {
    let arr = []
    for (let j = 1; j <= i; j++) {
        arr.push(`${j}*${i}=${i * j}`)
    }
    console.log(arr.join(' ') + '\n')
}
