var Cat = require('./cat');
var Mouse = require('./mouse');
var Dog = require('./dog');

var bin	= new Dog('pun');
var tom = new Cat('tomy');
var jerry = new Mouse('micky');

console.log(bin);
console.log(tom);
console.log(jerry);
console.log('tomy eat micky ');
tom.eat(jerry);
console.log(tom);
bin.eat(tom);
console.log('pun eat micky ');
console.log(bin);


