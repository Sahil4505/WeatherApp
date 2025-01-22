// import axios from 'axios';


let inp=document.querySelector("input");
let button=document.querySelector("button");
let city=document.querySelector(".cityname");
let longi=document.querySelector(".longi .value");
let lati=document.querySelector(".lati .value");
let humi=document.querySelector(".humi .value");
let press=document.querySelector(".pressure .value");
let temp=document.querySelector(".temper .value");
let hidden=document.querySelector("#hidden");

async function func(){
	return new Promise((resolve,reject)=>{
		button.addEventListener("click",()=>{
			resolve(inp.value);
		})
		
	})
}


async function weather(){
	try {
		
		const user_input=await func();
		
		const options = {
	method: 'GET',
	url: 'https://yahoo-weather5.p.rapidapi.com/weather',
	params: {
	  location: user_input,
	  format: 'json',
	  u: 'c'
	},
	headers: {
	  'x-rapidapi-key': '2e6b8cc5bcmsh82de57e017622f0p12ffb0jsn28afdeda9bb9',
	  'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
  };
		const response = await axios.request(options);

		let data=response.data;
		hidden.classList.remove("hidden");
		console.log(data);
		city.innerText=data.location.city;
		
		lati.innerText=data.location.lat;
		longi.innerText=data.location.long;
		temp.innerHTML=`${data.current_observation.condition.temperature} <span class="unit">°C</span>`;
		
		press.innerText=data.current_observation.atmosphere.pressure;
		humi.innerText=data.current_observation.atmosphere.humidity;
		
	} catch (error) {
		console.error(error);
	}
	
};

weather();