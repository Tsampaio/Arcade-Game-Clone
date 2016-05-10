var Car = function (loc) {
	var obj = {loc: loc};
	extend(obj, Car.methods);
	return obj;
};

Car.mehods = {
	move : function() {
		this.loc++;
	}
};