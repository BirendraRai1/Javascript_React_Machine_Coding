function address(zip, street) {
  this.zip = zip;
  this.street = street;
}

function user(name, age, phone, address) {
  this.name = name;
  this.age = age;
  this.phone = phone;
  this.address = address;
}

const user1 = new user(
  "Bob",
  undefined,
  undefined,
  new address("12345", "Main St.")
);

console.log("user is ", user1);
