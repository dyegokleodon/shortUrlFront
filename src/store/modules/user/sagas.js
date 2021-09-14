import {
  takeLatest, call, all,
} from 'redux-saga/effects/';

import { toast } from 'react-toastify';

import api from '../../../services/api';

export function* createShortUrl({ payload }) {
  try {
    const { url } = payload;

    yield call(api.post, 'urls', url);

    toast.success('Url Encurtada com sucesso');
  } catch (err) {
    toast.error('Erro ao encurtar URL');
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@user/CREATE_SHORTURL_REQUEST', createShortUrl),
]);
