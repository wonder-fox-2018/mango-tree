"use strict"

// Release 0

class MangoTree {
  
  // Initialize a new MangoTree
  constructor () {
    this.dataAge = 0
    this.dataHeight = 0 
    this.dataFruits = 0
    this.dataHealth = true
  }

  get age () {
    return this.dataAge += 1
  }



  get height () {
    
  }

  get fruits () {
    
  }

  get healthStatus () {
    
  }

  get harvested () {

  }

  // Get current states here

  // Grow the tree
  grow () {
   this.dataHeight + Math.random() * 25
   this.dataAge + Math.random() * 10
   this.dataFruits + Math.random() * 7
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

}

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


let mangoTree = new MangoTree()
console.log(mangoTree);
// do {
//      mangoTree.grow();
//      mangoTree.produceMangoes();
//      mangoTree.harvest();
//      console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
//    } while (mangoTree._dataHealth != false)
for (let i = 0; i < 12; i++) { //for di hardcode dulu
  mangoTree.grow()
}
console.log(mangoTree);
// console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)

 


