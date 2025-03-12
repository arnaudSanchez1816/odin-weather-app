async function getUserLocation() {
    if (!navigator.geolocation) {
        return null
    }

    try {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })

        console.log(position)
        return position
    } catch (error) {
        console.error(error)
        return null
    }
}

export default getUserLocation
