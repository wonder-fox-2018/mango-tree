
"use strict"

// Release 0

class FruitTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._health = true;
    this._mature_age = 3;
    this._totalProduceFruit = 0;
    this._goodFruits = 0;
    this._badFruits = 0;
    this._max_age = 20;
  }

  get age () {
    return this._age;
  }

  get height () {
    return +this._height.toFixed(2);
  }

  get fruits () {
    return this._fruits;
  }

  get healthStatus () {
    return this._health;
  }

  get harvested () {
    return `${this._totalProduceFruit} (${this._goodFruits} good, ${this._badFruits} bad)`;
  }

  // Get current states here

  // Grow the tree
  grow () {
    // let max_age = 20;
    let max_age_grow = 18;
    let random_height = Math.random()*10;
    let random_produce = Math.floor(Math.random()*10);

    this._age++;
    if (this._age < this._max_age) {
      this._totalProduceFruit = random_produce;
    }else {
      this._health = false;
    }

    if (this._age < max_age_grow) {
      // this._height += Number(random_height.toFixed(2));
      this._height += random_height;
    }
  }

  // Produce some mangoes
  produceFruits () {
    // loop sebanyak _totalProduceFruit di dalemnya buat objek dengan compotition
    // var mango = new Mango()  --> loop sebanyak _totalProduceFruit
    for (var i = 0; i < this._totalProduceFruit; i++) {
      let fruit = new Fruit()
      this._fruits.push(fruit);
    }
    // console.log(this._fruits);
  }

  // Get some fruits
  harvest () {

    this._goodFruits = 0;
    this._badFruits = 0;

    for (var i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i]._quality === 'good') {
        this._goodFruits++;
      }else if (this._fruits[i]._quality === 'bad') {
        this._badFruits++;
      }
    }
    this._fruits = [];
  }
}

class Fruit {
  // Produce a mango
  constructor() {
    this._quality = this.assignQuality();
  }

  get quality(){
    return this._quality;
  }

  assignQuality() {
    // membuat nilai random dengan hasil good / bad
    let qualityValue = Math.floor(Math.random()*2);
    if (qualityValue === 0) {
      return 'good';
    }else {
      return 'bad';
    }
  }
}


class MangoTree extends FruitTree {
  constructor() {
    super();
    this._max_age = 20;
    this._mature_age = 3;
  }
}

class Mango extends Fruit {
  constructor() {
    super()
  }
}


class AppleTree extends FruitTree {
  constructor() {
    super();
    this._max_age = 10;
    this._mature_age = 1;
  }
}

class Apple extends Fruit {
  constructor() {
    super()
  }
}

class PeerTree extends FruitTree {
  constructor() {
    super();
    this._max_age = 15;
    this._mature_age = 5;
  }
}

class Peer extends Fruit {
  constructor() {
    super()
  }
}

// * driver code
let mangoes = new MangoTree()

do {
mangoes.grow();
mangoes.produceFruits();
mangoes.harvest();
console.log(`[Year ${mangoes.age} Report] Height = ${mangoes.height} m | Fruits harvested = ${mangoes.harvested}`)
} while (mangoes.healthStatus != false)

let apple = new AppleTree()

do {
apple.grow();
apple.produceFruits();
apple.harvest();
console.log(`[Year ${apple.age} Report] Height = ${apple.height} m | Fruits harvested = ${apple.harvested}`)
} while (apple.healthStatus != false)

let peer = new PeerTree();

do {
peer.grow();
peer.produceFruits();
peer.harvest();
console.log(`[Year ${peer.age} Report] Height = ${peer.height} m | Fruits harvested = ${peer.harvested}`)
} while (peer.healthStatus != false)
