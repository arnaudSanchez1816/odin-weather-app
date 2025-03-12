import { getMyLocationString } from "./intl.js"
import getWeatherTypeData from "./weatherTypes.js"

function displayWeatherDetails(weatherJson, usedLocalLocation = false) {
    const { currentConditions, resolvedAddress } = weatherJson

    const weatherInfos = document.querySelector("#weather-infos")
    weatherInfos.classList.remove("invisible")

    const locationName = document.querySelector("#location-name")
    if (locationName) {
        locationName.textContent = usedLocalLocation
            ? getMyLocationString()
            : resolvedAddress
    }

    const locationConditions = document.querySelector("#location-conditions")
    if (locationConditions) {
        const { conditions } = currentConditions
        const { text, videoSrc } = getWeatherTypeData(conditions)
        locationConditions.textContent = text

        const locationSummaryVideo = document.querySelector("#summary-video")
        if (locationSummaryVideo) {
            locationSummaryVideo.src = videoSrc
        }
    }

    const locationTime = document.querySelector("#location-time")
    if (locationTime) {
        const { datetimeEpoch } = currentConditions
        // Seconds to milliseconds
        const time = new Date(datetimeEpoch * 1000)

        locationTime.textContent = time.toLocaleTimeString()
    }

    const locationTemp = document.querySelector("#location-temp")
    if (locationTemp) {
        const { temp } = currentConditions

        locationTemp.textContent = `${temp}°C`
    }
    const locationFeelTemp = document.querySelector("#location-feel-temp")
    if (locationFeelTemp) {
        const { feelslike } = currentConditions

        locationFeelTemp.textContent = `${feelslike}°C`
    }

    const locationWindspeed = document.querySelector("#location-windspeed")
    if (locationWindspeed) {
        const { windspeed } = currentConditions

        locationWindspeed.textContent = `${windspeed} km/h`
    }
}

function displayLocationNotFound(location) {}

function displayApiError(error) {}

export { displayWeatherDetails, displayLocationNotFound, displayApiError }
