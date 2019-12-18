function Dog(name){
	this.name = name;
	this.stomatch = [];
}

Dog.prototype.eat = function(cat) {
	cat.die();
	this.stomatch.push(cat);
};

module.exports = Dog;