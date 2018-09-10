"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._harvested = 0;
    this._healthStatus = true
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
    this._berbuah = 3
    this._mati = 10
    this._tumbuh = 6
    this._age += 1
    if (this._age === this._mati) this._healthStatus = false
    if (this._age < this._tumbuh) var ukuranTumbuh = Math.random()*10
    this._height += ukuranTumbuh;
  }

  // Produce some mangoes
  produceMangoes () {
    if (this._age >= this._berbuah){
      var qtt = Math.random()*5
      for (var i = 0; i < qtt; i++) {
        this._fruits.push(new Mango())
      }
    }
  }

  // Get some fruits
  harvest () {
    if (this._age >= this._tumbuh){
      var bad = 0;
      var good = 0;
      var count = 0;
      for (var i = 0; i < this._fruits.length; i++) {
        if (this.fruits[1].quality == 'bad') bad++
        if (this.fruits[1].quality == 'good') good++
        count++     
      }
      this.fruits = []
      return `${count} good: ${good} bad: ${bad}`
    }
    return '0'
  }

}

class Mango{
  // Produce a mango
  constructor(){
    var quality = Math.round(Math.random()*1)
    if (quality === 0) this.quality = 'bad'
    if (quality === 1) this.quality = 'good'
  }
  
}


  //* //driver code untuk release 0
  let mangoTree = new MangoTree()
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
