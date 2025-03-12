import {
    getMyLocationString,
    getGenericErrorString,
    getLocationNotFoundErrorString,
    getNavigatorLanguage,
} from "./intl.js"
import getWeatherTypeData from "./weatherTypes.js"
import { format } from "date-fns"

const INVISIBLE_CLASS = "invisible"

function displayWeatherDetails(weatherJson, usedLocalLocation = false) {
    const { currentConditions, resolvedAddress } = weatherJson

    toggleMainContainer(true)
    toggleErrorContainer(false)

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

        locationTime.textContent = format(time, "HH:mm:ss OOOO")
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

function displayLocationNotFound() {
    toggleMainContainer(false)
    const errorContainer = toggleErrorContainer(true)
    while (errorContainer.childElementCount > 0) {
        errorContainer.removeChild(errorContainer.lastElementChild)
    }

    const errorP = document.createElement("p")
    errorP.textContent = getLocationNotFoundErrorString(getNavigatorLanguage())
    errorContainer.appendChild(errorP)
}

function displayApiError() {
    toggleMainContainer(false)
    const errorContainer = toggleErrorContainer(true)
    while (errorContainer.childElementCount > 0) {
        errorContainer.removeChild(errorContainer.lastElementChild)
    }

    const errorP = document.createElement("p")
    errorP.textContent = getGenericErrorString(getNavigatorLanguage())
    errorContainer.appendChild(errorP)
}

function toggleMainContainer(display) {
    const weatherInfos = document.querySelector("#weather-infos")
    if (weatherInfos) {
        weatherInfos.classList.toggle(INVISIBLE_CLASS, !display)
    }

    return weatherInfos
}

function toggleErrorContainer(display) {
    const errorContainer = document.querySelector(".error-container")
    if (errorContainer) {
        errorContainer.classList.toggle(INVISIBLE_CLASS, !display)
    }

    return errorContainer
}

function toggleLoader(display) {
    const loaderContainer = document.querySelector(".loader-container")
    if (loaderContainer) {
        loaderContainer.classList.toggle(INVISIBLE_CLASS, !display)
    }

    return loaderContainer
}

export {
    displayWeatherDetails,
    displayLocationNotFound,
    displayApiError,
    toggleLoader,
}
