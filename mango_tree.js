"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0,
    this._mature_height = 10
    this._max_age = 20
    this._height = 0,
    this._fruits = fruits,
    this._healthStatus = 20,
    this._harvested = 0
  }

  get age () {
    return this._age
  }
  set age (age) {
    this.age += age
  }

  get height () {
    return this._height

  }
  set height (height) {
    this.height += height
  }

  get fruits () {
    return this._fruits
  }
  set fruits (fruits) {
    this._fruits += fruits;
  }

  get healthStatus () {
    return this._healthStatus
  }
  set healthStatus (healthStatus) {
    this._healthStatus += healthStatus
  }

  get harvested () {
    return this._harvested

  }
  set harvested (harvested) {
    this._harvested += harvested
  }

  // Get current states here

  // Grow the tree
  grow () {
    this.mature_height = 
    if (this._age < 20) {
      this.age = 1
    }
    if ( this._age < 5) {
      var heightTree = this.randomNum();
      this.height = heightTree;
    }

  }

  // Produce some mangoes
  produceMangoes () {
    for ( var i = 0; i < 12; i++) {

    }

  }

  // Get some fruits
  harvest () {

  }

  randomNum() {
    var numRandom = Math.ceil(Math.random() * 6)
    return numRandom
  }

  randomFruit() {
    var randomFruit = Math.ceil(Math.random() * 12)
    return randomFruit
  }

}

class Mango {
  // Produce a mango
  constructor () {
    this.quality = this.mangoQuality();
  }
  mangoQuality() {
    var qualityArr = ['good', 'bad']
    var qualityResult = ''
    var randomQuality = Math.floor(Math.random() * qualityArr.length)
    if ( randomQuality === 0) {
      qualityResult = qualityArr[randomQuality]
    }
    if ( randomQuality === 1) {
      qualityResult = qualityResult[randomQuality]
    }
  }

}


// * driver code untuk release 0
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested} `)
  } while (mangoTree.healthStatus != false)
 

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
