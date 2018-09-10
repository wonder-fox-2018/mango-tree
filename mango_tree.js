"use strict"

// Release 2
class FruitTree {
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

  produceFruits () {
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

class MangoTree extends FruitTree{
  constructor(){
    super()
  }
  
}

class AppleTree extends FruitTree {
  constructor () {
    super()
    this.old = 25
  }
  
}

class PearTree extends FruitTree{
  constructor(){
    super()
    this.old = 25
  }
  
}

class Fruit {
  constructor () {
    this.quality = this.quality()
  }
  quality(){
    let result = ['good', 'bad']
    return result[Math.round(Math.random())]
  }
}

class Mango extends Fruit {
  constructor(){
    super()
  }
}

class Apple extends Fruit {
  constructor () {
    super()
  }
  
}

class Pear extends Fruit {
  constructor () {
    super()
  }
  
}

console.log('----- MangoTree -----');
  let mangoTree = new MangoTree()
  do {
    mangoTree.grow();
    mangoTree.produceFruits();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree.harvested}`)
  } while (mangoTree.healthStatus != false)

  console.log('----- AppleTree -----');
 let appleTree = new AppleTree()
 do {
   appleTree.grow();
   appleTree.produceFruits();
   appleTree.harvest();
   console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} | Fruits harvested = ${appleTree.harvested}`)
 } while (appleTree.healthStatus != false)

 console.log('----- PearTree -----');
 let pearTree = new PearTree()
 do {
   pearTree.grow();
   pearTree.produceFruits();
   pearTree.harvest();
   console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height} | Fruits harvested = ${pearTree.harvested}`)
 } while (pearTree.healthStatus != false)