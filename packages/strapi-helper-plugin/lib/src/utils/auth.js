import { isEmpty } from 'lodash';

const TOKEN_KEY = 'jwtToken';
const USER_INFO = 'userInfo';

const parse = JSON.parse;
const stringify = JSON.stringify;

const auth = {
  clear(key) {
    if (localStorage && localStorage.getItem(key)) {
      return localStorage.removeItem(key);
    }

    if (sessionStorage && sessionStorage.getItem(key)) {
      return sessionStorage.removeItem(key);
    }

    return null;
  },

  clearAppStorage() {
    if (localStorage) {
      const videos = auth.get('videos');
      const onboarding = auth.get('onboarding');
      const strapiUpdateNotification = auth.get('STRAPI_UPDATE_NOTIF');
      const localeLang = localStorage.getItem('strapi-admin-language');

      localStorage.clear();

      localStorage.setItem('videos', JSON.stringify(videos));
      localStorage.setItem('onboarding', onboarding);
      localStorage.setItem('STRAPI_UPDATE_NOTIF', strapiUpdateNotification);
      localStorage.setItem('strapi-admin-language', localeLang);
    }

    if (sessionStorage) {
      sessionStorage.clear();
    }
  },

  clearToken(tokenKey = TOKEN_KEY) {
    return auth.clear(tokenKey);
  },

  clearUserInfo(userInfo = USER_INFO) {
    return auth.clear(userInfo);
  },

  get(key) {
    if (localStorage && localStorage.getItem(key)) {
      return parse(localStorage.getItem(key)) || null;
    }

    if (sessionStorage && sessionStorage.getItem(key)) {
      return parse(sessionStorage.getItem(key)) || null;
    }

    return null;
  },

  getToken(tokenKey = TOKEN_KEY) {
    return auth.get(tokenKey);
  },

  getUserInfo(userInfo = USER_INFO) {
    return auth.get(userInfo);
  },

  set(value, key, isLocalStorage) {
    if (isEmpty(value)) {
      return null;
    }

    if (isLocalStorage && localStorage) {
      return localStorage.setItem(key, stringify(value));
    }

    if (sessionStorage) {
      return sessionStorage.setItem(key, stringify(value));
    }

    return null;
  },

  setToken(value = '', isLocalStorage = false, tokenKey = TOKEN_KEY) {
    return auth.set(value, tokenKey, isLocalStorage);
  },

  setUserInfo(value = '', isLocalStorage = false, userInfo = USER_INFO) {
    return auth.set(value, userInfo, isLocalStorage);
  },

  updateToken(value = '') {
    const isLocalStorage = localStorage && localStorage.getItem(TOKEN_KEY);

    return auth.setToken(value, isLocalStorage);
  },
};

export default auth;
