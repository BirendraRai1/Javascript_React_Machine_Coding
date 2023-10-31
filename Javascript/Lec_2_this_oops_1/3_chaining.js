let ladder = {
  step: 0,
  up() {
    this.step++;
    //console.log("inside up fn", this);
    return this;
  },
  down() {
    this.step--;
    //console.log("inside down fn", this);
    return this;
  },
  showStep: function () {
    //console.log("inside showStep ", this);
    console.log(this.step);
    return this;
  },
};

// up fn on ladder
// ladder.up();
// // up fn on ladder
// ladder.up();

// ladder.up();
// ladder.down();
// ladder.showStep();

ladder.up().up().up().down().showStep();
