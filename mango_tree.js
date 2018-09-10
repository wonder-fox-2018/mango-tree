"use strict"

class FruitTree {
  constructor () {
    this._age = 0
    this._height = 0
    this._healthStatus = true
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
    return this._harvested
    
  }
  
  harvest () {
    this._harvested = `${this._fruits.quatity} | (${this._fruits.good} good, ${this._fruits.bad} bad)`
  }
}
class Fruit {
  constructor (qty) {
    this.quatity = qty
    this.good = this.randomGood()
    this.bad = this.quatity - this.good
  }
  
  randomGood() {
    let random = Math.round(Math.random() * this.quatity)
    return random
  }
}
// Release 0

class MangoTree extends FruitTree{

  // Initialize a new MangoTree
  constructor () {
    super()
    this.__die = 15
    this._treeName = 'Manggo Tree'
    this._fruits = this.produceMangoes()
    this._harvested = this.harvest()
    this._healthStatus = true
  }

  get age () {
    return this._age
  }
  set age (newAge) {
    this._age = newAge
  }

  get height () {
    return this._height
  }
  set height(newHeight) {
    this._height = newHeight
  }

  get fruits () {
    return this._fruits
  }
  set fruits(newFruits) {
    this._fruits = newFruits
  }

  get healthStatus () {
    return this._healthStatus
  }
  set healthStatus (newHealthStatus) {
    this._healthStatus = newHealthStatus
  }

  get harvested () {
    return this._harvested
  }
  set harvested(newHarvested) {
    this._harvested = newHarvested
  }

  // Get current states here

  // Grow the tree
  grow () {
    if (this._age < this.__die - 1) {
      this._age++
    } else {
      this._age = this.__die
      this._healthStatus = false

    }

    let random = Math.round(((Math.random())+0.37))
    if (this._age < 20) {
      if(this.age == 1) {
        this._height = 0.5
      } else {
        this._height = this._height + random
        this._height.toFixed(1)
      }
    }

  }

  // Produce some mangoes
  produceMangoes () {
    let mangoes = 0
    if (this._age < this.__die) {
      let random = Math.round(Math.random()*10)
      mangoes = new Mango(random)
      this._fruits = mangoes
      return mangoes
    } else {
      mangoes = new Mango(0)
      return mangoes
    }
  }

  // Get some fruits
  harvest () {
    this._harvested = `${this._fruits.quatity} | (${this._fruits.good} good, ${this._fruits.bad} bad)`
  }
}

class Mango extends Fruit{
  // Produce a mango

}


  // driver code untuk release 0
  let mangoTree = new MangoTree()
  do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree.healthStatus != false)
  
//  The tree is alive! :smile:
//  [Year 1 Report] Height = 0.1 m | Fruits harvested = 8 (7 good, 1 bad)
//  [Year 2 Report] Height = 0.5 m | Fruits harvested = 5 (2 good, 3 bad)
 
// Release 1
class AppleTree extends FruitTree{
  constructor () {
    super()
    this._treeName = 'Apple Tree'
    this._die = 21
    this._age = 0
    this._height = 0
    this._fruits = this.produceApples()
    this._harvested = this.harvest()
    this._healthStatus = true
  }

  grow () {
    if (this._age < this._die - 1) {
      this._age++
    } else {
      this._age = this._die
      this._healthStatus = false

    }

    let random = Math.round(((Math.random())+  Math.random())) 
    if (this._age < 18) {
      if(this.age == 1) {
        this._height = 0.4
      } else {
        this._height = this._height + random
        this._height.toFixed(1)
      }
    }
  }

  // Produce some apples
  produceApples () {
    let apples = 0
    if (this._age < 18) {
      let random = Math.round(Math.random()*20) 
      apples = new Apple(random)
      this._fruits = apples
      return apples
    } else {
      apples = new Apple(0)
      return apples
    }
  }
}
class Apple extends Fruit{}

console.log('The tree is alive! :))');
  
  let appleTree = new AppleTree()
  console.log(`The ${appleTree._treeName} tree is alive! :))`);
  do {
    appleTree.grow();
    appleTree.produceApples();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`)
  } while (appleTree.healthStatus != false)
    console.log(`The ${appleTree._treeName} has met its end. :((`);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Release 2
