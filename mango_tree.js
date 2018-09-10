"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0
    this._height = 0
    this._healthStatus = true
    this._harvested = ''
  }

  get age () {
    return this._age
  }

  set age(data) {
    this._age = data
  }

  get height () {
    return this._height
  }

  set height(data) {
    this._height = data
  }

  get fruits () {
    return this._fruits
  }

  set fruits(data) {
    this._fruits = data
  }

  get healthStatus () {
    return this._healthStatus
  }

  set healthStatus(data) {
    this._healthStatus = data
  }

  get harvested () {
    return this._harvested
  }

  set harvested(data) {
    this._harvested = data
  }

  // Get current states here

  // Grow the tree
  grow () {
    this._age += 1
    this._height += Math.round(Math.random() * 2)
    if(this._age >= 4.8) {
      this._height = 4.8
    }
    if(this._age === 20) {
      this._healthStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes () {

  }

  // Get some fruits
  harvest () {

  }

}

class Mango {
  // Produce a mango
  constructor () {

  }
}

// driver code untuk release 0

let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}