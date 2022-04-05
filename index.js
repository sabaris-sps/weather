let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let icon = document.querySelector(".icon");
const kelvin = 273;

window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            // API ID
            const api = "2ea2fa99487c828f8f430987caae3775";

            // API URL
            const base =
                `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
                `lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`;

            // Calling the API
            fetch(base)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
                    summary.textContent = data.weather[0].description;
                    const iconcode = data.weather[0].icon;
                    let icon1 = "http://openweathermap.org/img/w/" + iconcode + ".png";
                    icon.innerHTML = `<img src="${icon1}" style= 'height:7rem'/>`;
                });
        });
    }
});