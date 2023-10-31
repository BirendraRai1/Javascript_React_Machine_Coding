// why use case of bind , apply , call -> borrow features
//bind call and apply is used to borrow features

let cap = {
  name: "Steve",
  team: "Cap",
  petersTeam: function (mem1, mem2) {
    console.log(`Hey ${this.name} I am your neighborhood's  
        spiderman and i belong to ${this.team}'s team with members  ${mem1} ${mem2}`);
  },
};
let ironMan = {
  name: "Tony",
  team: "Iron Man",
};
// borrow the method only once with defined number of parameter
// use petersTeam method -> only once
//cap.petersTeam.call(ironMan, "biru", "sakshi");

/****
 *
 * Apply: borrow the method only once with n no number of parameter.
 * Here argument are passed in the form of an array
 * **/
// let membersArray = ["thor", "loki"];
// cap.petersTeam.apply(ironMan, membersArray);

/**
 * react -> eventListeners elememnt in react
 * */
/*****
 * bind : making permanent copy of that method to use multiple times
 * ******/

const boundFn = cap.petersTeam.bind(ironMan);
boundFn("cap", "war machine");

// cap.petersTeam.call();

// let arr=[] -> Array
// let obj ={} -> Object
// function fn(){} -> Functions
