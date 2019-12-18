function Cat(name){
	this.name = name;
	this.dead = false;
	this.stomatch = [];
}

Cat.prototype.eat = function(mouse) {
	mouse.die();
	this.stomatch.push(mouse);
};

Cat.prototype.die = function(){
	this.dead = true;
};

module.exports = Cat;