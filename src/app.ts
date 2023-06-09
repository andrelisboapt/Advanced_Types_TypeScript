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





