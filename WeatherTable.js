function WeatherTable({ ort, climateCode, forecast }) {
    /*     console.log(ort)
        console.log(climateCode) */
    const weatherData = getWeatherData()

    function getWeatherData() {
        var data = { type: null, weatherIcon: null, day: null, date: null, temperature: { max: null, min: null }, rain: null, wind: null, sun: { up: null, down: null }, reliability: null }
        var day1 = { type: null, weatherIcon: "rain", day: "Today", date: "2 nov", temperature: { max: 7, min: 5 }, rain: 1.2, wind: 1, sun: { up: "07.30", down: "16.12" }, reliability: "Reliable" }
        var day2 = { type: null, weatherIcon: "thunder", day: "Tomorrow", date: "3 nov", temperature: { max: 8, min: 6 }, rain: 8.2, wind: 3, sun: { up: "07.32", down: "16.09" }, reliability: "Reliable" }
        var day3 = { type: null, weatherIcon: "cloud", day: "Wednesday", date: "4 nov", temperature: { max: 7, min: 4 }, rain: 0, wind: 1, sun: { up: "07.35", down: "16.07" }, reliability: "Unreliable" }
        var day4 = { type: null, weatherIcon: "cloud-sun", day: "Thursday", date: "5 nov", temperature: { max: 5, min: 3 }, rain: 0, wind: 3, sun: { up: "07.37", down: "16.04" }, reliability: "Unreliable" }
        var day5 = { type: null, weatherIcon: "sun", day: "Friday", date: "6 nov", temperature: { max: 5, min: 3 }, rain: 0, wind: 3, sun: { up: "07.40", down: "16.02" }, reliability: "Unreliable" }
        return [day1, day2, day3, day4, day5]
    }

    function getForecastData() {
        var data = []
        for (var e of forecast) {
            data.push(e)
        }

        return data
    }

    return (
        <div className="weather-table">
            <div className="header-wrapper">
                <h1>{ort.name}</h1>
                <span>Country: {ort.country}, </span>
                <span>Geodata: {"temp, ort.geodata"}, </span>
                <span>Postal code: {ort.postalcode}</span>
                <div>Description: {ort.about}</div>
                <div className="climate-code-container">
                    <div className="climate-code-color" style={{ backgroundColor: climateCode.color }}></div>
                    {climateCode.code} - {climateCode.name}
                </div>
            </div>
            <div className="weather-days-container">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Temperature</th>
                            <th>Rain</th>
                            <th>Wind</th>
                            <th>Sun times<br></br> up / down</th>
                            <th>Reability</th>
                        </tr>
                    </thead>
                    <tbody>
                        <WeatherTableBody data={weatherData} forecast={forecast}></WeatherTableBody>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
