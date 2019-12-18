var Cat = require('./cat');
var Mouse = require('./mouse');
var Dog = require('./dog');

var tom = new Cat('tomy');
var jerry = new Mouse('micky');
console.log(tom);
tom.eat(jerry);
console.log(tom);
var bin	= new Dog();
bin.eat(tom);
console.log(bin);


