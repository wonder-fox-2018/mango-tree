class FruitTree {

    // Initialize a new MangoTree
    constructor() {
      this._age = 0;
      this._height = 0;
      this._fruits = [];
      this._harvested = '';
      this._healthStatus = true;
      this._matureAge;
      this._ageLimit;
    }
  
    get age() {
      return this._age;
    }
  
    get height() {
      return this._height + ' m';
    }
  
    get fruits() {
      return this._fruits;
    }
  
    get healthStatus() {
      return this._healthStatus;
    }
  
    get harvested() {
      return this._harvested;
    }
  
    get matureAge() {
      return this._matureAge;
    }
  
    get ageLimit() {
      return this._ageLimit;
    }
  
    // Get current states here
  
    // Grow the tree

    grow () {
      this.increaseAge();
  
      if (this.age === this.ageLimit) {
        this._healthStatus = false;
      }
      
      if (this.age < this.matureAge) {
        this.increaseHeight();
      }
      
      if (this.age >= this.matureAge) {
        this.produceFruits();
  
        this.harvest();
      }
      
    }
  
    increaseAge() {
      this._age++;
    }
  
    increaseHeight() {
      let increment = this.getRandomDecimal();
      this._height += increment;
      this._height = Number(this._height.toFixed(1)) + 0.0;
    }
  
    getRandomDecimal() {
      return Math.random();
    }
  
    randomIntFromInterval(min,max) {
  
      return Math.floor(Math.random()*(max-min+1)+min);
    }
  
    
    produceFruits() {
      let quality = ['good', 'bad'];
  
      
  
      let numberOfFruits = this.randomIntFromInterval(1,20);
  
      for (let i = 0; i < numberOfFruits; i++) {
        let randomQuality = this.getRandomDecimal() > 0.5 ? quality[0] : quality[1];
        //console.log(randomQuality);
        let fruit = new Fruit(randomQuality);
        this.fruits.push(fruit);
      } 
    }
  
    // Get some fruits
    harvest () {
        
        if (this.age < this._matureAge) {
            this._harvested = `0 (0 good, 0 bad)`;
            return;
        }
        let countBad = 0;
        let countGood = 0;
        
        for (let i = 0; i < this.fruits.length; i++) {
        if (this.fruits[i].quality === 'good') {
            countGood++;
        } else {
            countBad++;
        }
        }
  
        this._harvested = `${this.fruits.length} (${countGood} good, ${countBad} bad)`;
        this.fruits.length = 0;
    }
}

class Fruit {
    constructor(quality) {
        this.quality = quality;
    }   
}
  

module.exports = {
    FruitTree: FruitTree,
    Fruit : Fruit
};