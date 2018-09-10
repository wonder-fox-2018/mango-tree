"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor (age, height, fruits, harvested, healthStatus) {
    this._age = age;
    this._height = height;
    this._fruits = fruits;
    this._harvested = harvested;
    this._healthStatus = healthStatus
  }

  set age(age) {
    this._age = age
  }

  set height(height){
    this._height = height
  }

  set fruits(fruits){
    this._fruits = fruits
  }

  set harvested(harvested){
    this._harvested = harvested
  }

  set healthStatus(healthStatus){
    this._healthStatus = this.healthStatus;
  }

  get age () {
    return this._age
  }

  get height () {
    return this._age
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    return this._healthStatus
  }

  get harvested () {
    return this._harvested
  }

  // Get current states here

  // Grow the tree
  grow () {
  }

  // Produce some mangoes
  produceMangoes () {
  }

  // Get some fruits
  harvest () {
  }

}

class Mango extends MangoTree{
  // Produce a mango
  constructor (quality=Math.random(0) * 1) {
    super(age, height, fruits, harvested, healthStatus)
    this.quality = quality
  }
}


  //* //driver code untuk release 0
  let mangoTree = new MangoTree(1, 2, 'fruits', 33, 1)
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
