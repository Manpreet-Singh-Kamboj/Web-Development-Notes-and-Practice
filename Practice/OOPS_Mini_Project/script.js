class MobileShop {
  constructor() {
    this.mobiles = [];
  }
  getMobiles() {
    return this.mobiles.forEach((m) => m.getMobileInfo());
  }
  addMobile(mobile) {
    this.mobiles.push(mobile);
  }
  addMobiles(mobiles) {
    this.mobiles.push(...mobiles);
  }
  removeMobile(mobile) {
    this.mobiles = this.mobiles.filter((m) => m !== mobile);
  }
}

class Mobile {
  constructor(brand, model, price, color) {
    this.id = Math.floor(Math.random() * 100000);
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.color = color;
    this.sims = [];
  }
  getMobileInfo() {
    console.log(
      `${this.brand} - ${this.model} - ${this.price} - ${this.color} - ${this.sims}`
    );
  }
  insertSim(sim) {
    if (this.sims.length > 2) {
      console.log("Sim slot is full");
      return;
    }
    this.sims.push(sim);
  }
}

class Sim {
  constructor(carrier, number, balance) {
    this.carrier = carrier;
    this.number = number;
    this.balance = balance;
  }
  addBalance(amount) {
    if (amount > 0) {
      this.balance += amount;
    } else {
      console.log("Invalid amount");
      return;
    }
  }
  removeBalance(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    }
  }
}

const MyMobileShop = new MobileShop();
const samsungS25Ultra = new Mobile("Samsung", "S25 Ultra", 100000, "Black");
let airtelSim1 = new Sim("Airtel", 9876543210, 399);
let jioSim1 = new Sim("Jio", 9876543211, 399);
samsungS25Ultra.insertSim(airtelSim1);
samsungS25Ultra.insertSim(jioSim1);
const samsungS25 = new Mobile("Samsung", "S25", 80000, "Black");
const iphone16ProMax = new Mobile(
  "Apple",
  "iPhone 16 Pro Max",
  120000,
  "Desert Titanium"
);
let jioSim2 = new Sim("Jio", 9876543212, 399);
iphone16ProMax.insertSim(jioSim2);
MyMobileShop.addMobiles([samsungS25Ultra, samsungS25, iphone16ProMax]);

const ChdMobileShop = new MobileShop();
const samsungS25Plus = new Mobile("Samsung", "S25 Plus", 70000, "Black");
const iphone16Pro = new Mobile(
  "Apple",
  "iPhone 16 Pro",
  110000,
  "Desert Titanium"
);
let airtelSim2 = new Sim("Airtel", 9876543213, 399);
iphone16Pro.insertSim(airtelSim2);
ChdMobileShop.addMobiles([samsungS25Plus, iphone16Pro]);
MyMobileShop.getMobiles();
console.log(MobileShop.getMobiles());
