"use strict"

// Release 0

class MangoTree {
  
  // Initialize a new MangoTree
  constructor () {
    this.waktuBerbuah = 4
    this.berhentiTumbuh = 10
    this.umur = 0
    this.tinggi = 0
    this.jumlahBuah = []
    this.panen = 0
    this.kesehatan = true

  }

  get age () {
    
  }



  get height () {
    
  }

  get fruits () {
    
  }

  get healthStatus () {
    
  }

  get harvested () {

  }


  harvest () {
    let hitungBagus = 0
    let hitungJelek = 0
    if(this.umur >= this.waktuBerbuah){
     for (let i = 0; i < this.jumlahBuah.length; i++) {
       if (this.jumlahBuah[i].kualitas === bagus) {
         this.hitungBagus +=1
       } else {
          this.hitungJelek +=1
       } 
     }
    }
    return 'Total Buah ' + this.jumlahBuah.length + ',Buah bagus = ' + hitungBagus
    + ',Buah jelek , ' + hitungJelek
  }

  produceMangoes () {
    if (this.umur >= this.waktuBerbuah) {
      let acakJumlahBuah = Math.random() * 10
      for (let i = 0; i < acakJumlahBuah; i++) {
        this.jumlahBuah.push(new Mango())
      }
    }
  }

  // Get current states here

  // Grow the tree
  grow () {
   this.waktuMati = 17
   this.waktuBerbuah = 4
   this.berhentiTumbuh = 10
   this.umur += 1
   if (this.umur === this.waktuMati) {
     this.kesehatan = false
   }
   if (this.umur < this.berhentiTumbuh){
    let acakPertumbuhan = Math.random() * 10
    this.tinggi += acakPertumbuhan
  }

  // Produce some mangoes
  

  // Get some fruits
  

}
}

class Mango {
  constructor(){
    this.kualitasBuah = null
    let acakKualitasBuah = Math.round(Math.random()) 
    if (acakKualitasBuah === 0) {
      this.kualitasBuah = 'bagus'
    } else {
      this.kualitasBuah = 'jelek'
    }
  }

}


   //driver code untuk release 0
   let pohonMangga = new MangoTree()
   do {
     pohonMangga.grow();
     pohonMangga.produceMangoes();
     pohonMangga.harvest();
     console.log(`[Year ${pohonMangga.age} Report] Height = ${pohonMangga.height} | Fruits harvested = ${pohonMangga.harvested}`)
   } while (mangoTree.kesehatan != false)
  
// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}


