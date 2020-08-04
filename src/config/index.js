const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
? 'http://localhost:3080'
: 'https://sailflix.herokuapp.com';

export default {
URL_BACKEND_TOP,
};
