import { all, call } from 'typed-redux-saga/macro';
// @ts-ignore
import { categoriesSaga } from './categories/category.saga.tsx';
// @ts-ignore
import { userSagas } from './user/user.saga.tsx';

export function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSagas)]);
}