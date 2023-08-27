const apiKey ="b718557d077b531eb1c9942ade787a91";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const temp = document.querySelector(".temp");
const cityName = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const input = document.querySelector(".search input");
const btn = document.querySelector(".search i");
const img = document.querySelector(".wether img");
const error = document.querySelector(".error");



async function wetherCheck(city){
    const response = await fetch(apiUrl+ city +`&appid=${apiKey}`);
    const data = await response.json();
     
      if(response.status === 404){
        error.style.display = "block";
        document.querySelector(".wether").style.display = "none"
      }
     else{
    
    cityName.innerHTML = data.name;
    temp.innerHTML =Math.round(data.main.temp) +"°C";
    humidity.innerHTML =data.main.humidity +"%";
    wind.innerHTML =data.wind.speed +"km/h";
    if(data.weather[0].main === "Clouds"){
        img.src ="./images/clouds.png"
    }
    else if(data.weather[0].main === "Rain"){
        img.src ="./images/rain.png"
    }
    else if(data.weather[0].main === "Clear"){
        img.src ="./images/clear.png"
    }
    else if(data.weather[0].main === "Drizzla"){
        img.src ="./images/drizzle.png"
    }
    else if(data.weather[0].main === "Mist"){
        img.src ="./images/mist.png"
    }

    document.querySelector(".wether").style.display="block";
    error.style.display = "none";

  }

}

btn.addEventListener("click" ,()=>{
    const city = input.value;
    wetherCheck(city);
})

