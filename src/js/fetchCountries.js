const URL_BASE = 'https://restcountries.com/v3.1/';

export function fetchCountries(name) {
    return fetch(`${URL_BASE}name/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
}