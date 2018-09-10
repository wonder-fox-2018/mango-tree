class FruitTree{
    constructor () {
        
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
        this._fruits.total += amount.good + amount.bad
        this._fruits.good += amount.good
        this._fruits.bad += amount.bad
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
    
      // Produce some fruits
      produceFruits () {
        let produce = {
          good : 0,
          bad : 0
        }
        let randomNumbers = Math.floor((Math.random()*100)+1)
        if(this.age >= this._matureAge){
          // this.fruits += randomNumbers
          for(let i = 0; i < randomNumbers; i++){
            let fruit = new Fruit()
            if(fruit.quality === 'good'){
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
          total : this.produceFruits().good + this.produceFruits().bad,
          good : this.produceFruits().good,
          bad : this.produceFruits().bad
        }
      }

}

class Fruit{
 // Produce a fruit
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

module.exports = FruitTree