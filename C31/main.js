//🚀 Day 31 Challenge: Start Coding! 🚀
/* Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.*/
var favoriteFruits = ["Apple", "Banana", "Cherry"];
favoriteFruits.push("Mango");
console.log(favoriteFruits);
/*Question 92: Write a function to remove the last element from an array and return the removed element.*/
function removeLastElement(array) {
    // Check if the array is empty
    if (array.length === 0) {
        return undefined; // Return undefined if array is empty
    }
    else {
        return array.pop(); // Remove and return the last element of the array
    }
}
// Example: Removing the last fruit from the array
var fruits = ["Apple", "Banana", "Cherry"];
console.log(removeLastElement(fruits)); // Outputs: 'Cherry'
console.log(fruits); // Outputs: ['Apple', 'Banana']
/*Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".*/
function replaceBananaWithMango(fruits) {
    var index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Mango";
}
var fruits1 = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits1);
console.log(fruits1);
