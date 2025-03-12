const LOCATION_API_ENDPOINT =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"

// The API key is visible but it's fine for this project purpose.
const API_KEY = "BLB9FMLAKNLPK4AHCBUFYJM2H"

async function fetchWeatherForLocation(location) {
    if (!location) {
        throw new Error("Location invalid")
    }

    let locationString = location
    if (location instanceof GeolocationPosition) {
        locationString = `${location.coords.latitude},${location.coords.longitude}`
    }

    try {
        const urlParams = new URLSearchParams()
        urlParams.append("key", API_KEY)
        urlParams.append("lang", "id")
        urlParams.append("include", "current")
        urlParams.append("unitGroup", "metric")
        urlParams.append(
            "elements",
            "temp,windspeed,feelslike,datetimeEpoch,conditions"
        )

        const url = `${LOCATION_API_ENDPOINT}${locationString}?${urlParams}`
        const request = new Request(url)
        console.log(request)

        const response = await fetch(request)
        if (!response.ok) {
            const error = new Error(
                `Failed to fetch weather for location : ${locationString}\nStatus : ${response.statusText}`
            )
            error.code = response.statusText
            throw error
        }
        const responseJson = await response.json()
        return responseJson
    } catch (error) {
        console.error(error)
        throw error
    }
}

function getNavigatorLanguage() {
    const languageRegex = /^([A-Za-z]{2,3})(-[A-Za-z]{2,3})?$/
    const navLanguage = navigator.language

    const results = languageRegex.exec(navLanguage)

    if (results === null) {
        return "en"
    }

    return results[1]
}

export { fetchWeatherForLocation }
