import { cloneDeep, isArray } from 'lodash';
import { all, takeLatest, put, fork, call, select } from 'redux-saga/effects';
import { request } from 'strapi-helper-plugin';
import { GET_DOC_INFOS, ON_CONFIRM_DELETE_DOC, ON_UPDATE_DOC, ON_SUBMIT } from './constants';
import { getDocInfosSucceeded, setFormErrors } from './actions';
import { makeSelectVersionToDelete, makeSelectPrefix, makeSelectForm } from './selectors';
import getTrad from '../../utils/getTrad';

/* eslint-disable consistent-return */

function* getData() {
  try {
    const response = yield call(request, '/documentation/getInfos', {
      method: 'GET',
    });
    yield put(getDocInfosSucceeded(response));
  } catch (err) {
    strapi.notification.toggle({
      type: 'warning',
      message: { id: 'notification.error' },
    });
  }
}

function* deleteDoc() {
  try {
    const prefix = yield select(makeSelectPrefix());
    const version = yield select(makeSelectVersionToDelete());
    const url = `${prefix}/deleteDoc/${version}`;
    const response = yield call(request, url, { method: 'DELETE' });

    if (response.ok) {
      yield call(getData);
      strapi.notification.toggle({
        type: 'info',
        message: { id: getTrad('notification.delete.success') },
      });
    }
  } catch (err) {
    strapi.notification.toggle({
      type: 'warning',
      message: err.response.payload.message,
    });
  }
}

function* submit() {
  try {
    const form = yield select(makeSelectForm());
    const prefix = yield select(makeSelectPrefix());
    const createBody = (data, init = {}) => {
      return data.reduce((acc, current) => {
        if (isArray(current)) {
          return createBody(current, acc);
        }

        acc[current.name] = current.value;

        return acc;
      }, init);
    };
    const body = createBody(cloneDeep(form));

    if (body.restrictedAccess && body.password === '') {
      return yield put(
        setFormErrors({
          password: [{ id: 'components.Input.error.validation.required' }],
        })
      );
    }

    yield call(request, `${prefix}/updateSettings`, { method: 'PUT', body });
    yield put(setFormErrors({}));

    strapi.notification.toggle({
      type: 'success',
      message: { id: getTrad('notification.update.success') },
    });
  } catch (err) {
    strapi.notification.toggle({
      type: 'warning',
      message: err.response.payload.message,
    });
  }
}

function* updateDoc(action) {
  try {
    const body = { version: action.version };
    const prefix = yield select(makeSelectPrefix());
    const response = yield call(request, `${prefix}/regenerateDoc`, {
      method: 'POST',
      body,
    });

    if (response.ok) {
      yield call(getData);
      strapi.notification.toggle({
        type: 'info',
        message: { id: getTrad('notification.generate.success') },
      });
    }
  } catch (err) {
    strapi.notification.toggle({
      type: 'warning',
      message: err.response.payload.message,
    });
  }
}

// Individual exports for testing
export function* defaultSaga() {
  try {
    yield all([
      fork(takeLatest, GET_DOC_INFOS, getData),
      fork(takeLatest, ON_CONFIRM_DELETE_DOC, deleteDoc),
      fork(takeLatest, ON_SUBMIT, submit),
      fork(takeLatest, ON_UPDATE_DOC, updateDoc),
    ]);
  } catch (err) {
    // Do nothing
  }
}

// All sagas to be loaded
export default defaultSaga;
