"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age=0
    this._height=0
    this._fruits=[]
    this._harvested=0
    this._health=true
  }

  get age () {
    return this._age
  }
  set age(data){
    this._age=data
  }
  get height () {
    return this._height
  }
  set height(data){
    this._height=data
  }
  get fruits () {
    return this._fruits
  }
  set fruits(data){
    this._fruits=data
  }
  get healthStatus () {
    return this._health
  }
  set healthStatus(data){
    this._health=data
  }
  get harvested () {
    return this._harvested
  }
  set harvested(data){
    this._harvested=data
  }

  // Get current states here

  // Grow the tree
  grow () {
    this._endGrowAge=5
    this._matureAge=5
    this._endLife=10
    this._age +=1
    if(this._age<this._endGrowAge){
      let randomGrow=Number(Math.random().toFixed(1))
      this._height+=randomGrow
    }
    if(this._age===this._endLife){
      this._health=false
    }
   
  }

  // Produce some mangoes
  produceMangoes () {
    if(this._age>=this._matureAge){
      let randomQuantityProduce=Math.random()*10
      for(let i=0;i<randomQuantityProduce;i++){
        this._fruits.push(new Mango())
      }
    }
  }

  // Get some fruits
  harvest () {
    if(this._age>=this._matureAge){
      let count=0;
      let bad=0;
      let good=0
      for(let i=0;i<this._fruits.length;i++){
        count+=1
        if(this._fruits[i].quality==='bad'){
          bad +=1
        }
        else{
          good +=1
        }
      }
      this._fruits=[]
      return `${count} (${good} good, ${bad} bad)`
    }
    return 0
    
  }

}

class Mango {
  // Produce a mango
  constructor () {
    let randomNumber=Math.round(Math.random())
    if(randomNumber===0){
      this.quality='bad'
    }
    else{
      this.quality='good'
    }
  }
}
//driver code untuk release 0
   let mangoTree = new MangoTree()
  do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    
    let hasil=mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} M | Fruits harvested = ${hasil}`)
    } while (mangoTree.healthStatus != false)

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
