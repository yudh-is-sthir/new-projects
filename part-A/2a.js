function convertMonth() {
  const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function innerFunc(num) {
    num = Number.parseInt(num)
    if (num > 12 || num < 1) {
      return `${num}, Bad Number`;
    }
    return `${monthName[num-1]}, ${num}`
  }
  return innerFunc;
}

const converter = convertMonth();
console.log(converter(5)); // May, 5
console.log(converter(2.5)); // Feb, 2
console.log(converter(0)); // 0, Bad Number