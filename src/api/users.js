//polyfill that ensures that this will work in browsers that dont have fetch support natively
//polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it
import 'whatwg-fetch';
import getBaseUrl from "./baseUrl";


const baseUrl = getBaseUrl();

//public function
export function getUsers() {
  return get('users');
}

export function deleteUser(id){
    return del(`users/${id}`)
}

//private functions
function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url) {
    const request = new Request(baseUrl + url, {
        method: 'DELETE'
    })
    return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); //eslint-disable-line no-console
}
