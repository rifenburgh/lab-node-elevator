class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.direction  = "Up";
    this.continue   = true;
    this.requests   = [];
    this.passengers = [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ];
  }

  start() {
    if (this.continue === false) {
      return;
    }
    // Call this.update every second until this.continue = false
    this.update();
    // setTimeout(() => {box.update();}, 1000);
  }
  stop() {
    this.continue = false;
  }
  update() {
    this.passengers.forEach((x, colIndex) => {
      x.forEach((y, rowIndex) => {
        if (y.destinationFloor === this.floor) {
          console.log(x.name + " has exited the elevator.");
          passengers[colIndex].splice(rowIndex, 1);
        }
      });
    });
    console.log("Updating");
    this.log();
    
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() {
    if (this.floor >= 10) {
      this.direction = "Down";
      return;
    }
    if (this.direction === "Up") {
      this.floor += 1;
      console.log("floorUp: " + this.floor);
    }
  }
  floorDown() {
    if (this.floor < 2) {
      return;
    }
    this.floor -= 1;
    console.log("floorDown: " + this.floor);
  }
  call() {

  }
  log() {
  console.log("Direction: " + this.direction + " Floor: " + this.floor);
  console.log("Passengers " + this.passengers);
  }
}

module.exports = Elevator;
