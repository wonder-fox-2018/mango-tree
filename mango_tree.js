"use strict"

// Release 0
/*
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
        } else if (this.fruits[i]['kualitasMangga']==='Good'){
          mangoGood+=1
        }
      }
      let hasilPanen = `${mangoGood+mangoBad} (${mangoGood} Mangga Good, ${mangoBad} Mangga Bad)` 
      this.harvested = hasilPanen
    }
  }

}

class Mango {
  // Produce a mango
  constructor(){
    let acakStatus=Math.round(Math.random()*2)
    if (acakStatus===0){
      this.kualitasMangga='Bad'
    } else if (acakStatus===1){
      this.kualitasMangga='Good'
    } 
  }
}


//driver code untuk release 0
let mangoTree = new MangoTree()
console.log(`The tree is alive! :smile:`)
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
  console.log(`The tree has met its end . :sad:`)


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
    this.batasanTumbuh = 13
    this.umurDewasa=9
    //batasan tumbuh
    if (this.age<this.batasanTumbuh){
      let tinggiSekarang = this.height
      tinggiSekarang += Math.floor(Math.random()*4)
      this.height=tinggiSekarang //balikin ke setter
    }
    //kondisi mati
    if (this.age === 17){
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
        if (this.fruits[i]['kualitasApple']==='Bad'){
          AppleBad+=1
        } else {
          AppleGood+=1
        }
      }
      let hasilPanen = `${AppleGood+AppleBad} (${AppleGood} Apel Good, ${AppleBad} Apel Bad)`
      this.harvested = hasilPanen
    }
  }


}

class Apple {
    // Produce a Apple
    constructor(){
      let acakStatus=Math.round(Math.random()*2)
      if (acakStatus===0){
        this.kualitasApple='Bad'
      } else {
        this.kualitasApple='Good'
      }
    }
  
}
//driver code untuk release 0
let appleTree = new AppleTree()
console.log(`The tree is alive! :smile:`)
do {
  appleTree.grow();
  appleTree.produceApplees();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
  console.log(`The tree has met its end . :sad:`)

*/
// Release 2
class FruitTree {
  constructor () {
    this._umur = 0
    this.tinggi = 0
    this._buahYangAda = []
    this.buahYangDipetik = 0
    this.kesehatanBuah = true
    this.umurMati = 0
  }

  set fruits (arrHasil){
    this._buahYangAda =  arrHasil
  }

  get fruits (){
    return this._buahYangAda
  }
  set age (umurSementara){
    this._umur = umurSementara
  }

  get age (){
    return this._umur
  }

  get healthStatus () {
    return this.kesehatanBuah
  }

  set healthStatus (kesehatanSekarang){
    this.kesehatanBuah=kesehatanSekarang
  }

  grow (){
    let umurSementara = this.age + 1
    this.age = umurSementara
    //batasan tumbuh
    if (this.age<this.batasanTumbuh){
      let tinggiSekarang = this.height
      tinggiSekarang += Math.floor(Math.random()*4)
      this.height=tinggiSekarang //balikin ke setter
    }
    //kondisi mati
    if (this._umur === this.umurMati){
      let kesehatanSekarang = this.kesehatanBuah
      kesehatanSekarang = false
      this.healthStatus=kesehatanSekarang//balikin ke setter
    }
  }
  
  get height(){
    return this.tinggi
  }

  set height(tinggiSekarang){
    this.tinggi = tinggiSekarang
  }

  produceFruits () {
    if (this.age>=this.umurDewasa){
      let acakJumlahBuah=Math.floor(Math.random()*this.batasanTumbuh)
      let arrHasil=[]
      for (let i=0; i<acakJumlahBuah; i++){
        let fruitObj = new Fruit()
        arrHasil.push(fruitObj)
      }
      this.fruits=arrHasil //masukkan ke setter fruits
    }
  }

  harvest () {
    let fruitBad = 0
    let fruitGood = 0
    if (this.age>=this.umurDewasa){
      for (let i=0; i<this.fruits.length; i++){
        if (this.fruits[i]['kualitasBuah']==='Bad'){
          fruitBad+=1
        } else {
          fruitGood+=1
        }
      }
      let hasilPanen = `${fruitGood+fruitBad} (${fruitGood} ${this.namaBuah} Good, ${fruitBad} ${this.namaBuah} Bad)`
      this.harvested = hasilPanen
    }
    else {
      this.harvested = 0
    }
  }
}

class Fruit {
  constructor(){
    let acakStatus=Math.round(Math.random()*2)
    if (acakStatus===0){
      this.kualitasBuah='Bad'
    } else {
      this.kualitasBuah='Good'
    }
  }
}

//------------------------Membuat mango tree---------------------//
class Manggo extends FruitTree {
  constructor(){
    super()
    this.namaBuah = "Mango"
  }

  grow(){
    super.grow()
    this.batasanTumbuh = 10
    this.umurDewasa=7
    this.umurMati = 13
  }
}

let manggo = new Manggo()
console.log(`The tree is alive! :smile:`)
do {
  manggo.grow();
  manggo.produceFruits();
  manggo.harvest();
  console.log(`[Year ${manggo.age} Report] Height = ${manggo.height} | Fruits harvested = ${manggo.harvested}`)
} while (manggo.healthStatus != false)
  console.log(`The tree has met its end . :sad:`)

//------------------------Membuat apple tree---------------------//
class Apple extends FruitTree {
  constructor(){
    super()
    this.namaBuah = "Apple"
  }

  grow(){
    super.grow()
    this.batasanTumbuh = 12
    this.umurDewasa = 8
    this.umurMati = 14
  }
} 

let apple = new Apple()
console.log(`The tree is alive! :smile:`)
do {
  apple.grow();
  apple.produceFruits();
  apple.harvest();
  console.log(`[Year ${apple.age} Report] Height = ${apple.height} | Fruits harvested = ${apple.harvested}`)
} while (apple.healthStatus != false)
  console.log(`The tree has met its end . :sad:`)

//------------------------Membuat pear tree---------------------//
class Pear extends FruitTree {
  constructor(){
    super()
    this.namaBuah = "Pear"
  }

  grow(){
    super.grow()
    this.batasanTumbuh = 10
    this.umurDewasa = 5
    this.umurMati = 12
  }
} 

let pear = new Pear()
console.log(`The tree is alive! :smile:`)
do {
  pear.grow();
  pear.produceFruits();
  pear.harvest();
  console.log(`[Year ${pear.age} Report] Height = ${pear.height} | Fruits harvested = ${pear.harvested}`)
} while (pear.healthStatus != false)
  console.log(`The tree has met its end . :sad:`)