import rainyWeatherVideo from "./videos/rainy_weather.mp4"
import hailWeatherVideo from "./videos/hail_weather.mp4"
import snowWeatherVideo from "./videos/snow_weather.mp4"
import cloudyWeatherVideo from "./videos/cloudy_weather.mp4"
import clearWeatherVideo from "./videos/clear_weather.mp4"
import stormWeatherVideo from "./videos/storm_weather.mp4"
import fogWeatherVideo from "./videos/fog_weather.mp4"

const weatherTypeMap = new Map([
    [
        "type_1",
        {
            text: "Blowing Or Drifting Snow",
            videoSrc: snowWeatherVideo,
        },
    ],
    [
        "type_2",
        {
            text: "Drizzle",
            videoSrc: rainyWeatherVideo,
        },
    ],
    [
        "type_3",
        {
            text: "Heavy Drizzle",
            videoSrc: rainyWeatherVideo,
        },
    ],
    [
        "type_4",
        {
            text: "Light Drizzle",
            videoSrc: rainyWeatherVideo,
        },
    ],
    [
        "type_5",
        {
            text: "Heavy Drizzle/Rain",
            videoSrc: rainyWeatherVideo,
        },
    ],
    [
        "type_6",
        {
            text: "Light Drizzle/Rain",
            videoSrc: rainyWeatherVideo,
        },
    ],
    [
        "type_7",
        {
            text: "Dust storm",
            videoSrc: rainyWeatherVideo,
        },
    ],
    [
        "type_8",
        {
            text: "Fog",
            videoSrc: fogWeatherVideo,
        },
    ],
    [
        "type_9",
        {
            text: "Freezing Drizzle/Freezing Rain",
            videoSrc: hailWeatherVideo,
        },
    ],
    [
        "type_10",
        {
            text: "Heavy Freezing Drizzle/Freezing Rain",
            videoSrc: hailWeatherVideo,
        },
    ],
    [
        "type_11",
        {
            text: "Light Freezing Drizzle/Freezing Rain",
            videoSrc: hailWeatherVideo,
        },
    ],
    [
        "type_12",
        {
            text: "Freezing Fog",
            videoSrc: fogWeatherVideo,
        },
    ],
    [
        "type_13",
        {
            text: "Heavy Freezing Rain",
            videoSrc: hailWeatherVideo,
        },
    ],
    [
        "type_14",
        {
            text: "Light Freezing Rain",
            videoSrc: hailWeatherVideo,
        },
    ],
    [
        "type_15",
        {
            text: "Funnel Cloud/Tornado",
            videoSrc: stormWeatherVideo,
        },
    ],
    [
        "type_16",
        {
            text: "Hail Showers",
            videoSrc: hailWeatherVideo,
        },
    ],
    [
        "type_17",
        {
            text: "Ice",
            videoSrc: hailWeatherVideo,
        },
    ],
    [
        "type_18",
        {
            text: "Lightning Without Thunder",
            videoSrc: stormWeatherVideo,
        },
    ],
    [
        "type_19",
        {
            text: "Mist",
            videoSrc: fogWeatherVideo,
        },
    ],
    [
        "type_20",
        {
            text: "Precipitation In Vicinity",
            videoSrc: rainyWeatherVideo,
        },
    ],
    [
        "type_21",
        {
            text: "Rain",
            videoSrc: rainyWeatherVideo,
        },
    ],
    [
        "type_22",
        {
            text: "Heavy Rain And Snow",
            videoSrc: rainyWeatherVideo,
        },
    ],
    [
        "type_23",
        {
            text: "Light Rain And Snow",
            videoSrc: rainyWeatherVideo,
        },
    ],
    [
        "type_24",
        {
            text: "Rain Showers",
            videoSrc: rainyWeatherVideo,
        },
    ],
    [
        "type_25",
        {
            text: "Heavy Rain",
            videoSrc: rainyWeatherVideo,
        },
    ],
    [
        "type_26",
        {
            text: "Light Rain",
            videoSrc: rainyWeatherVideo,
        },
    ],
    [
        "type_27",
        {
            text: "Sky Coverage Decreasing",
            videoSrc: cloudyWeatherVideo,
        },
    ],
    [
        "type_28",
        {
            text: "Sky Coverage Increasing",
            videoSrc: cloudyWeatherVideo,
        },
    ],
    [
        "type_29",
        {
            text: "Sky Unchanged",
            videoSrc: cloudyWeatherVideo,
        },
    ],
    [
        "type_30",
        {
            text: "Smoke Or Haze",
            videoSrc: fogWeatherVideo,
        },
    ],
    [
        "type_31",
        {
            text: "Snow",
            videoSrc: snowWeatherVideo,
        },
    ],
    [
        "type_32",
        {
            text: "Snow And Rain Showers",
            videoSrc: snowWeatherVideo,
        },
    ],
    [
        "type_33",
        {
            text: "Snow Showers",
            videoSrc: snowWeatherVideo,
        },
    ],
    [
        "type_34",
        {
            text: "Heavy Snow",
            videoSrc: snowWeatherVideo,
        },
    ],
    [
        "type_35",
        {
            text: "Light Snow",
            videoSrc: snowWeatherVideo,
        },
    ],
    [
        "type_36",
        {
            text: "Squalls",
            videoSrc: cloudyWeatherVideo,
        },
    ],
    [
        "type_37",
        {
            text: "Thunderstorm",
            videoSrc: stormWeatherVideo,
        },
    ],
    [
        "type_38",
        {
            text: "Thunderstorm Without Precipitation",
            videoSrc: stormWeatherVideo,
        },
    ],
    [
        "type_39",
        {
            text: "Diamond Dust",
            videoSrc: snowWeatherVideo,
        },
    ],
    [
        "type_40",
        {
            text: "Hail",
            videoSrc: hailWeatherVideo,
        },
    ],
    [
        "type_41",
        {
            text: "Overcast",
            videoSrc: cloudyWeatherVideo,
        },
    ],
    [
        "type_42",
        {
            text: "Partially cloudy",
            videoSrc: cloudyWeatherVideo,
        },
    ],
    [
        "type_43",
        {
            text: "Clear",
            videoSrc: clearWeatherVideo,
        },
    ],
])

const UNKNOWN_WEATHER_TYPE = {
    text: "Unknown",
    videoSrc: cloudyWeatherVideo,
}

function getWeatherTypeData(weatherType) {
    const typeSplit = weatherType.split(",")
    let textString = ""
    let videoSrc = null

    for (let i = 0; i < typeSplit.length; ++i) {
        const typeTrimmed = typeSplit[i].trim()
        if (weatherTypeMap.has(typeTrimmed)) {
            const data = weatherTypeMap.get(typeTrimmed)
            textString += data.text
            if (i < typeSplit.length - 1) {
                textString += ", "
            }
            if (videoSrc === null) {
                videoSrc = data.videoSrc
            }
        }
    }

    if (textString === "") {
        return UNKNOWN_WEATHER_TYPE
    }
    return {
        text: textString,
        videoSrc: videoSrc,
    }
}

export default getWeatherTypeData
