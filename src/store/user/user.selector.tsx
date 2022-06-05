import { UserState } from './user.reducers';

import { createSelector } from 'reselect';
import { RootState } from '../store';

export const selectUserReducer = (state:RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
    selectUserReducer,
    (user) => user.currentUser);