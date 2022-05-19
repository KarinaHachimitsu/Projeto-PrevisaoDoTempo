import { renderAPI } from './index.js'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
		'X-RapidAPI-Key': '3014fae073msh0e1512ac676c0e6p148bc0jsn32d8a77afb81'
	}
};

export async function requestAPI(city) {
	await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
	.then((response) => response.json())
	.then((response) => {renderAPI(response), console.log(response)} )
	.catch((err) => console.error(err));
}


