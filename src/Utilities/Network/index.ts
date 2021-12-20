import { BASE_URL } from "./config";

export const GetRequest = async (url: string) => {
    try {
        const response = await fetch(`${BASE_URL}${url}`);
        const result = await response.json();
        return result;
    } catch (e) {
        console.log(e);
        return null;
    }
};
export const GetLocalhostData = (key: string) => {
    try {
        const response = localStorage.getItem(key);
        return response;
    } catch (e) {
        console.log(e);
        return null;
    }
};
