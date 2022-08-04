
var MinStack = function () {
	this.stack = [];
	this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
	this.stack.push(val);

	if (this.stack.length == 1) {
		this.minStack.push(val);
	} else {
		var currMin = this.minStack[this.minStack.length - 1];

		if (val < currMin) {
			this.minStack.push(val);
		} else {
			this.minStack.push(currMin);
		}
	}
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	this.stack = this.stack.slice(0, this.stack.length - 1);
	this.minStack = this.minStack.slice(0, this.minStack.length - 1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */