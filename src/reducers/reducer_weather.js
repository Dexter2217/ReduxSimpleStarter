import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            //This is the same as an array concat
            return [action.payload.data, ...state]; // [city, city, city] Not [city, [city, city]]
    }
    return state;
}
