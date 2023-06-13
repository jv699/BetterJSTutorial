//probably will not work, as i am not using parcel
import greeting, { SEARCH_URL as SEARCH, SEARCH_QUERY } from './consts.json';

(async () => {
    console.log(greeting);
    try {
        const API_URL = `${SEARCH}${SEARCH_QUERY}`;

        const res = await fetch(API_URL);
        const data = await res.json();
        
        console.log(data);
    } catch (e) {
        console.error(e.message);
    }
}) (); 