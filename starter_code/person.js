class Person {
  constructor(name, originFloor, destinationFloor){
    this.name = name;
    this.originFloor = originFloor;
    this.destinationFloor = destinationFloor;
  }
  getOn() {
    console.log(this.passengers);
    box.passengers[this.originFloor].unshift({name: this.name, origin: this.originFloor, destination: this.destinationFloor });
  }
  getOff() {

  }

}

module.exports = Person;
