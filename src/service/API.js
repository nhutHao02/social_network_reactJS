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
        },
    },
    AUTH: {
        SIGN_UP: {
            method: 'POST',
            url: `${BASE_URL}/auth/sign-up`,
            requiresToken: false,
            responseType: 'json'
        },
        LOGIN: {
            method: 'POST',
            url: `${BASE_URL}/auth/log-in`,
            requiresToken: false,
            responseType: 'json'
        }
    },
    NOTIFICATION: {
        GET_NOTIFICATIONS: {
            method: 'GET',
            url: ({userID, page = 0, limit = 12}) => `${BASE_URL}/notification/get/${userID}?page=${page}&limit=${limit}`,
            requiresToken: true,
            responseType: 'json'
        }
    }
}
export default ENDPOINTS