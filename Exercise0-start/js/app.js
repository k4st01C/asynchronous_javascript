// /*
// Take a moment and analyze this code. What would it take to make it asynchronous using setTimeout? Try a few things and see how they work.
// */
// let students = [
// 	{ name: 'Mary', score: 90, school: 'East' },
// 	{ name: 'James', score: 100, school: 'East' },
// 	{ name: 'Steve', score: 40, school: 'East' },
// 	{ name: 'Gabe', score: 90, school: 'West' },
// 	{ name: 'Rachel', score: 800, school: 'East' },
// 	{ name: 'Rochelle', score: 95, school: 'West' },
// 	{ name: 'Lynette', score: 75, school: 'East' },
// ];

// let processStudents = function (data, callback) {
// 	setTimeout(() => {
// 		for (let i = 0; i < data.length; i++) {
// 			if (data[i].school.toLowerCase() === 'east') {
// 				if (typeof callback === 'function') {
// 					callback(data[i]);
// 				}
// 			}
// 		}
// 	}, 10000);
// };

// console.log('Before determineTotal');

// let determineTotal = function () {
// 	let total = 0,
// 		count = 0;

// 	processStudents(students, function (obj) {
// 		total = total + obj.score;
// 		count++;
// 	});

// 	console.log('Total Score: ' + total + ' - Total Count: ' + count);
// };

// determineTotal();

// console.log('End of code.');

'use strict';

let request = new XMLHttpRequest();
let apiKey = 'a4857b4f74a55b22691af7b2b429ee00';
let cityNames = ['istanbul', 'ankara', 'izmir'];
let urls = cityNames.map(e => `https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=${apiKey}`);

// fetch(url)
// 	.then(res => res.json())
// 	.then(res => console.log(JSON.stringify(res)))
// 	.catch(err => console.log(err));

console.log(2);

axios.get('https://jsonplaceholder.typicode.com/posts').then(e => console.log(e.data));
