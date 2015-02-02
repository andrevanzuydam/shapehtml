(function () { "use strict";
var Shape = function() {
	this.openingtag = "";
	this.closingtag = "";
	console.log("Hello World");
	this.openingtag = "123";
	this.closingtag = "345";
};
Shape.main = function() {
	console.log("Shape class declared");
	console.log(new Shape());
};
Shape.main();
})();

//# sourceMappingURL=Shape.js.map