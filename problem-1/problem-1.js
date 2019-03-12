/*
**  Multiples of 3 & 5
** 
**  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
**  The sum of these multiples is 23.
**  Find the sum of all the multiples of 3 or 5 below 1000.
**
*/

sum = 0;

for(let i = 2; i < 1000; i++) {
  sum += (i % 3 && i % 5) ? 0 : i
}

console.log(sum)

i = 2

while(i++, i < 1000) { sum += (i % 3 && i % 5) ? 0 : i }

console.log(sum)
