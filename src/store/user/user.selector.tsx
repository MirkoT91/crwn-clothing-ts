import { UserState } from './user.reducers';

import { createSelector } from 'reselect';

export const selectUserReducer = (state): UserState => state.user;

export const selectCurrentUser = createSelector(
    selectUserReducer,
    (user) => user.currentUser);