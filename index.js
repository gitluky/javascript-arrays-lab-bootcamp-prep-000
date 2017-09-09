const app = "I don't do much."

var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(){
  kittens.shift(name)
}

<<<<<<< HEAD
function appendKitten(name){
=======
function appenedKitten(name){
>>>>>>> f749b30609361876d8eff43d20c3678a5f379bea
  var newKittens = [...kittens, name]
  return newKittens
}

function prependKitten(name){
  var newKittens = [name,...kittens]
  return newKittens
}

function removeLastKitten(){
  var newKittens = kittens.slice(0,-1)
  return newKittens
}

function removeFirstKitten(){
  var newKittens = kittens.slice(1)
  return newKittens
}
