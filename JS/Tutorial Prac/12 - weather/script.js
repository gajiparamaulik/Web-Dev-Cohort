const inputValue = document.getElementById('inputVal');
const button = document.getElementById('searchBtn');

const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

async function getData(city) {
    let getWeatherData = await 
        fetch(`http://api.weatherapi.com/v1/current.json?key=7996646101c04097b5562539262502&q=${city}&aqi=yes`);
        return await getWeatherData.json();
}

button.addEventListener('click', async () => {
    const value = inputValue.value;
    const result = await getData(value);
    console.log(result);

    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
});