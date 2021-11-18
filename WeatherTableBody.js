
//import { v4 as uuidv4 } from 'uuid';

function WeatherTableBody({ data, forecast }) {
    var i = 0
    return (
        data.map(data => {
            i++
            return <WeatherDay key={1/* uuidv4() */} data={data} forecast={forecast[i - 1]}></WeatherDay>
        })
    )
}
