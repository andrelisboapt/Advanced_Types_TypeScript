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

function add(a: Combinable, b: Combinable){
    if (typeof a === 'string' || typeof b === 'string'){ //this is a type guard, because we have flexibility on the type but this make sures that we can compile, otherwise we could get errors (for example sum of a string with a number)
        return a.toString()+ b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

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