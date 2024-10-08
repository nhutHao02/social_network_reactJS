const BASE_URL = "http://localhost:8080/api/v1";

const ENDPOINTS = {
    TWEETS: {
        GET_TWEETS: {
            method: 'GET',
            url: ({page = 0, limit = 10}) => `${BASE_URL}/tweet/tweets?page=${page}&limit=${limit}`,
            requiresToken: true,
            responseType: 'json'
        },
        POST_TWEET: {
            method: 'POST',
            url: `${BASE_URL}/users`,
            requiresToken: true,
            responseType: 'json'
        }
       
    }
}
export default ENDPOINTS