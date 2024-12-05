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
        GET_BOOKMARK_TWEETS: {
            method: 'GET',
            url: ({userID, page = 0, limit = 10}) => `${BASE_URL}/tweet-saved/get-saved-tweet/${userID}?page=${page}&limit=${limit}`,
            requiresToken: true,
            responseType: 'json'
        },
        GET_TWEETS_BY_USERID: {
            method: 'GET',
            url: ({userID, page = 0, limit = 10}) => `${BASE_URL}/tweet/tweets/${userID}?page=${page}&limit=${limit}`,
            requiresToken: true,
            responseType: 'json'
        },
        GET_REPOST_TWEETS_BY_USERID: {
            method: 'GET',
            url: ({userID, page = 0, limit = 10}) => `${BASE_URL}/tweet-repost/get-repost-tweet/${userID}?page=${page}&limit=${limit}`,
            requiresToken: true,
            responseType: 'json'
        },
        GET_LOVE_TWEETS_BY_USERID: {
            method: 'GET',
            url: ({userID, page = 0, limit = 10}) => `${BASE_URL}/tweet-love/get-tweet-loved/${userID}?page=${page}&limit=${limit}`,
            requiresToken: true,
            responseType: 'json'
        },
        LOVE_TWEET_BY_USERID: {
            method: 'POST',
            url:  ({userName, tweetID}) => `${BASE_URL}/tweet-love/love?userName=${userName}&tweetId=${tweetID}`,
            requiresToken: true,
            responseType: 'json'
        },
        UNLOVE_TWEET_BY_USERID: {
            method: 'DELETE',
            url:  ({userName, tweetID}) => `${BASE_URL}/tweet-love/delete-tweet-loved?userName=${userName}&tweetId=${tweetID}`,
            requiresToken: true,
            responseType: 'json'
        },
       IS_LOVE_TWEET: {
            method: 'GET',
            url:  ({userName, tweetID}) => `${BASE_URL}/tweet-love/is-loved-tweet?userName=${userName}&tweetId=${tweetID}`,
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