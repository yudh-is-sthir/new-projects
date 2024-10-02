function calculate(){
    const tax = .18;
    const discount = .3;
    return((price)=>{
        return `Total Net Price: ${(price + (price * tax) - (price * discount)).toFixed(2)}`
    })
}

const calculatePrice = calculate();
console.log(calculatePrice(3000));