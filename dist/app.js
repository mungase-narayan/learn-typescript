"use strict";
//Type alias => Coustom Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const user = {
    name: 'John Doe',
    age: 30
};
const uderId = 123;
const transaction1 = {
    payerAccountNumber: 123456789,
    payeeAccountNumber: 987654321
};
const transaction2 = {
    payerAccountNumber: 98765432,
    payeeAccountNumber: 94722736,
};
const bankAccount = {
    accountNumber: 123456789,
    accountHolder: 'John Doe',
    balance: 1000,
    isActive: true,
    transactions: [
        transaction1,
        transaction2,
    ]
};
const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publicationYear: 1925,
    price: 12.99,
    fileSize: 300,
    format: 'PDF',
};
const person = {
    name: 'John Doe',
    age: 30,
    address: '123 Main St'
};
//Narrowing in typescript =>
/*Since a variable of a union type can assume one of several different types, you can help TypeScript infer the correct variable type using type narrowing. To narrow a variable to a specific type, implement a type guard. Use the typeof operator with the variable name and compare it with the type you expect for the variable.
*/
function getUser(id) {
    if (typeof id === 'string') {
        return console.log(id.toUpperCase());
    }
    return console.log(`User with ID: ${id}`);
}
getUser('5');
function getUserList(list) {
    return list.slice(0, 3);
}
console.log(getUserList('Narayan'));
// Generics in typescript =>
/*In TypeScript, generics are used to assign multiple types to a function or variable without the value losing that specific type information upon return. The any keyword is similar in that it accommodates any and all types. However, it will not retain specific type information.
*/
function logString(arg) {
    console.log(arg);
    return arg;
}
function logNumber(arg) {
    console.log(arg);
    return arg;
}
function logArray(arg) {
    console.log(arg);
    return arg;
}
//Generic function =>
function logAnything(arg) {
    console.log(arg);
    return arg;
}
function getOldest(people) {
    return people.sort((s, e) => e.age - s.age)[0];
}
const people = [{ age: 20 }, { age: 30 }, { age: 40 }];
const players = [
    { name: 'narayan', age: 20 },
    { name: 'hari', age: 22 },
    { name: 'rushi', age: 24 }
];
//Using Assertion
const oldestPlayer = getOldest(players);
console.log(oldestPlayer.name);
//Using Generics
const oldestPerson = getOldest(people);
console.log(oldestPerson.age);
const fetchPostData = (postPath) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`http://localhost:6600${postPath}`);
    return response.json();
});
const fetchUserData = (userPath) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`http://localhost:6600${userPath}`);
    return response.json();
});
// ###Generics Function =>
const fetchData = (urlPath) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`http://localhost:6600${urlPath}`);
    return response.json();
});
//immediately invoke function
(() => __awaiter(void 0, void 0, void 0, function* () {
    // const posts = await fetchPostData('/posts');
    // posts[0].description  # Auto complition 1.title 2.id 3.description
    // const users = await fetchUserData('/users');
    // users[0].name  # Auto complition 1.name 2.id 3.age
    const posts = yield fetchData('/posts'); //only change function types and parameters
    //posts[0].description  # Auto complition 1.title 2.id 3.description
    //users[0].name  # Auto complition 1.name 2.id 3.age
}));
function login(creadentials) {
    console.log(creadentials);
    return true;
}
const user1 = {
    username: 'narayan',
    password: '123456',
    isAdmin: true
};
const auth = {
    username: 'narayan',
    password: '123456',
    login(username, password) {
        return true;
    }
};
// ###Inference in typescript =>
/*In TypeScript, there are several places where type inference is used to provide type information when there is no explicit type annotation. For example, in this code.

Type inference is helpful in type-checking when there are no explicit type annotation is available. In type inference, there can be a situation where an object may be initialized with multiple types.

*/
//Example
const data = {
    name: 'narayan',
    age: 20
};
// data.name  # type: string
// data.age   # type: number
