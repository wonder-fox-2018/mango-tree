"use strict"

// Release 0

class MangoTree {
  
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
    if(this.umur >= this.waktuBerbuah){
      let hitungBagus = 0
      let hitungJelek = 0
      let count=0
     
     for (let i = 0; i < this.jumlahBuah.length; i++) {
       count +=1
       if (this.jumlahBuah[i].kualitasBuah === 'bagus') {
         hitungBagus +=1
       } else {
          hitungJelek +=1
       } 
     }
     this.jumlahBuah=[]
     return 'Total Buah ' +count+ ',Buah bagus = ' + hitungBagus
    + ',Buah jelek , ' + hitungJelek
    }
    return 0
    
  }
  produceMangoes () {
    if (this.umur >= this.waktuBerbuah) {
      let acakJumlahBuah = Math.floor(Math.random() * 10)+1
      for (let i = 0; i < acakJumlahBuah; i++) {
        this.jumlahBuah.push(new Mango())
      }
    }
  }
  grow () {
   this.waktuMati = 17
   this.waktuBerbuah = 4
   this.berhentiTumbuh = 10
   this.umur += 1
   if (this.umur === this.waktuMati) {
     this.kesehatan = false
   }
   if (this.umur < this.berhentiTumbuh){
    let acakPertumbuhan = Number((Math.random() * 10).toFixed(1))
    this.tinggi += acakPertumbuhan
  }
}
}

class Mango {
  constructor(){
    let acakKualitasBuah = Math.round(Math.random()) 
    if (acakKualitasBuah === 0) {
      this.kualitasBuah = 'bagus'
    } else {
      this.kualitasBuah = 'jelek'
    }
    //console.log(this.kualitasBuah,acakKualitasBuah)
  }
}


   //driver code untuk release 0
   let pohonMangga = new MangoTree()
   do {
     pohonMangga.grow();
     pohonMangga.produceMangoes();
     let hasil=pohonMangga.harvest();
     console.log(`[Year ${pohonMangga.umur} Report] Height = ${pohonMangga.tinggi} | Fruits harvested = ${hasil}`)
   } while (pohonMangga.kesehatan !== false)
  
// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}


