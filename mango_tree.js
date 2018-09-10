"use strict"
const TreeClass = require('./tree.js');
const FruitTree = TreeClass.FruitTree;
const Fruit = TreeClass.Fruit;



class MangoTree  extends FruitTree {
  constructor () {
    super();
    this._matureAge = 10;
    this._ageLimit = 20;
  }

  produceMangoes() {
    let quality = ['good', 'bad'];
  
    let numberOfFruits = this.randomIntFromInterval(1,30);
  
    for (let i = 0; i < numberOfFruits; i++) {
        let randomQuality = this.getRandomDecimal() > 0.5 ? quality[0] : quality[1];
        //console.log(randomQuality);
        let fruit = new Mango(randomQuality);
        this.fruits.push(fruit);
    } 
  }
}

class Mango extends Fruit  {
  
}



let tree = new MangoTree()
do {
  debugger;
  tree.grow();
  tree.produceMangoes();
  tree.harvest();
  //console.log(tree.fruits);
  console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
  debugger;
} while (tree.healthStatus != false)
 

// Release 1
class AppleTree extends FruitTree {
  constructor() {
    super();
    this._matureAge = 5;
    this._ageLimit = 8;
  }

  produceApples() {
    let quality = ['good', 'bad'];
  
    let numberOfFruits = this.randomIntFromInterval(1,10);
  
    for (let i = 0; i < numberOfFruits; i++) {
        let randomQuality = this.getRandomDecimal() > 0.5 ? quality[0] : quality[1];
        
        let fruit = new Apple(randomQuality);
        this.fruits.push(fruit);
    } 
  }
}
    
    
class Apple extends Fruit{

}

console.log('apple tree test:');
let appleTree = new AppleTree();
 do {
  appleTree.grow();
  appleTree.produceApples();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)

class PearTree extends FruitTree {
  constructor() {
    super();
    this._matureAge = 8;
    this._ageLimit = 20;
  }

  producePears() {
    let quality = ['good', 'bad'];
  
    let numberOfFruits = this.randomIntFromInterval(6,9);
  
    for (let i = 0; i < numberOfFruits; i++) {
        let randomQuality = this.getRandomDecimal() > 0.5 ? quality[0] : quality[1];
        
        let fruit = new Pear(randomQuality);
        this.fruits.push(fruit);
    } 
  }
}

class Pear extends Fruit {

}

console.log('pear tree test:');
let pearTree = new PearTree();
 do {
  pearTree.grow();
  pearTree.producePears();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)

