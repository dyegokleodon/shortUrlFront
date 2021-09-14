export function createShortUrlRequest(url) {
  return {
    type: '@user/CREATE_SHORTURL_REQUEST',
    payload: { url },
  };
}

export function createShortUrlSuccess(urlUpdated) {
  return {
    type: '@user/UPDATE_URL_SUCCESS',
    payload: urlUpdated,
  };
}

export function createShortUrlFailure() {
  return {
    type: '@user/URL_FAILURE',

  };
}
