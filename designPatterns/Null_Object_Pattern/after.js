function user(id, name) {
  this.id = id;
  this.name = name;

  // const hasAccess = () => {
  //   return this.name === "Bob";
  // };
  // the wrong with above writing of code is
  //you don't have to use this in front of function in case of classes but in the case of function constructor you have to use it
  this.hasAccess = () => {
    return this.name === "Bob";
  };
}

function nullUser() {
  this.id = -1;
  this.name = "Guest";

  // const hasAccess1 = () => {
  //   return false;
  // };
  this.hasAccess = () => {
    return false;
  };
}

const users = [new user(1, "Bob"), new user(2, "John")];

function getUser(id) {
  const user = users.find((user) => user.id === id);
  /*
    We are now checking if the user is null before returning, and instead returning a NullUser object if the user is null. This means that we no longer need to check for null users later in the code and can treat all users that are returned from this function the same whether they exist or not.
  */
  if (user == null) {
    return new nullUser();
  } else {
    return user;
  }
}

function printUser(id) {
  const user = getUser(id);
  console.log("Hello " + user.name);

  if (user.hasAccess()) {
    console.log("You have access");
  } else {
    console.log("You are not allowed here");
  }
}

//printUser(1);
/*
Hello Bob
You have access
****/
//printUser(2);
/*
Hello John
You are not allowed here
*****/
printUser(3);
/*
Hello Guest
You are not allowed here
*****/
