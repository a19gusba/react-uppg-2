
//import { v4 as uuidv4 } from 'uuid';

function WeatherTableBody({ data }) {
    return (
        data.map(data => {
            return <WeatherDay key={1/* uuidv4() */} data={data}></WeatherDay>
        })
    )
}
