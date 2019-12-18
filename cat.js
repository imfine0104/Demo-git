function Cat(){
	this.stomatch = [];
}

Cat.prototype.eat = function(mouse) {
	mouse.die();
	this.stomatch.push(mouse);
};
module.exports = Cat;