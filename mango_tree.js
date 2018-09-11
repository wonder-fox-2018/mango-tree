"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this.umur = 0
    this.tinggi = 0
    this.buahYangAda = []
    this.buahYangDipetik = 0
    this.kesehatanBuah = true
  }

  get age () {
    return this.umur
  }

  set age (umurSementara) {
    this.umur=umurSementara
  }

  //batasan tumbuh 10 tahun
  get height () {
    return this.tinggi
  }

  set height (tinggiSekarang) {
    this.tinggi=tinggiSekarang
  }

  get fruits () {
    return this.buahYangAda
  }

  set fruits (arrHasil) {
    this.buahYangAda=arrHasil
  }

  get healthStatus () {
    return this.kesehatanBuah
  }

  set healthStatus (kesehatanSekarang){
    this.kesehatanBuah=kesehatanSekarang
  }

  get harvested () {
    return this.buahYangDipetik
  }

  set harvested (hasilPanen) {
    this.buahYangDipetik=hasilPanen
  }

  // Get current states here

  // Grow the tree
  grow () {
    let umurSementara = this.age + 1
    this.age= umurSementara //balikin ke setter
    this.batasanTumbuh = 10
    this.umurDewasa=7
    //batasan tumbuh
    if (this.age<this.batasanTumbuh){
      let tinggiSekarang = this.height
      tinggiSekarang += Math.floor(Math.random()*4)
      this.height=tinggiSekarang //balikin ke setter
    }
    //kondisi mati
    if (this.age === 13){
      let kesehatanSekarang = this.kesehatanBuah
      kesehatanSekarang = false
      this.healthStatus=kesehatanSekarang//balikin ke setter
    }
  }
  
  // Produce some mangoes
  produceMangoes () {
    if (this.age>=this.umurDewasa){
      let acakJumlahBuah=Math.floor(Math.random()*10)
      let arrHasil=[]
      for (let i=0; i<acakJumlahBuah; i++){
        let manggaObj = new Mango()
        arrHasil.push(manggaObj)
      }
      this.fruits=arrHasil //masukkan ke setter fruits
    }
  }

  // Get some fruits
  harvest () {
    //cek kondisi sesuai umurDewasa
    //hitung [{kualitasMangga='Bad' & 'Good'}]
    //hasil count lembapr ke this harvested dalam berntuk string
    //kosongi lagi frutnya
    let mangoBad = 0
    let mangoGood = 0
    if (this.age>=this.umurDewasa){
      for (let i=0; i<this.fruits.length; i++){
        if (this.fruits[i]['kualitasMangga']==='Bad'){
          mangoBad+=1
        } else {
          mangoGood+=1
        }
      }
      let hasilPanen = `${mangoGood} Mangga Good, ${mangoBad} Mangga Bad`
      this.harvested = hasilPanen
    }
  }

}

class Mango {
  // Produce a mango
  constructor(){
    let acakStatus=Math.round(Math.random())
    if (acakStatus===0){
      this.kualitasMangga='Bad'
    } else {
      this.kualitasMangga='Good'
    }
  }
}


  //driver code untuk release 0
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)

/*
// Release 1
class AppleTree {
  // Initialize a new AppleTree
  constructor () {
    this.umur = 0
    this.tinggi = 0
    this.buahYangAda = []
    this.buahYangDipetik = 0
    this.kesehatanBuah = true
  }

  get age () {
    return this.umur
  }

  set age (umurSementara) {
    this.umur=umurSementara
  }

  //batasan tumbuh 10 tahun
  get height () {
    return this.tinggi
  }

  set height (tinggiSekarang) {
    this.tinggi=tinggiSekarang
  }

  get fruits () {
    return this.buahYangAda
  }

  set fruits (arrHasil) {
    this.buahYangAda=arrHasil
  }

  get healthStatus () {
    return this.kesehatanBuah
  }

  set healthStatus (kesehatanSekarang){
    this.kesehatanBuah=kesehatanSekarang
  }

  get harvested () {
    return this.buahYangDipetik
  }

  set harvested (hasilPanen) {
    this.buahYangDipetik=hasilPanen
  }

  // Get current states here

  // Grow the tree
  grow () {
    let umurSementara = this.age + 1
    this.age= umurSementara //balikin ke setter
    this.batasanTumbuh = 10
    this.umurDewasa=7
    //batasan tumbuh
    if (this.age<this.batasanTumbuh){
      let tinggiSekarang = this.height
      tinggiSekarang += Math.floor(Math.random()*4)
      this.height=tinggiSekarang //balikin ke setter
    }
    //kondisi mati
    if (this.age === 13){
      let kesehatanSekarang = this.kesehatanBuah
      kesehatanSekarang = false
      this.healthStatus=kesehatanSekarang//balikin ke setter
    }
  }
  
  // Produce some Applees
  produceApplees () {
    if (this.age>=this.umurDewasa){
      let acakJumlahBuah=Math.floor(Math.random()*10)
      let arrHasil=[]
      for (let i=0; i<acakJumlahBuah; i++){
        let manggaObj = new Apple()
        arrHasil.push(manggaObj)
      }
      this.fruits=arrHasil //masukkan ke setter fruits
    }
  }

  // Get some fruits
  harvest () {
    //cek kondisi sesuai umurDewasa
    //hitung [{kualitasMangga='Bad' & 'Good'}]
    //hasil count lembapr ke this harvested dalam berntuk string
    //kosongi lagi frutnya
    let AppleBad = 0
    let AppleGood = 0
    if (this.age>=this.umurDewasa){
      for (let i=0; i<this.fruits.length; i++){
        if (this.fruits[i]['kualitasMangga']==='Bad'){
          AppleBad+=1
        } else {
          AppleGood+=1
        }
      }
      let hasilPanen = `${AppleGood} Apel Good, ${AppleBad} Apel Bad`
      this.harvested = hasilPanen
    }
  }


}

class Apple {
    // Produce a Apple
    constructor(){
      let acakStatus=Math.round(Math.random())
      if (acakStatus===0){
        this.kualitasApple='Bad'
      } else {
        this.kualitasApple='Good'
      }
    }
  
}
//driver code untuk release 0
let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceApplees();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
*/
// Release 2
class FruitTree {}
class Fruit {}