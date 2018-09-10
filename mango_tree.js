"use strict"

// Release 0

class MangoTree {
  // Initialize a new MangoTree
  constructor () {
    this._age = 0
    this._height = 0
    this._healthStatus = true
    this.mature = 5
    this.old = 30
    this.stopHeight = 15
    this._fruits = []
    this._harvested = {}
  }

  get age () {
    return this._age
  }

  get height () {
    return this._height
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    return this._healthStatus
  }
  
  get harvested () {
    return `${this._harvested.ttl} ( ${this._harvested.good} good, ${this._harvested.bad} bad )`
  }

  // Get current states here

  // Grow the tree
  grow () {
    if(this._healthStatus === true){
      this._age+=1
    }
    if(this._age === this.old){
      this._healthStatus = false
    }
    if(this._age <= this.stopHeight){
      this._height += Number(Math.random().toFixed(2))
      this._height = Number(this._height.toFixed(2))
    }
  }

  // Produce some mangoes
  produceMangoes () {
    this._fruits = []
    if(this._age >= this.mature && this._healthStatus === true){
      this._fruits = []
      let fruits = Math.round(Math.random()*9)+1
      for (let i = 0; i < fruits; i++) {
        let mango = new Mango
        this._fruits.push(mango)
      }
    }
  }

  // Get some fruits
  harvest () {
    this._harvested = {}
    this._harvested = {ttl: this._fruits.length, good: 0, bad: 0}
    for (let i = 0; i < this._fruits.length; i++) {
      if(this._fruits[i].quality === 'good'){
        this._harvested.good +=1
      } else {
        this._harvested.bad +=1
      }
    }
  }
}

class Mango {
  // Produce a mango
  constructor () {
    this.quality = this.quality()
  }
  quality(){
    let result = ['good', 'bad']
    return result[Math.round(Math.random())]
  }
}


  // * driver code untuk release 0
  let mangoTree = new MangoTree()
  do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree.harvested}`)
  } while (mangoTree.healthStatus != false)


// Release 1
class AppleTree {
  constructor () {
    this._age = 0
    this._height = 0
    this._healthStatus = true
    this.mature = 5
    this.old = 25
    this.stopHeight = 15
    this._fruits = []
    this._harvested = {}
  }

  get age () {
    return this._age
  }

  get height () {
    return this._height
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    return this._healthStatus
  }
  
  get harvested () {
    return `${this._harvested.ttl} ( ${this._harvested.good} good, ${this._harvested.bad} bad )`
  }

  // Get current states here

  // Grow the tree
  grow () {
    if(this._healthStatus === true){
      this._age+=1
    }
    if(this._age === this.old){
      this._healthStatus = false
    }
    if(this._age <= this.stopHeight){
      this._height += Number(Math.random().toFixed(2))
      this._height = Number(this._height.toFixed(2))
    }
  }

  produceApples () {
    this._fruits = []
    if(this._age >= this.mature && this._healthStatus === true){
      this._fruits = []
      let fruits = Math.round(Math.random()*9)+1
      for (let i = 0; i < fruits; i++) {
        let mango = new Mango
        this._fruits.push(mango)
      }
    }
  }

  // Get some fruits
  harvest () {
    this._harvested = {}
    this._harvested = {ttl: this._fruits.length, good: 0, bad: 0}
    for (let i = 0; i < this._fruits.length; i++) {
      if(this._fruits[i].quality === 'good'){
        this._harvested.good +=1
      } else {
        this._harvested.bad +=1
      }
    }
  }
}

class Apple {
  constructor () {
    this.quality = this.quality()
  }
  quality(){
    let result = ['good', 'bad']
    return result[Math.round(Math.random())]
  }
}
 // * driver code untuk release 1
 let appleTree = new AppleTree()
 do {
   appleTree.grow();
   appleTree.produceApples();
   appleTree.harvest();
   console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} | Fruits harvested = ${appleTree.harvested}`)
 } while (appleTree.healthStatus != false)



// Release 2
class FruitTree {}
class Fruit {}
