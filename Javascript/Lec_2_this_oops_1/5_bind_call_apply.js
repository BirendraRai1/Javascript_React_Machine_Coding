let cap = {
  name: "Steve",
  team: "Cap",
  petersTeam: function (mem1, mem2, ...otherMem) {
    console.log(
      `Hey ${this.name} I am your neighbourhood's  spiderman and i belong to ${this.team}'s team`
    );
    console.log(`I am working with ${mem1} & ${mem2} with ${otherMem}`);
  },
};
let ironMan = {
  name: "Tony",
  team: "Iron Man",
};

//cap.petersTeam("black panther", "Winter soldier");

// borrow a function from another object
// used to call it
cap.petersTeam.call(ironMan, "Natsha", "WarMachine");

// apply -> borrow for n number of paramters
cap.petersTeam.apply(ironMan, [
  "Natsha",
  "WarMachine",
  "doctor strange",
  "loki",
  "thor",
]);

// bind -> copies function that you can call later with the same this
let ironManStolenMem = cap.petersTeam.bind(ironMan);

//ironManStolenMem("Natsha", "WarMachine", "doctor strange");

//ironManStolenMem("loki", "thor");

/****difference between call and apply***/

/***
 * Call and apply are identical in functionality.The only difference is that call accepts
 * call accepts a list of arguments whereas apply accepts a single array of arguments
 *
 * call and apply is used to borrow the method only once
 * bind is used to make a permanent copy of that method to use multiple times
 */
