"use strict"

// // Release 2
class FruitTree {
    constructor () {
        this.age = 0;
        this.height = 0;
        this.fruits = [];
        this.harvested = 0;
        this.healthStatus = true;
    }

    // Get some fruits
    harvest () {
        var fruitsAmount = this.fruits.length;
        for (var i = 0; i < fruitsAmount; i++) {
            this.harvested++;
        }

        var goodFruit = 0
        var badFruit = 0;

        for (var i = 0; i < fruitsAmount; i++) {
            if (this.fruits[i].quality === 'good') {
                goodFruit++;
            } else if (this.fruits[i].quality === 'bad') {
                badFruit++;
            }
        }

        var harvestedStatement = '(' + goodFruit + ' good, ' + badFruit + ' bad)';

        return harvestedStatement;
    }

    setFruitsAndHarvested() {
        this.fruits = [];
        this.harvested = 0;
    }
}

var fruitsQuality = ['good', 'bad'];

class Fruit {
    constructor () {
        this.randomIndex = Math.floor(Math.random() * 2);
        this.quality = fruitsQuality[this.randomIndex];
    }
}

// Release 0

class MangoTree extends FruitTree {
    // Initialize a new MangoTree
    constructor () {
        super();
        this.maturedAge = 1;
        this.stopGrowing = 12;
        this.deceased = 15;
    }

    // Get current states here

    // Grow the tree
    grow () {
        this.age = this.age + 1;
        var beforeHeight = this.height;
        
        if (this.age === this.deceased) {
            this.healthStatus = false;
        }

        if (this.age >= this.stopGrowing) {
            this.height = beforeHeight;
        } else {
            var randomGrowth = Number(Math.random().toFixed(1));
            this.height = this.height + randomGrowth;
        }
    }

    // Produce some mangoes
    produceMangoes () {
        if (this.age >= this.maturedAge) {
            var randomProduce = Math.round(Math.random() * 6);
            for (var i = 0; i < randomProduce; i++) {
                var mango = new Mango();
                this.fruits.push(mango);
            }
        }
    }
}

var fruitsQuality = ['good', 'bad'];

class Mango extends Fruit {
    // Produce a mango
}

var mangoTree = new MangoTree();

console.log('Mango Tree Growth');
do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested} ${mangoTree.harvest()}`);
    mangoTree.setFruitsAndHarvested();
} while (mangoTree.healthStatus !== false);

console.log('');
// Release 1
class AppleTree extends FruitTree {
    // Initialize a new MangoTree
    constructor () {
        super();
        this.maturedAge = 1;
        this.stopGrowing = 15;
        this.deceased = 20;
    }

    // Get current states here

    // Grow the tree
    grow () {
        this.age = this.age + 1;
        var beforeHeight = this.height;
        
        if (this.age === this.deceased) {
            this.healthStatus = false;
        }

        if (this.age >= this.stopGrowing) {
            this.height = beforeHeight;
        } else {
            var randomGrowth = Number(Math.random().toFixed(1));
            this.height = this.height + randomGrowth;
        }
    }

    // Produce some mangoes
    produceMangoes () {
        if (this.age >= this.maturedAge) {
            var randomProduce = Math.round(Math.random() * 4);
            for (var i = 0; i < randomProduce; i++) {
                var apple = new Apple();
                this.fruits.push(apple);
            }
        }
    }
}

class Apple extends Fruit{
    // Produce an apple
}

var appleTree = new AppleTree();

console.log('Apple Tree Growth');
do {
    appleTree.grow();
    appleTree.produceMangoes();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested} ${appleTree.harvest()}`);
    appleTree.setFruitsAndHarvested();
} while (appleTree.healthStatus !== false);