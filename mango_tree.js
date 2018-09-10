"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this.age = 1;
    this.height = 0.0;
    this.healthStatus = true;
    this.existingFruits = 0;
    this.maxAge = 20;
    this.matureAge = 5;
    this.maxHeightAge = 10;
    this.harvested = 0;
  }

  age () {
    return this.age;
  }

  height () {
    return this.height;
  }

  fruits () {
    return this.fruits;
  }

  healthStatus () {
    return this.healthStatus;
  }

  harvested () {
    return this.harvested;
  }

  // Get current states here

  // Grow the tree
  grow () {
    for (let i=this.age; i<=this.maxAge; i++) {
      let randomNum = Math.random() * 1;
      let addHeight = Number(randomNum.toFixed(1));
      
      this.height += Number(addHeight.toFixed(1));
      this.age = i;

      if (this.age >= this.matureAge) {
        this.produceMangoes();
      }

      // console.log('test', this.age, this.height);
      console.log(`[Year ${this.age} Report] Height = ${this.height} | Fruits harvested = ${this.produceMangoes().random} (${this.produceMangoes().good} good, ${this.produceMangoes().bad} bad)`);
    }
    console.log('The tree has met its end');
  }

  // Produce some mangoes
  produceMangoes () {
    let random = Math.round(Math.random() * 10);
    let count = {
      random: random,
      good: 0,
      bad: 0,
    }
    for (let i=0; i<random; i++) {
      let mango = new Mango();
      // console.log(mango.randomQuality());
      if (mango.randomQuality() === 'good') {
        count.good += 1;
      }
      else {
        count.bad += 1;
      }
    }
    
    // console.log(random + ' (' + count.good + ' good, ' + count.bad + ' bad)');
    return count;
    
  }

  // Get some fruits
  harvest () {
    let data = this.produceMangoes();
    // console.log(data);
    
  }

}

class Mango {
  // Produce a mango
  constructor () {
    this.quality = this.randomQuality();
  }

  randomQuality() {
    let random = Math.floor(Math.random() * 2);
    if (random === 0) {
      return 'bad'
    }
    else if (random === 1) {
      return 'good'
    }
    
  }

}

let mangoTree = new MangoTree();
mangoTree.grow();


// driver code untuk release 0
// let mangoTree = new MangoTree()
// do {
// mangoTree.grow();
// mangoTree.produceMangoes(); // nnti apus aja
// mangoTree.harvest();
// console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
// } while (mangoTree.healthStatus != false)

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}




