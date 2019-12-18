function Dog(){
	this.stomatch = [];
}

Dog.prototype.eat = function(cat) {
	cat.die();
	this.stomatch.push(cat);
};

module.exports = Dog;