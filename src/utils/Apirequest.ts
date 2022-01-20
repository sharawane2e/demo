async function ApiRequest(url:string) {

    const response = await fetch(url);
    const userData = await response.json();
    return userData;
}

export default ApiRequest;