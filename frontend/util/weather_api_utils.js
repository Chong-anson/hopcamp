export const fetchTemperatur = ({lat, lng}) => {
    $.get({
        url: `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${your api key}`
    })
}

