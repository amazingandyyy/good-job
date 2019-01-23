var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

console.log(beasts.indexOf('Godzilla')); // return 1

console.log(beasts.findIndex(function(item){
  return item === 'Godzilla';
})); // return 1

console.log(beasts.find(function(item){
  return item === 'Godzilla';
})); // return Godzilla

console.log(beasts.includes('Godzilla')); // return true
console.log(beasts[1].includes('God')); // return true