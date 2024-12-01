function dropSunriseSunset(location) {
    const locations = {
        "New York City": { lat: 40.71427, lng: -74.00597 },
        "Chicago, IL": { lat: 41.85003, lng: -87.65005 },
        "Philadelphia, PA": { lat: 39.95233, lng: -75.16379},
        "Boston, MA": { lat: 42.35843, lng: -71.05977},
        "Florida, United States": { lat: 27.66483, lng: -81.51575 },
        "Las Vegas, NV": { lat: 36.17497, lng: -115.13722 },
        "Auburn, CA": { lat: 38.89657, lng: -121.07689 },
        "St. Louis, MO": { lat: 38.62727, lng: -90.19789 },
        "Washington D.C.": { lat: 38.89511, lng: -77.03637 },
        "Toronto, ON": { lat: 43.70011, lng: -79.4163 }
    };

    const { lat, lng } = locations[location];
    const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`;
    const url1 = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=tomorrow&formatted=0`;
    getData(url,url1)

}

function getData(url, url1){
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.status === "OK") {
                var todDateRise = new Date(data.results.sunrise).toLocaleTimeString();
                var todDateSet=  new Date(data.results.sunset).toLocaleTimeString();
                var todDateDawn=  new Date(data.results.astronomical_twilight_begin).toLocaleTimeString();
                var todDateDusk=  new Date(data.results.astronomical_twilight_end).toLocaleTimeString();
                var todSolarNoon=  new Date(data.results.solar_noon).toLocaleTimeString();
                var timeZone = data.tzid;
                var hours = Math.floor(data.results.day_length / 3600);
                var minutes = Math.floor((data.results.day_length - (hours * 3600)) / 60);
                var seconds = data.results.day_length - (hours * 3600) - (minutes * 60);

                document.getElementById("today-sunrise-time").innerHTML= `${todDateRise}`;
                document.getElementById("today-sunset-time").innerHTML= `${todDateSet}`;
                document.getElementById("today-dawn-time").innerHTML= `Dawn: ${todDateDawn}`;
                document.getElementById("today-dusk-time").innerHTML= `Dusk: ${todDateDusk}`;

                document.getElementById("today-day-length").innerHTML= `Day Length: ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds `;
                document.getElementById("today-solar-noon").innerHTML= `Solar Noon: ${todSolarNoon}`;
                document.getElementById("today-time-zone").innerHTML= `${timeZone}`;

            }
        })
        .catch(error => alert(`Error: ${error.message}`));
        fetch(url1)
        .then(response => response.json())
        .then(data => {
            if (data.status === "OK") {

                var  tomDateRise = new Date(data.results.sunrise).toLocaleTimeString();
                var tomDateSet=  new Date(data.results.sunset).toLocaleTimeString();
                var tomDateDawn=  new Date(data.results.astronomical_twilight_begin).toLocaleTimeString();
                var tomDateDusk=  new Date(data.results.astronomical_twilight_end).toLocaleTimeString();
                var tomSolarNoon=  new Date(data.results.solar_noon).toLocaleTimeString();
                var hours = Math.floor(data.results.day_length / 3600);
                var minutes = Math.floor((data.results.day_length - (hours * 3600)) / 60);
                var seconds = data.results.day_length - (hours * 3600) - (minutes * 60);
                var timeZone=  data.tzid;
                document.getElementById("tom-sunrise-time").innerHTML= `${tomDateRise}`;
                document.getElementById("tom-sunset-time").innerHTML= `${tomDateSet}`;
                document.getElementById("tom-dawn-time").innerHTML= `Dawn: ${tomDateDawn}`;
                document.getElementById("tom-dusk-time").innerHTML= `Dusk: ${tomDateDusk}`;

                document.getElementById("tom-day-length").innerHTML= `Day Length: ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds `;
                document.getElementById("tom-solar-noon").innerHTML= `Solar Noon: ${tomSolarNoon}`;
                document.getElementById("tom-time-zone").innerHTML= `${timeZone}`;

            }
        })
        .catch(error => alert(`Error: ${error.message}`));
}
document.getElementById('get-current-location').addEventListener('click', function() {

        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`;
            const url1 = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=tomorrow&formatted=0`;
            getData(url,url1)
        
        }, error => {
            console.error(`Error: ${error.message}`);
        });
    });
