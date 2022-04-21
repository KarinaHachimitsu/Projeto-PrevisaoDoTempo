const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
		'X-RapidAPI-Key': '3014fae073msh0e1512ac676c0e6p148bc0jsn32d8a77afb81'
	}
};

async function requestAPI(city) {
	await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
	.then((response) => response.json())
	.then((response) => console.log(response))
	.catch((err) => console.error(err));
}

console.log(requestAPI('sao paulo'));



const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const city = document.querySelector('.cidade')

async function start() {
	const initial = await requestAPI('tokyo')
	return initial
}

window.onload = {
	start,
}
