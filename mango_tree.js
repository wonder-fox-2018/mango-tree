"use strict"

// Release 0
const r_heigth = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._harvested = "";
    this._healthStatus;
    this.mature = 3;
    this.maxHeight = 5;
    this.ageDeath = 15;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get healthStatus() {
    return this._healthStatus;
  }

  get harvested() {
    return this._harvested;

  }

  // Get current states here

  // Grow the tree
  grow() {

    if (this._age + 1 >= this.ageDeath) {
      this._healthStatus = false;
    }



    this._age += 1;
    if (this._height < this.maxHeight) {
      let r = parseFloat(Math.random().toFixed(1))
      if (r + this._height >= this.maxHeight)
        this._height = this.maxHeight;
      else
        this._height = parseFloat((this._height+r).toFixed(1));
    }
    
  }

  // Produce some mangoes
  produceMangoes() {

    if (this._age >= this.mature) {
      let r_add = Math.floor(Math.random() * 20 + 1); //max 20 buah
      for (let i = 0; i < r_add; i++) {
        let temp = new Mango()
        this._fruits.push(temp);
      }
    }

  }

  // Get some fruits
  harvest() {
    let good = 0;
    let bad = 0;
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i].quality == "good")
        good += 1;
      else
        bad += 1;
    }
    this._harvested = `${this._fruits.length} (${good} good ,${bad} bad)`;
    this._fruits.length = 0;

  }

}
const r_quality = ["bad", "good"];
class Mango {
  // Produce a mango
  constructor() {
    this.quality = r_quality[Math.floor(Math.random() * r_quality.length)];
  }
}

// driver code untuk release 0
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false);


// Release 1
class AppleTree {
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._harvested = "";
    this._healthStatus;
    this.mature = 4;
    this.maxHeight = 2;
    this.ageDeath = 8;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get healthStatus() {
    return this._healthStatus;
  }

  get harvested() {
    return this._harvested;

  }

  // Get current states here

  // Grow the tree
  grow() {

    if (this._age + 1 >= this.ageDeath) {
      this._healthStatus = false;
    }



    this._age += 1;
    if (this._height < this.maxHeight) {
      let r = parseFloat(Math.random().toFixed(1))
      if (r + this._height >= this.maxHeight)
        this._height = this.maxHeight;
      else
        this._height = parseFloat(this._height+r).toFixed(1);
    }


  }

  // Produce some mangoes
  produceApples() {

    if (this._age >= this.mature) {
      let r_add = Math.floor(Math.random() * 20 + 1); //max 20 buah
      for (let i = 0; i < r_add; i++) {
        let temp = new Mango()
        this._fruits.push(temp);
      }
    }

  }
  // Get some fruits
  harvest() {
    let good = 0;
    let bad = 0;
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i].quality == "good")
        good += 1;
      else
        bad += 1;
    }
    this._harvested = `${this._fruits.length} (${good} good ,${bad} bad)`;
    this._fruits.length = 0;

  }
}
class Apple {
  constructor() {
    this.quality = r_quality[Math.floor(Math.random() * r_quality.length)];
  }
}

// Release 2
// class FruitTree {}
// class Fruit {}

// class PearTree{}
// class Pear{}