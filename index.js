const MangoTree = require('./mango_tree')
const AppleTree = require('./apple_tree.js')

console.log('#Mango Tree')
// driver code untuk release 0
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested.total} ( ${mangoTree.harvested.good} good, ${mangoTree.harvested.bad} bad )`)
} while (mangoTree.healthStatus != false)

console.log(`


`)

console.log('#Apple Tree')

// driver code untuk release 0
let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested.total} ( ${appleTree.harvested.good} good, ${appleTree.harvested.bad} bad )`)
} while (appleTree.healthStatus != false)
