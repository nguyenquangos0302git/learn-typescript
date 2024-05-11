let car = 'Toyota';
let bike: string = 'Winner';
let animal: string;
animal = 'cat';

let num = 10;
let id: number = 1;
let age: number;
age = 5;

let isLoading: boolean = false;

let body1: undefined = undefined;

let footer: null = null;

let person: any;
person = 10;
person = 'Something';
person = false;

let house: {
 address: string;
 color?: string;
} = {
 address: '',
};
house.address = 'HCM';

let products: any[] = [];
products.push(1);
products.push('hcm');

let people: {
 name: string;
 age: number;
}[] = [];
people.push({
 name: 'Ducky',
 age: 27,
});

const sum = (num1: number, num2: number): number => {
 return num1 + num2;
};
const sub: (num1: number, num2: number) => number = (
 num1: number,
 num2: number
): number => num1 - num2;
const handle = (): void => {
 console.log(1234);
};

let price: string | number | boolean;
price = 10;
price = '20';
price = false;


let body: { name: string | number } | { firstName: string } = {
 name: 100,
};

enum Sizes {
 S = 'S',
 M = 'M',
 L = 'L',
 XL = 'XL',
}
let size = Sizes.S;

interface State {
 name: string;
 isLoading: boolean;
}
interface State {
 age: number;
}
let state: State = {
 name: 'S',
 isLoading: false,
 age: 20,
};

type State1 = {
 name: string;
 isLoading: boolean;
};
let state1: State1 = {
 name: 'S',
 isLoading: false,
};
type Name = {
 name: string;
};
type Age = {
 age: number;
};
type Person = Name | Age;

const handleClick = <Type>(value: Type) => value;
handleClick<number>(3);

class PersonOne {
 private name: string;
 age: number;
 readonly monney: number = 40;
 constructor(name: string, age: number) {
   this.name = name;
   this.age = age;
 }
}
