function calculate (n1, n2) {
  let answer = n1 + n2
  return answer
}
  
let num1 = Number(prompt("Enter a whole number:"))
let num2 = Number(prompt("Enter a second whole number: "))

let summedNumbers = calculate(num1,num2)
  console.log(`The sum of ${num2} and ${num1} is ${summedNumbers}.`)
  