let a = 10;
let b = 7;
let c = 29;
let d = 36;
let e = 139;
let f = 153;

// 1. Sum of first n numbers
let sum = 0;
for (let i = 1; i <= a; i++) {
  sum += i;
}
console.log(`Sum of first ${a} numbers = ${sum}`);

// 2. Table of n
console.log(`Table of ${b}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${b} x ${i} = ${b * i}`);
}

// 3. Prime check
let isPrime = c > 1;
for (let i = 2; i * i <= c; i++) {
  if (c % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(`${c} is ${isPrime ? "a prime number" : "not a prime number"}`);

// 4. Factors
let factors = [];
for (let i = 1; i <= d; i++) {
  if (d % i === 0) {
    factors.push(i);
  }
}
console.log(`Factors of ${d}: ${factors.join(", ")}`);

// 5. Sum of digits
let temp = e;
let digitSum = 0;
while (temp > 0) {
  digitSum += temp % 10;
  temp = Math.floor(temp / 10);
}
console.log(`Sum of digits of ${e} = ${digitSum}`);

// 6. Armstrong number (sum of digits cubed)
let temp2 = f;
let armSum = 0;
while (temp2 > 0) {
  let digit = temp2 % 10;
  armSum += digit ** 3;
  temp2 = Math.floor(temp2 / 10);
}
if (armSum === f) {
  console.log(`${f} is an Armstrong number`);
} else {
  console.log(`${f} is not an Armstrong number`);
}
