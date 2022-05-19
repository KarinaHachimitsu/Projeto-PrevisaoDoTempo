import { requestAPI } from './handleAPI.js'

start()

const btn = document.querySelector('.btn')
const city = document.querySelector('.cidade')

btn.addEventListener('click', (e) => {
	e.preventDefault()
  const input = document.querySelector('.input').value
  requestAPI(input)
})
async function start() {
	const initial = await requestAPI('tokyo')
	return initial
}

export const renderAPI = (city) => {
	const sessao = document.querySelector('.temp')
	sessao.innerHTML = `  
	<h1 class="tempo" id="cidade">${city.location.name} ${city.location.country}</h1>
	<div class='imgDiv'>
	<p class="tempo" id="tempc">${city.current.temp_c}°C</p>
	<img alt='Clouds'src=${city.current.condition.icon}>
	</div>
	<p class="tempo" id="humidade">Humidity ${city.current.humidity}%</p>
	<p class="tempo" id="vento">Wind ${city.current.wind_kph}Kph</p>
	<p class="tempo" id="data"> Last updated ${city.current.last_updated}</p>
	`
}
