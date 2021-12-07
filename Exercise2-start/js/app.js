'use strict';
var MAINAPP = (function (nsp) {
	let url = 'https://jsonplaceholder.typicode.com/';
	let suffixes = ['posts', 'todos', 'comments'];

	let promises = suffixes.map(e => fetch(url + e).then(res => res.json()));
	Promise.all(promises).then(msg => msg.forEach((e, i) => (nsp[suffixes[i]] = e)));

	return nsp;
})(MAINAPP || {});
