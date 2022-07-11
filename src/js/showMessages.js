import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function showMessageCountryIsAbsent () {
    new Error(Notify.failure('Oops, there is no country with that name'));
}

export function showMessageNeedMoreDetails() {
    Notify.info('Too many matches found. Please enter a more specific name.')
}