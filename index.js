var Cat = require('./cat');
var Mouse = require('./mouse');

var tom = new Cat();
var jerry = new Mouse('micky');
tom.eat(jerry);
console.log(tom);

