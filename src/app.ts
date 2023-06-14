type Admin = { //here we are using type but could be an interface too
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee; //this type needs to include all the properties from both types
// interface ElevatedEmployee extends Employee, Admin {}



const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date() //current time
};


type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; //this means that needs to be a number since both types/interface have that type in common


function add(a: number, b: number): number; //these are function overloads, they help when typescript is not able to infer correctly the type of the return value, so here we can infer the correct type for each combination
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable){
    if (typeof a === 'string' || typeof b === 'string'){ //this is a type guard, because we have flexibility on the type but this make sures that we can compile, otherwise we could get errors (for example sum of a string with a number)
        return a.toString()+ b.toString();
    }
    return a + b;
}

const result = add('Max', ' Schwarz');
result.split(' ');

/* type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee){
    console.log('Name: ' + emp.name);
    if ('privileges' in emp){
        console.log('Privileges: ' + emp.privileges)
    }
    if ('startDate' in emp){
        console.log('Start Date: ' + emp.startDate)
    }
}

printEmployeeInformation(e1);

class Car {
    drive(){
        console.log('Driving...')
    }
}

class Truck {
    drive(){
        console.log('Driving a truck...')
    }

    loadCargo(amount: number){
        console.log('Loading cargo...' + amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    //if ('loadCargo' in vehicle){ //we could use this too
    if(vehicle instanceof Truck){ //type guard is the idea of confirm that the object or property exists before we run
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);


interface Bird { //could be a class too
    type: 'bird'; //descriminated unions, same property in both interface just to be more safe
    flyingSpeed: number;
}

interface Horse {
    type: 'horse'
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    let speed;
    switch (animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving with speed: ' + speed)
}

moveAnimal({type: "bird", flyingSpeed: 10})

//const userInputElement = document.getElementById('user-input')!; //the exclamation mark never return null, we could also use a if(userInputElement)

//userInputElement.value = "Hi there!" //typescript don't know this is a input element, he thinks its just a HTMLelement, thats why "value" is giving errors


//const userInputElement = <HTMLInputElement>document.getElementById('user-input')! //this is a type casting, so the typescript knows this is a html input element
const userInputElement = <HTMLInputElement>document.getElementById('user-input')! as HTMLInputElement;



userInputElement.value = "Hi there!"


interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character!'}
    //id: string;  //needs to be the same type of the index property
    [prop: string]: string; //all we are saying here is that here can be any property that could be interpreted as a string with a string value, here we are using the index property
}

const errorBag: ErrorContainer = { //we have extra flexability because we don't know how many properties we will use and there values.
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};

 */












