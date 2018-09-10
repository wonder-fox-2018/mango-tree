"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0
    this._height = 0
    this._fruits = {total : 0, good:0, bad:0}
    this._healthStatus = true
    this._harvested = 0
    this._maxAge = 20
    this._matureAge = 5
  }

  get age () {
    return this._age
  }
  set age(num){
    this._age += num
  }

  get height () {
    return this._height
  }
  set height(addHeight){
    this._height += addHeight
  }

  get fruits () {
    return this._fruits
  }
  set fruits (amount){
    // this._fruits = {
    //   total : amount.good + amount.bad,
    //   good : amount.good,
    //   bad : amount.bad
    // }
    this._fruits.total += amount.good + amount.bad
    this._fruits.good += amount.good
    this._fruits.bad += amount.bad
    // this._fruits = amount.good + amount.bad
  }


  get healthStatus () {
    return this._healthStatus
  }
  set healthStatus(set){
    this._healthStatus = set
  }

  get harvested () {
    return this._harvested
  }
  set harvested(set){
    this._harvested = set
  }

  // Get current states here

  // Grow the tree
  grow () {
    if(this.age < this._matureAge){
      this.height = Math.floor(Math.random()*2)
    }
    if(this.age < this._maxAge){
      this.age = 1
    }
    if(this.age === this._maxAge){
      this.healthStatus = false
    }
   
  }

  // Produce some mangoes
  produceMangoes () {
    let produce = {
      good : 0,
      bad : 0
    }
    let randomNumbers = Math.floor((Math.random()*100)+1)
    if(this.age >= this._matureAge){
      // this.fruits += randomNumbers
      for(let i = 0; i < randomNumbers; i++){
        let mango = new Mango()
        if(mango.quality === 'good'){
          produce.good += 1
        }
        else{
          produce.bad += 1
        }
      }
    }
    this.fruits = produce
    return produce
  }

  // Get some fruits
  harvest () {
    this.harvested = {
      total : this.produceMangoes().good + this.produceMangoes().bad,
      good : this.produceMangoes().good,
      bad : this.produceMangoes().bad
    }
  }

}

class Mango {
  // Produce a mango
  constructor () {
    this.quality = this.quality()
  }
  quality (){
    let badOrNOt = Math.floor(Math.random()*2)
    if(badOrNOt === 0){
      return 'bad'
    }
    else if(badOrNOt >= 0){
      return 'good'
    }
  }
}


// driver code untuk release 0
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested.total} ( ${mangoTree.harvested.good} good, ${mangoTree.harvested.bad} bad )`)
} while (mangoTree.healthStatus != false)


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
