import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import countryInfo from './templates/country-info.hbs';
import listCountries from './templates/list-countries.hbs';
import { showMessageNeedMoreDetails, showMessageCountryIsAbsent } from './js/showMessages';


const DEBOUNCE_DELAY = 300;
let name = null;

const searchBoxEl = document.querySelector('#search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

searchBoxEl.addEventListener('input', debounce(onSearchBoxInput, DEBOUNCE_DELAY));

function onSearchBoxInput(e) {
    name = (e.target.value).trim();

    if (name === "") {
        clearEL();
        return;
    } else {
    fetchCountries(name)
        .then(data => {
            console.log(data);

            if (data.length > 10) {
                clearEL();

                showMessageNeedMoreDetails();

            } else if (data.length >= 2 && data.length <= 10) {
                const listC = listCountries(data);

                countryListEl.innerHTML = listC;

            } else if (data.length === 1) {
                const infoC = countryInfo(data[0]);

                countryInfoEl.innerHTML = infoC;            };
        })
        .catch(err => {
            console.log(err);
            
            clearEL();

            showMessageCountryIsAbsent();
        });
    }
}

function clearEL() {
        countryListEl.innerHTML = "";
        countryInfoEl.innerHTML = "";
}







