## Large Projects

    *For large projects we need three things:-
    - There will be 1000s of components
    - For them you need to know Redux

## Peformance

- Split the code into multiple sections
- After splitting the code .There are Two ways to load the code

  - load that code when it is required .For eg:-when button is clicked
  - Lazy Loading : is when you depriortize certain part of react code that is not important
    -For lazy loading you have have to use a thing called suspense

    -using npx create-react-app for 1.7Mb we have only one file that is bundle.js.That was the biggest reason to move from create-react-app to vite .vite by default does the code splitting for us.Code splitting is different from lazy loading.Splitting is import because your user cannot get all the code at a given point of time

    -why do we split??
    Ans:- Because size of react bundle is high while creating react applications using create-react-app
    and code splitting is automatically done using create
    vite @latest

    If you want few things to be loaded later you can use
    lazy loading and use suspense for fallback

## What is the use of a constructor function in JavaScript?

Ans:-
Constructor functions are used to create objects in JavaScript.
When do we use constructor functions?
If we want to create multiple objects having similar properties and methods, constructor functions are used.
Ex -
function Person(name,age,gender){
this.name = name;
this.age = age;
this.gender = gender;
}
var per1 = new Person("Anand", 27, "male");
var per2 = new Person("Hindustanii", 34, "male");
var per3 = new Person("Lilly", 17, "female");
