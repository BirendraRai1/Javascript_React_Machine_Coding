function address(zip, street) {
  this.zip = zip;
  this.street = street;
}

function user(name, { age, phone = "123-456-7890", address } = {}) {
  this.name = name;
  this.age = age;
  this.phone = phone;
  this.address = address;
}

let user1 = new user("Bob", { address: new address("12345", "Main St.") });
console.log("user1 is ", user1);
