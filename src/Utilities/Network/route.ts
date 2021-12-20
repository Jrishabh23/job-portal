import { GetLocalhostData, GetRequest } from ".";
import { APPLICANTS_URL } from "./config";

export const getApplicant = async () => {
    const response = await GetRequest(APPLICANTS_URL);

    return !response || !(response instanceof Array) ? [] : response;
};

// GetLocalhostData;
export const getLocalhostValue = (key: string) => {
    const response = GetLocalhostData(key);
    return response?.split(",") || [];
};
