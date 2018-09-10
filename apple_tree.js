"use strict"
const FruitTree = require('./fruit_tree')

// Release 0

class AppleTree extends FruitTree {

  // Initialize a new AppleTree
  constructor(){
      super()
        this._age = 0
        this._height = 0
        this._fruits = {total : 0, good:0, bad:0}
        this._healthStatus = true
        this._harvested = 0
        this._maxAge = 12
        this._matureAge = 5
  }

}


module.exports = AppleTree
