function createCounter(){
    let count = 0;
    return (() => {
        count += 1;
        return count;
    })
}

const counter = createCounter()
console.log(counter()) // 1
console.log(counter()) // 2
