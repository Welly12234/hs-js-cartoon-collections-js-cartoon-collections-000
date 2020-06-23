// dwarfRollCall accepts an array of dwarves then numbers the dwarves in a line 1. ??? 2. ??? and returns it as an string
function dwarfRollCall(dwarves){
var str = ''
  for(let i = dwarves.length / 2; i < dwarves.length;i++){
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
// longPlaneteerCalls accepts an array of calls and returns true if the an elements is greater than 4 characeter and false if they are shorter than 4
function longPlaneteerCalls(words){
  for(let i = 0; i < words.length; i++){
    if(words[i].length > 4){
      return true
    }
  }
  return false
}
// findTheCheese accepts an array of strings it then looks at all the elements and finds the first one with a cheese and returns it. if there is no cheese return 'no cheese!'
function findTheCheese(foods){
  for(let i = 0; i < foods.length; i++){
    if(foods[i]==='cheddar' || foods[i]==='gouda' || foods[i]==='camembert'){
      return foods[i]
      }
    }
    return 'no cheese!'
  }
function wordWithB(array){
  var newarr = []
  for(let i = 0; i <array.length; i++){
    if(array[i].slice(0,1).toLowerCase() === 'b'){
      newarr.push(array[i])
    }
  }

}
