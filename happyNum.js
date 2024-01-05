const isHappyNumber = (num) => {
  const seen = new Set();

  while (num !== 1 && !seen.has(num)) {
    seen.add(num);
    num = num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Math.pow(parseInt(digit), 2), 0);
  }

  return num === 1;
};

const findLargestHappyNumber = (num) => {
  let largestHappyNumber = 0;

  for (let i = 1; i <= num; i++) {
    if (isHappyNumber(i) && i > largestHappyNumber) {
      largestHappyNumber = i;
    }
  }

  return `The largest happy number in the range is ${largestHappyNumber}`;
};

console.log(findLargestHappyNumber(11222333469128));
