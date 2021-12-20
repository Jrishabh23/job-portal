const baseURL =
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json";
const HttpRequest = async () => {
    const response = await fetch(baseURL);
    const result = await response.json();
    return result;
};

export default HttpRequest;
