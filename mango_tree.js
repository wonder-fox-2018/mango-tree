"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age=0;
    this._height=0;
    this._fruits=0;
    this._healthStatus=true
    this._harvested=0;
  }

  get age () {
    return this._age
  }

  set age(value){
    this._age = this._age + value
  }

  get height () {
    return this._height
  }

  set height(value){
    this._height = this._height + value
  }

  get fruits () {
    return this._fruits
  }

  set fruits(value){
    this._fruits = value
  }

  get healthStatus () {
    return this._healthStatus
  }

  set healthStatus(status){
    this._healthStatus = status
  }

  get harvested () {
    return this._harvested
  }

  set harvested(value){
    this._harvested = value
  }

  // Get current states here

  // Grow the tree
  grow () {
    if(this._age < 20){
      this.age = 1
    }
    if(this._age === 20){
      this.healthStatus = false
    }

    if(this._age < 10){
      let growing = this.randomize()
      this.height = growing
    }
  }

  // Produce some mangoes
  produceMangoes () {
    let fruito = {
      good:0,
      bad:0
    }
    let howMany = this.randomizeNumber()
    for(let i = 0 ; i < howMany ; i++){
      let mango = new Mango
      let quality = mango.quality
      if(quality === 'good'){
        fruito.good = fruito.good + 1
      }else if(quality === 'bad'){
        fruito.bad = fruito.bad + 1
      }
    }
    this.fruits = fruito
    this.harvested = howMany
  }

  // Get some fruits
  harvest () {
  }

  randomize(){
    let number = [0.5,1.0,1.5]
    let random = number[Math.floor(Math.random()*number.length)];
    return random
  }

  randomizeNumber(){
    let number = [1,2,3,4,5,6,7,8,9,10,11]
    let random = number[Math.floor(Math.random()*number.length)];
    return random
  }

}


class Mango {
  // Produce a mango
  constructor () {
    this.quality = this.randomQuality()
  }

  randomQuality(){
    let number = ['good','bad']
    let random = number[Math.floor(Math.random()*number.length)];
    return random
  }

}

// let mangoTree = new MangoTree()

// console.log(mangoTree.randomize())


// driver code untuk release 0
let mangoTree = new MangoTree()
  do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested} (${mangoTree.fruits.good} good, ${mangoTree.fruits.bad} bad)`)
  } while (mangoTree.healthStatus != false)
  
  

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
