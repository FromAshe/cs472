
// quesiton One
let Person = {
    name : "",
    dateOfBirth : "",
    getName : function(){
        return this.name;
    },
    setName : function(name){
        this.name = name;
    }
};

let John = Object.create(Person);
John.setName("John");
John.dateOfBirth = "December 10th, 1998";

console.log("The person's name is "+ John.getName());
console.log("John was born on " + John.dateOfBirth);

//question two

Employee = Object.create(Person);
Employee.salary = 0;
Employee.hireDate = Date.now;

Employee.doJob = function(jobTitle){
console.log(this.name + " is a "+ jobTitle + "who earn salary $" + this.salary);
}
let employee = Object.create(Employee);
employee.name = "Anna";
employee.salary = 243995.50;
employee.doJob("programmer");

// Question Three
 function Person1(name, dateOfBirth){
    this.name = name,
    this.dateOfBirth = dateOfBirth,
    this.getName = function(){
        return this.name;
    },
    this.toString = function(){
        return "Name: " + this.name + " DateOfBirth: " + this.dateOfBirth;
    }
}
    let per1 = new Person1("John", "1998-12-10");
    console.log(per1.toString());

    // Question Four
 