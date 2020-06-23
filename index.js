// dwarfRollCall accepts an array of dwarves then numbers the dwarves in a line 1. ??? 2. ??? and returns it
function dwarfRollCall(dwarves){
var str = ''
  for(let i = 0; i < dwarves.length;i++){
    str += `${i+1}. ${dwarves[i]} `
  }
  return str
}
// summonCaptainPlanet accepts an array of calls and makes each element in the array all caps and adds a '!' to the end of the element then returns that new array
function summonCaptainPlanet(planeteerCalls){
  var array = []
  for(let i = 0; i < planeteerCalls.length; i++){
    array.push(planeteerCalls[i].toUpperCase() + '!')
  }
  return array
}
//
function longPlaneteerCalls(words){
  for(let i = 0; i < words.length; i++){
    if(words[i].length > 4){
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
