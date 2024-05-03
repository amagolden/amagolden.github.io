//activity 4.1 Task 1

let fruits = ['apple', 'banana', 'pear', 'pineapple'];

function displayFruitsInformation(fruits) {
    let fruitSentences = [];
  
    for (fruit in fruits) {
      let fruitSentence = "I love " + fruits[fruit];
      fruitSentences.push(fruitSentence);  
    };

    let shortestFruit = fruits[0];
    let longestFruit = fruits[0];

    for (let i = 0; i < fruits.length; i++) {
        if (longestFruit.length < fruits[i].length) {longestFruit = fruits[i]};

        if (shortestFruit.length > fruits[i].length) {shortestFruit = fruits[i]};
    }

    return {
        fruitSentences: fruitSentences,
        shortestFruit: shortestFruit,
        longestFruit: longestFruit
    };
  }

  //console.log(displayFruitsInformation(fruits));

//activity 4.1 Task 2
const person = {
	name: 'John',
	age: 30,
	occupation: 'Developer',
	email: "johndoe29@gmail.com",
	isStudent: false
};

function getObjectInformation(contact) {
    let infoArray = [];

    for (attribute in contact) {
        infoArray.push("Key: " + attribute + ", Value: " + contact[attribute]);
    }

    return infoArray;
}

//console.log(getObjectInformation(person));

//activity 4.1 Task 3
let testData = [1, 3, 5, 6, 7, 2, 4, 6, 8];

function segregateNumbers(numbers) {
    let evenNumbers = [];
    let oddNumbers = [];

    for (number in numbers) {
        if (numbers[number] % 2 === 0) {evenNumbers.push(numbers[number])}
        else {oddNumbers.push(numbers[number])}
    }

    const result = {
        oddNumbers: oddNumbers,
        evenNumbers: evenNumbers 
    }

    return result;
}

//console.log(segregateNumbers(testData));

//activity 4.1 Task 4
const students = {
	"9512bb98a69e563dfd4edf7f": { //9512bb98a69e563dfd4edf7f is the student id.
		name: "Alice",
		age: 22,
    courses: ["Math", "Science"]
	}
};

function transformData(dataset) {
    let transformedStudents = [];

    for (data in dataset) {
        let newData = {
            id: data,
            name: dataset[data].name,
            age: dataset[data].age,
            courseCount: dataset[data].courses.length
        }

        transformedStudents.push(newData);
    }

    return transformedStudents;
};

//console.log(transformData(students));

//activity 4.1 Task 5

let libraryA = [{
    title: "Eras",
    author: "Taylor Swift",
    publishedYear: 1989,
    available: true
}, {
    title: "Cooking",
    author: "Reese Witherspoon",
    publishedYear: 2015,
    available: true
}, {
    title: "Startups",
    author: "Eric Ries",
    publishedYear: 2020,
    available: true
}];

function removeBook(bookArray, bookIndex) {
	bookArray.splice(bookIndex, 1); 
}

let borrowedBooksA = [];

function borrowBook(library, title, borrowedBooks) {

    for(let i = 0; i < library.length; i++) {
        if(title === library[i].title && library[i].available) {
            library[i].available = false;
            borrowedBooks.push(library[i]);
        }
    }
};

function returnBook(library, title, borrowedBooks) {

    for(let i = 0; i < borrowedBooks.length; i++) {
        if(title === borrowedBooks[i].title) {
            borrowedBooks[i].available = true;
            removeBook(borrowedBooks, i);
        }
    }

};