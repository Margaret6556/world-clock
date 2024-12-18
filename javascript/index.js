function updateTime() {
  //Los Angeles
  let LosangelesElement = document.querySelector("#los-angeles");
  let losangelesDateElement = document.querySelector("date");
  let losangelesTimeElement = document.querySelector("time");
  let lonangelesTime = moment().tz("America/Los Angeles");

  losangelesDateElement.innerHTML = lonangelesTime.format("dddd MMMM D YYYY");
  losangelesTimeElement.innerHTML = lonangelesTime.format("h:mm:s A");

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = document.querySelector("date");
  let sydneyTimeElement = document.querySelector("time");
  let sydneyTime = moment().tz("Australia/Sydney");

  losangelesDateElement.innerHTML = lonangelesTime.format("dddd MMMM D YYYY");
  losangelesTimeElement.innerHTML = lonangelesTime.format("h:mm:s A");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;

  // Handle "current" option by guessing the time zone
  if (cityTimeZone === "cities") {
    cityTimeZone = moment.tz.guess();
  }

  // Extract city name and get the current time for the selected time zone
  let cityName = cityTimeZone.replace("_", " ").split("/")[1]; // Replace underscores with spaces for better readability
  let cityTime = moment().tz(cityTimeZone);

  // Update the city element with formatted HTML content
  citiesElement.innerHTML = `
    <div class="cities">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
        <div class="time">
          ${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small>
        </div>
      </div>
    </div>
  `;
}

let cityElement = document.querySelector("#cityName");
cityElement.addEventListener("change", updateCity);
