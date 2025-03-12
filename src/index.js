import "modern-normalize"
import "./style.css"
import { fetchWeatherForLocation } from "./weatherApi.js"
import getUserLocation from "./geolocation.js"
import {
    displayWeatherDetails,
    displayLocationNotFound,
    displayApiError,
} from "./weatherPageController.js"

const weatherForm = document.querySelector("#weather-form")
const weatherSearchLocation = document.querySelector("#weather-search-location")
const myLocationButton = document.querySelector("#weather-my-location")

weatherForm.addEventListener("submit", onWeatherLocationSubmit)
myLocationButton.addEventListener("click", onMyLocationWeatherClicked)

function onWeatherLocationSubmit(event) {
    event.preventDefault()
    const searchLocation = weatherSearchLocation.value
    displayWeather(searchLocation)
}

async function onMyLocationWeatherClicked() {
    const position = await getUserLocation()
    if (position !== null) {
        position.localLocation = true
        displayWeather(position)
    }
}

async function displayWeather(location) {
    if (!location) {
        return
    }

    try {
        const weatherJson = await fetchWeatherForLocation(location)
        console.log(weatherJson)
        if (weatherJson) {
            displayWeatherDetails(weatherJson, location.localLocation)
        } else {
            displayLocationNotFound()
        }
    } catch (error) {
        displayApiError(error.code)
    }
}

await displayWeather("Paris, France")
