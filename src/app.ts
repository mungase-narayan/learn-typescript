//Type alias => Coustom Types

type User = {
    name: string;
    age: number;
    adress?: string; // Optional property name using ? before :
}

const user : User = {
    name: 'John Doe',
    age: 30
}

type ID = number;
const uderId : ID = 123;


//Interfaces in Typescript =>
    /*One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.
*/ 


interface Transaction {
    payerAccountNumber: number;
    payeeAccountNumber: number;
}

interface BankAccount {
    accountNumber: number;
    accountHolder: string;
    balance: number;
    isActive: boolean;
    transactions: Transaction[];
}

const transaction1: Transaction ={
    payerAccountNumber: 123456789,
    payeeAccountNumber: 987654321
}

const transaction2: Transaction ={
    payerAccountNumber: 98765432,
    payeeAccountNumber: 94722736,
}

const bankAccount: BankAccount ={
    accountNumber: 123456789,
    accountHolder: 'John Doe',
    balance: 1000,
    isActive: true,
    transactions: [
        transaction1,
        transaction2,
    ]
}


//Extending interfaces =>
    /*Sometimes, you want to extend an existing interface and add new fields to it without changing the original one. This can be achieved by using the extends keyword. This allows you to take an existing interface and create a copy of it while also adding new fields to it. For example, we could do something like this.
*/


interface Book {
    title: string;
    author: string;
    publicationYear: number;
    price: number;
}

interface Ebook extends Book{
    // title: string;
    // author: string;
    // publicationYear: number;
    // price: number;
    fileSize: number;
    format: string;
    
}
interface AudioBook extends Ebook{
    // title: string;
    // author: string;
    // publicationYear: number;
    // price: number;
    // fileSize: number;
    // format: string;
    dutation: number;
}

const book: Ebook = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publicationYear: 1925,
    price: 12.99,
    fileSize: 300,
    format: 'PDF',
}


//Merging Interfaces =>
    /*The simplest, and perhaps most common, type of declaration merging is interface merging. At the most basic level, the merge mechanically joins the members of both declarations into a single interface with the same name.
*/

interface Person {
    name: string;
    age: number;
}

interface Person {
    address: string;
}

const person: Person = {
    name: 'John Doe',
    age: 30,
    address: '123 Main St'
}


//Unions in typescript =>
    /* TypeScript allows a flexible type called any that can be assigned to a variable whose type is not specific. On the other hand, TypeScript allows you to combine specific types together as a union type.
*/

type UserID = number | string
//Narrowing in typescript =>
    /*Since a variable of a union type can assume one of several different types, you can help TypeScript infer the correct variable type using type narrowing. To narrow a variable to a specific type, implement a type guard. Use the typeof operator with the variable name and compare it with the type you expect for the variable.
*/

function getUser(id: UserID){
    if(typeof id === 'string'){
        return console.log(id.toUpperCase());
    }
    return console.log(`User with ID: ${id}`);
}

getUser('5');



type ListType = string | number[]
function getUserList(list: ListType){
    return list.slice(0, 3);
}

console.log(getUserList('Narayan'))



// Generics in typescript =>
    /*In TypeScript, generics are used to assign multiple types to a function or variable without the value losing that specific type information upon return. The any keyword is similar in that it accommodates any and all types. However, it will not retain specific type information.
*/


function logString(arg: string){
    console.log(arg);
    return arg;
}

function logNumber(arg: number){
    console.log(arg);
    return arg;
}

function logArray(arg: any[]){
    console.log(arg);
    return arg;
}


//Generic function =>
function logAnything<T>(arg: T): T{
    console.log(arg);
    return arg;
}


//Example of Using Generics
interface HasAge {
    age: number;
}

function getOldest <T extends HasAge> (people: T[]): T{
    return people.sort((s, e)=>e.age - s.age)[0];
}

const people: HasAge[] = [{age: 20}, {age: 30}, {age: 40}]

interface player{
    name: string;
    age: number;
}

const players: player[] =[
    {name: 'narayan', age: 20},
    {name: 'hari', age: 22},
    {name: 'rushi', age: 24}
]

//Using Assertion
const oldestPlayer = getOldest(players) as player;
console.log(oldestPlayer.name)

//Using Generics
const oldestPerson = getOldest(people);
console.log(oldestPerson.age)


// #1. Examples of Using Generics =>
interface Ipost {
    title: string;
    id: number;
    description: string;
}

interface Iuser {
    name: string;
    id: number;
    age: number;
}

const fetchPostData = async (postPath: string): Promise<Ipost[]>  =>{
    const response = await fetch(`http://localhost:6600${postPath}`);
    return response.json();
}

const fetchUserData = async (userPath: string): Promise<Iuser[]>  =>{
    const response = await fetch(`http://localhost:6600${userPath}`);
    return response.json();
}

// ###Generics Function =>
const fetchData = async <resultType>(urlPath: string): Promise<resultType>  =>{
    const response = await fetch(`http://localhost:6600${urlPath}`);
    return response.json();
}

//immediately invoke function
(async () => {
    // const posts = await fetchPostData('/posts');
    // posts[0].description  # Auto complition 1.title 2.id 3.description

    // const users = await fetchUserData('/users');
    // users[0].name  # Auto complition 1.name 2.id 3.age

    const posts = await fetchData<Ipost[]>('/posts') //only change function types and parameters
    //posts[0].description  # Auto complition 1.title 2.id 3.description
    //users[0].name  # Auto complition 1.name 2.id 3.age
})



// ###Structural Typing or duck typing in typescript =>
    /*In TypeScript, the duck-typing feature ensures type safety. As a result of the duck-typing rule, the TypeScript compiler verifies that two objects are identical in terms of having matching properties and methods. This technique is used to compare two objects by determining if they have the same type-matching properties and object members.
*/

interface ICreadential {
    username: string;
    password: string;
    isAdmin?: boolean;
}

function login(creadentials: ICreadential): boolean{
    console.log(creadentials);
    return true;
}

const user1 = {
    username: 'narayan',
    password: '123456',
    isAdmin: true
}

// login(user1)

interface IAuth {
    username: string;
    password: string;
    login(username: string, password: string): void;
}

const auth: IAuth = {
    username: 'narayan',
    password: '123456',
    login(username: string, password: string){
        return true;
    }
}



// ###Inference in typescript =>
    /*In TypeScript, there are several places where type inference is used to provide type information when there is no explicit type annotation. For example, in this code.

    Type inference is helpful in type-checking when there are no explicit type annotation is available. In type inference, there can be a situation where an object may be initialized with multiple types.

*/

//Example
const data = {
    name: 'narayan',
    age: 20
}

// data.name  # type: string
// data.age   # type: number

