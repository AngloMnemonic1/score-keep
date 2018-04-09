import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {  //Meteor.startup(function(){

});


/*
//object spread operator
let user = {
  name: 'Steve',
  location:'Midlands'
};

let person = {
  ...user,    //uses all properties of user
  age: 25
};
console.log(person);

//object property shorthand
let bike = 'Scott';
let stuff = {
  //bike: bike,
  bike,     //shorthand
  laptop: 'HP'
};
console.log(stuff);

let house = {
  bedrooms: 2,
  bathrooms: 1.5
}
let yearBuilt = 1969;

let houseItem = {
  ...house,
  bedrooms: 3,
  yearBuilt,
  flooring: 'Carpet'
}
console.log(houseItem);
*/

//import './../imports/utils';
//import {greetUser} from './../imports/utils';
//import {add} from './../imports/math';
//import addDefault from './../imports/math';
//console.log('Log from /server/main.js');
//console.log(greetUser());
//console.log(addDefault(8,8));


    /*

    class Person {
      constructor(name = 'Anonymous', age = 0){//constructor with defaul anonymous
        this.name = name;
        this.age = age;
      }
      getGreeting(){
        return 'Hi I am ' + this.name + '.';
        //return 'Hi I am ${this.name}.';
      }
      getPersonDesc(){
        return this.name + ' is ' + this.age + ' year(s) old.'
      }
    }
    class Employee extends Person {
    constructor(name, age, title){
      super(name,age);  //calls parent function
      this.title = title;
    }
    hasJob(){
      return !!this.title;
    }
    getGreeting(){  //overriding the Person getGreeting
      if (this.title){
        return 'Hello I am' + this.name + '. I work as ' + this.title
      }else{
        return super.getGreeting();  //calls the parent method Person
      }
    }

    }

    class Programmer extends Person {
    constructor (name, age, prefferredLanguage = 'assembly'){
      super(name, age);
      this.prefferredLanguage = prefferredLanguage;
    }
    getGreeting(){  //overriding the Person getGreeting
      return 'Hello, I am ' + this.name + ' a developer using ' + this.prefferredLanguage
    }

    }


    let me = new Employee('Steve',54, 'ad admin');
    console.log(me.getGreeting());
    //console.log(me.hasJob());

    let person = new Employee('Steve');
    //console.log(person.getPersonDesc());
    console.log(person.getGreeting());

    let compProgrammer = new Programmer('Steve',54,'Javascript');
    console.log(compProgrammer.getGreeting());




    Players.insert({
      name:'Million',
      score:5
    });
    console.log(Players.find().fetch());
    */

    //annonomus functions
    //let square = function(x){
    //  return x * x;
    //};
    //console.log(square(2));

    //arrow functions

    //statement syntax
    //let square = (x) => {
    //  return x * x;
    //}

    //expression syntax
    //let square = (x) => x * x;
    //console.log(square(4));

    //create object
    /* let user = {
      name: "Steve",
      sayHi: function(){
        console.log(this.name); //access to name in user object.
      }
    };
    user.sayHi();
    */
    //convert to arrow function
    /*
    let user = {
      name: "Steve",
      sayHi: () => {
        console.log(this.name); //no access to name in user object. undefined
        //console.log(arguments) do not bind arguments
        //Arrow functions do not bind on this keyword
      }
    };
    user.sayHi();
    //user.sayHi(argument1, argument2);
    */

    /*
    let user = {
      name: "Steve",
      sayHi() { //function
          setTimeout(() => {
             console.log(this.name); //now access to outside of function
          }, 1000);
      }
    };
    user.sayHi();
    */

    /*
    let numbers = [9,99,4,56];
    //let newNumbers = numbers.map((number) => {
    //  return number + 1;}
    //)
    let newNumbers = numbers.map((number) => number + 1);
    console.log(newNumbers)
*/
