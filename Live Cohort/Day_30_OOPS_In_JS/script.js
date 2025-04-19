class Toffee {
  constructor(flavor, name, color) {
    this.flavor = flavor;
    this.name = name;
    this.color = color;
  }
  getFlavor() {
    return this.flavor;
  }
  getColor() {
    return this.color;
  }
  getName() {
    return this.name;
  }
  setFlavor(flavor) {
    this.flavor = flavor;
  }
  setColor(color) {
    this.color = color;
  }
  setName(name) {
    this.name = name;
  }
}

const t1 = new Toffee("vanilla", "Milky Bite", "white");

console.log(t1.getColor() + " " + t1.getFlavor() + " " + t1.getName());
t1.setFlavor("chocolate");
console.log(t1.getColor() + " " + t1.getFlavor() + " " + t1.getName());
