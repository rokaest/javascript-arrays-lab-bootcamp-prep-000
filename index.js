// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  var kitten = kittens.push(name)
  return kitten
}

function destructivelyPrependKitten(name) {
  var kitten = kittens.unshift(name)
  return kitten
}

function destructivelyRemoveLastKitten() {
  var kitten = kittens.pop()
  return kitten
}

function destructivelyRemoveFirstKitten() {
  var kitten = kittens.shift()
  return kitten
}

function appendKitten(name) {
  var newKittens = [...kittens, name]
  return newKittens
}

function prependKitten(name) {
  var newKittens = [name, ...kittens]
  return newKittens
}

function removeLastKitten() {
  var newKittens = kittens.slice(0, (kittens.length - 1))
  return newKittens
}

function removeFirstKitten() {
  var newKittens = kittens.splice(0,1)
  return newKittens
}



