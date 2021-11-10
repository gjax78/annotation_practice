//declare a function called addNumbers
function addNumbers() {
  //declare variable called firstNum and assign it to a value of 9
  var firstNum = 9
  //declare a variable called secondNum assigned to a value of 14
  var secondNum = 14

  // reassign the firstNum variable to a value of 3
  firstNum = 3
  // reassign the secondNum variable to a value of 4
  secondNum = 4

  // declarea new variable called nums and assign it to an array of firstNum and secondNum
  var nums = [firstNum, secondNum]

  //declare a variable called product and assign it to a value of the firstNum multiplied by secondNum
  var product = firstNum * secondNum
  //declare a variable called sum and assign it to a value of the sum of firstNum and secondNum
  var sum = firstNum + secondNum
  // declare a variable called average and assign it to the value of sum divided by nums.length
  var average = sum / nums.length
  //log to the console the first value in the nums array by referencing the index
  console.log(nums[0])
  //log to the console the second value in the nums array by referencing the index
  console.log(nums[1])

  //log to the console a string value with num1 and num2 interpolated in
  console.log(`The first number is ${num1} and the second number is ${num2}!`)

  //the whole function will return the value of the sum
  return sum
}
