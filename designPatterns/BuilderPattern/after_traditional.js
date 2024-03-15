function address(zip, street) {
  this.zip = zip;
  this.street = street;
}

function user(name) {
  this.name = name;
}

function userBuilder(name) {
  this.user = new user(name);

  this.setAge = (age) => {
    this.user.age = age;
    return this;
  };

  this.setPhone = (phone) => {
    this.user.phone = phone;
    return this;
  };

  this.setAddress = (address) => {
    this.user.address = address;
    return this;
  };

  this.build = () => {
    return this.user;
  };
}
const builder = new userBuilder("Bob");
const user1 = builder.setAddress(new address("12345", "Main St.")).build();
console.log("user is ", user1);
