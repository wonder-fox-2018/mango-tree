"use strict"
class FruitTree {
    constructor () {
        this._age = 0
        this._height = 0
        this._fruits = 0
        this._harvested = 0
        this._healthStatus = true
        this._matureAge = 2
        this._deadAge = 20
        this._kindOfTree = 'Fruit'
        this._maxHeightAge = 15
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
    get kindOfTree () {
        return this._kindOfTree
    }

    grow () {
        this._age+=1
        if(this._age<=this._maxHeightAge){
            let growHeight = Math.random().toFixed(1)
            this._height = (Number(this._height) + Number(growHeight)).toFixed(1)
        }
        else if (this._age == this._deadAge) this._healthStatus = false
    }
    produceFruits () {
        if(this._age>=this._matureAge){
            let randomize = Math.round(Math.random()*14)
            let buah = new Fruit(randomize)
            this._fruits = buah
            return buah
        }
        else{
            let buah = new Fruit(0);
            this._fruits = buah
            return buah
        }
    }

    harvest () {
        this._harvested = `${this._fruits.count} (${this._fruits.good} good, ${this._fruits.bad} bad)`;
    }
}

class MangoTree extends FruitTree {
  constructor(){
      super()
      this._kindOfTree = 'Mango'
      
  }
}

class AppleTree extends FruitTree {
  constructor(){
      super()
      this._kindOfTree = 'Apple'
      this._matureAge = 5
  }
}

class Fruit {
    constructor (num) {
        this.count = num;
        this.good = this.randomGood();
        this.bad = this.count-this.good;
      }
      randomGood(){
        let random = Math.floor(Math.random()*this.count);
        return random;
      }
}


class Mango extends Fruit {

}


class Apple extends Fruit {

}


// Apple
console.log("The tree is alive! :) :) :) :)")
let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | ${appleTree.kindOfTree} harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
console.log("The tree has met its end :( :( :( :(")



