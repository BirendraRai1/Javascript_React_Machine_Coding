function address(zip, street) {
  this.zip = zip;
  this.street = street;
}

function user(name) {
  this.name = name;
}

function userBuilder(name) {
  this.user = new user(name);

  function setAge(age) {
    this.user.age = age;
    return this;
  }

  function setPhone(phone) {
    this.user.phone = phone;
    return this;
  }

  function setAddress(address) {
    this.user.address = address;
    return this;
  }
}

function build() {
  return this.user;
}

const builder = new userBuilder("Bob");
const user1 = builder.setAddress(new address("12345", "Main St.")).build();
console.log("user is ", user1);

//after_traditional code is not running needs to consult
