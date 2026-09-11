const h1=document.querySelector("h1");
const input=document.querySelector("#input");
const btn=document.querySelector("#searchbtn");



const options = {
    method: 'GET',
    headers: {
    
        'x-rapidapi-key': 'MY_key',
        'x-rapidapi-host': 'world-weather-online-api1.p.rapidapi.com'
    }
};

async function getWeather(city,rowId) {
    const url = `https://world-weather-online-api1.p.rapidapi.com/weather.ashx?q=${city}&num_of_days=3&tp=1&lang=en&aqi=yes&alerts=no&format=json`;
    try {
        const response = await fetch(url, options);
        const result = await response.json();

    const current = result.data.current_condition[0];

// For card-1
        document.getElementById("temp").textContent = current.temp_C;
        document.getElementById("feelslike").textContent = current.FeelsLikeC;
        document.getElementById("condition").textContent =
            current.weatherDesc[0].value;
// For card-2
        document.getElementById("windspeed").textContent =
            current.windspeedKmph;
        document.getElementById("direction").textContent =
            current.winddir16Point;
        document.getElementById("precipitation").textContent =
            current.precipMM;
//For card-3
        document.getElementById("humidity").textContent =
            current.humidity;
        document.getElementById("pressure").textContent =
            current.pressure;
        document.getElementById("visibility").textContent =
            current.visibility;
// FOR common places 
if(rowId){
    document.getElementById(`${rowId}-temp`).textContent=current.temp_C;
    document.getElementById(`${rowId}-feels`).textContent=current.FeelsLikeC;
    document.getElementById(`${rowId}-humidity`).textContent=current.humidity;
    document.getElementById(`${rowId}-wind`).textContent=current.windspeedKmph;
    document.getElementById(`${rowId}-direction`).textContent=current.winddir16Point;
    document.getElementById(`${rowId}-pressure`).textContent=current.pressure;
    document.getElementById(`${rowId}-visibility`).textContent=current.visibility;
    
}
    } catch (error) {
        console.error(error);
    }
}
btn.addEventListener('click',(event)=>{
    event.preventDefault();
const city=input.value;
const formmetedcity=city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
h1.innerText=`Weather For ${formmetedcity} `
getWeather(city);

});
getWeather("lucknow","lucknow");
getWeather("kashmir","kashmir");
getWeather("ladakh","ladakh");
getWeather("pune","pune");
