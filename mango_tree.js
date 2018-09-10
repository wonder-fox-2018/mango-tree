"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0
    this._height = 0
    this._ageMature = 5
    this._ageDie = 15
    this._fruits = [];
    this._healthStatus = true; 
    this._maxHeight = 8;
    this._maxHarvest = 10;
    this._harvested = '';
  }

  get age () {
    return this._age
  }

  get height () {
    return this._height.toFixed(2)
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    return this._healthStatus;
  }

  get harvested () {
    return this._harvested;
  }

  // Get current states here

  // Grow the tree
  grow () {
    if(this._age < this._ageDie) {
      this._age++;
    } else {
      this._age = this._ageDie;
      this._healthStatus = false; 
    }

    if(this._height <= this._maxHeight) {
      this._height +=  Math.random();
    } else {
      this._height = this._maxHeight;
    }
  }

  // Produce some mangoes
  produceMangoes () {
    if(this._age >= this._ageMature) {
      let buah = Math.round(Math.random() * this._maxHarvest);
      for(let i = 0; i < buah; i++) {
        this._fruits.push(new Mango)
      }
    }
  }

  // Get some fruits
  harvest () {
    let bagus = 0
    let jelek = 0
    for(let i = 0; i < this._fruits.length; i++) {
      if(this._fruits[i] === 'bad') {
        jelek++
      } else {
        bagus++
      }
    }

    this._harvested = `${ this._fruits.length } (good = ${ bagus } dan bad = ${ jelek } )`;
    this._fruits = []
  }

}

class Mango {
  // Produce a mango
  constructor () {
    this._quality = ['bad', 'good'];
    this._rand = this._quality[Math.floor(Math.random() * 2)]
    // console.log(this._rand);
    
  }
}

let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)

/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harvest();
  *   console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
  * } while (mangoTree.healthStatus != false)
  */

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}