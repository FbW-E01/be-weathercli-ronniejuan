import axios from "axios"
import process from 'process'

const location = process.argv[2]

const API_KEY= "fcaf518515f8dd2cf37171b77df00fb2"


const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`

axios
    .get(url)
    .then(result => {
        const weather = result.data.weather[0].description
        console.log(`It is now ${result.data.main.temp} in ${result.data.name}, ${result.data.sys.country}`)
        console.log(`The current weather conditions are: ${weather}`)
        //console.log(result.data)
    })
    .catch(error => console.log(error))
