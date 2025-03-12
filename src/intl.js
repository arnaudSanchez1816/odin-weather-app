const myLocationMap = new Map([
    ["en", "My location"],
    ["fr", "Ma position"],
    ["de", "Mein Standort"],
    ["es", "Mi posición"],
    ["it", "La mia posizione"],
])

const locationNotFoundErrorMap = new Map([
    ["en", "Oops! This location was not found."],
])

const genericErrorMap = new Map([
    ["en", "Oops! Something went wrong when trying to fetch the weather data."],
])

function getMyLocationString(languageCode) {
    const locationString = myLocationMap.get(languageCode)
    if (locationString) {
        return locationString
    }

    return myLocationMap.get("en")
}

function getLocationNotFoundErrorString(languageCode) {
    const errorString = locationNotFoundErrorMap.get(languageCode)
    if (errorString) {
        return errorString
    }

    return locationNotFoundErrorMap.get("en")
}

function getGenericErrorString(languageCode) {
    const errorString = genericErrorMap.get(languageCode)
    if (errorString) {
        return errorString
    }

    return genericErrorMap.get("en")
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

export {
    getMyLocationString,
    getLocationNotFoundErrorString,
    getGenericErrorString,
    getNavigatorLanguage,
}
