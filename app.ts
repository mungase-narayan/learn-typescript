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