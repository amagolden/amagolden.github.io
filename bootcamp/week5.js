// Define a function that takes, as arguments, name, date, and mark. 
//Use string literals to output the value of each argument passed to the 
//function to screen. Once you're done, call the function with the given 
//arguments to test that's working as intended. Your output should be:

//Name: David
//Date: 25/02/2024
//Mark: 95

function testScores (name, date, mark) {
    console.log(`Name: ${name}`)
    console.log(`Date: ${date}`)
    console.log(`Mark: ${mark}`)
}

//testScores("Angela", "05/02/2024", 99);

//5.2 assignment

function removeStudentByName(students, studentName) {
	let studentIndex = -1;

	for (i = 0; i < students.length; i++) {
		if (students[i] === studentName) {
			studentIndex = i;
            break;
		}
	}

//    console.log(studentIndex);
//   console.log(students);
//    console.log(i);
//    console.log(removedStudent);

	if (studentIndex === -1) {
		return "the student was not found";
	}
	else {
        let removedStudent = students.splice(studentIndex, 1);
        return removedStudent;
    }
}

//testArray = ["a", "b", "c", "d", "e"];

//console.log(removeStudentByName(testArray, "a"));

//5.2 exercises

//create a program that takes an array of numbers, sums them using an 
//anonymous function, and then squares the result using an arrow function.

testArray = [1, 2, 3, 4, 5, 6];

const sumSquare = function (numbers) {
	results = 0;

	for (number in numbers) {
		results += numbers[number];
	}

	const square = (sum) => sum * sum;

	return square(results);
}

//console.log(sumSquare(testArray));

