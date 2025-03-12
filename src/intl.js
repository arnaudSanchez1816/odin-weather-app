const myLocationMap = new Map([
    ["en", "My location"],
    ["fr", "Ma position"],
    ["de", "Mein Standort"],
    ["es", "Mi posición"],
    ["it", "La mia posizione"],
])

function getMyLocationString(languageCode) {
    const locationString = myLocationMap.get(languageCode)
    if (locationString) {
        return locationString
    }

    return myLocationMap.get("en")
}

export { getMyLocationString }
