// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number,array) => {
  return{
    specimenNum: number,
    dna: array,
    mutate() {
      const mutatedBase = [];
      let oldBase = ' ';
      console.log('old dna strand: ' + this.dna);
      const randomNum = Math.floor(Math.random()*15);
      console.log('random num is: ' + randomNum);
      oldBase = this.dna[randomNum];
      this.dna[randomNum] = returnRandBase(); 

      while(oldBase === this.dna[randomNum])
      this.dna[randomNum] = returnRandBase();

       return this.dna;
    },
    compareDna(pAequor) {
      let sameBase = 0;
      let percentage = 0;
      const sameIndex = [];
      console.log('current dna: ' + this.dna);
      console.log('new dna:     ' + pAequor.dna);
      console.log(pAequor.dna.length);
      for(i=0; i < pAequor.dna.length; i++){
        if(this.dna[i]===pAequor.dna[i]){
          sameIndex.push(i);
          sameBase++;
        }
      }
      console.log('base counter: ' + sameBase);
      console.log('places where the bases are the same: ' + sameIndex);

      percentage = ((sameBase/pAequor.dna.length)*100).toFixed(2);
      //percentage.toFixed(2);
      
      console.log(`specimen #${this.specimenNum} 
      and specimen #${pAequor.specimenNum} have ${percentage}% DNA in common.`);
    },
    willLikelySurvive() {
      let counter = 0;
      let percentage = 0;
      //console.log(this.dna);
      for(i = 0; i < this.dna.length; i++){
        if(this.dna[i]==='C' || this.dna[i]==='G')
          counter++;
      }
      //console.log(counter);
      percentage = ((counter/this.dna.length)*100).toFixed(2);
      //console.log('percentage is: ' + percentage);
      if(percentage >= 60)
        return true;
      else
        return false;


    } 
  }
}

let pAequorInstances = [];
const survivedInstances = [];
let index = 1;

while(survivedInstances.length< 30){
  pAequorInstances = (pAequorFactory(index,mockUpStrand()));
    if(pAequorInstances.willLikelySurvive()===true)
      survivedInstances.push(pAequorInstances);
    index++;
    console.log(index);

  }
/*
while(survivedInstances.length< 30){
  pAequorInstances.push((pAequorFactory(index,mockUpStrand())));
  pAequorInstances.forEach(element => {
    if(element.willLikelySurvive()===true)
      survivedInstances.push(element);
    index++;
    console.log(index);

  })*/
    
/*
while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
  }
  idCounter++;
}*/


/*
let instCounter = 1;
for(key in survivedInstances){
  pAequorInstances.key = instCounter;
  instCounter++;
}*/


//const currentSpecimen = pAequorFactory(1,mockUpStrand());
//const newSpecimen = pAequorFactory(2,mockUpStrand());
//currentSpecimen.compareDna(newSpecimen);
//console.log(newSpecimen.willLikelySurvive());
//const mutation = pAequorFactory(1,mockUpStrand());
//console.log(mutation.mutate());

console.log(survivedInstances);
console.log(survivedInstances.length);
console.log(pAequorInstances);




