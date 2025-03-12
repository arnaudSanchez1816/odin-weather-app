import "modern-normalize"
import "./style.css"
import { fetchWeatherForLocation } from "./weatherApi.js"
import getUserLocation from "./geolocation.js"
import {
    displayWeatherDetails,
    displayLocationNotFound,
    displayApiError,
    toggleLoader,
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
    try {
        toggleLoader(true)
        const position = await getUserLocation()
        if (position !== null) {
            position.localLocation = true
            displayWeather(position)
        }
    } finally {
        toggleLoader(false)
    }
}

async function displayWeather(location) {
    if (!location) {
        return
    }

    try {
        toggleLoader(true)
        const weatherJson = await fetchWeatherForLocation(location)
        console.log(weatherJson)
        if (weatherJson) {
            displayWeatherDetails(weatherJson, location.localLocation)
        } else {
            displayLocationNotFound()
        }
    } catch (error) {
        if (error.code === 400) {
            displayLocationNotFound()
        } else {
            displayApiError()
        }
    } finally {
        toggleLoader(false)
    }
}

await displayWeather("Paris, France")
