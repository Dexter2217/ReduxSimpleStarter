import axios from 'axios';

const API_KEY = '83616cc108ce56211ca0f748eb905ede';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

//An action creator
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}, us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
