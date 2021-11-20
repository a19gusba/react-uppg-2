function WeatherDay({ data }) {
    /* console.log(data) */


    function getForecastImage(FNAME) {
        if (FNAME == "Partly cloudy")
            return "cloud-sun"
        else if (FNAME == "Rain Showers")
            return "rain"
        else if (FNAME == "Cloudy")
            return "cloud"
    }

    return (
        <tr className="weather-day-container">
            <td className="weather-type">
                <div className="flex">
                    <img src={"images/" + getForecastImage(data.forecast.FNAME) + ".png"} alt="" className="weather-icon" />
                    <div>
                        <div className="current-day bold">{/* data.day */}</div>
                        <div className="current-date">{/* data.date */}</div>
                    </div>
                </div>
            </td>
            <td className="weather-temperature">
                <div className="flex">
                    <img src="" alt="" className="temperature-icon" />
                    <div>
                        <div className="max-temperature bold">{data.forecast.TVALUE}°</div>
                    </div>
                </div>
            </td>
            <td className="weather-rain">
                <div className="flex">
                    <img src="" alt="" className="rain-icon" />
                    <div className="bold">{data.forecast.RVALUE} {data.forecast.RUNIT}</div>
                </div>
            </td>
            <td className="weather-wind">
                <div className="flex">
                    <img src="" alt="" className="wind-icon" />
                    <div className="bold">{data.forecast.MPS} m/s</div>
                </div>
            </td>
            <td className="weather-sun">
                <div className="flex">
                    <img src="" alt="" className="sun-icon" />
                    <div>
                        <div className="sun-up bold">{/* data.sun.up */}</div>
                        <div className="sun-down">{/* data.sun.down */}</div>
                    </div>
                </div>
            </td>
            <td className="weather-reliability">
                <div className="flex">
                    <div className="reliability">{/* data.reliability */}</div>
                </div>
            </td>
        </tr>
    )
}
