import Cookies from 'js-cookie';

export function saveToken(token) {
    Cookies.set("token", token);
}

export function getToken() {
    return Cookies.get("token");
}

export function removeToken() {
    Cookies.remove("token");
}