function dwarfRollCall(dwarves){

var str = ''
  for(let i = 0; i < dwarves.length;i++){
    str += `${i+1}. ${dwarves[i]} `
  }
  return str
}

function summonCaptainPlanet(planeteerCalls){
  var array = []
  for(let i = 0; i < planeteerCalls.length; i++){
    array.push(planeteerCalls[i].toUpperCase() + '!')
  }
  return array
}

function longPlaneteerCalls(assortedWords){
  for(let i = 0; i < assortedWords.length; i++){
    if(assortedWords[i].length > 4){
      return true
    }
  }
  return false

}
function findTheCheese(foods){

  for(let i = 0; i < foods.length; i++){
    if(foods[i]==='cheddar' || foods[i]==='gouda' || foods[i]==='camembert'){
      return foods[i]
      }
    }
    return 'no cheese!'
  }
