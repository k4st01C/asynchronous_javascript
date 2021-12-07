'use strict';

//First, add the setTimeout code as shown in the intro to this exercise. Then modify the code by creating a promise so that the code can run asynchronously.

const massiveProcess = function (num) {
	let result = 0;
	return new Promise((res, rej) => {
		setTimeout(function () {
			for (let i = num ** 7; i >= 0; i--) {
				result += Math.atan(i) * Math.tan(i);
			}
			res(result);
		}, 0);
	});
};

massiveProcess(10).then(res => console.log('The number is: ' + res));

//More processing later on
console.log(5 * 5 + 100);
