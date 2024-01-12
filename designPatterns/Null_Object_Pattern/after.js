function user(id, name) {
  this.id = id;
  this.name = name;

  const hasAccess = () => {
    return this.name === "Bob";
  };
}

function nullUser() {
  this.id = -1;
  this.name = "Guest";

  const hasAccess1 = () => {
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
    console.log("user is ", user);
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

printUser(1);
