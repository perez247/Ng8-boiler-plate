import { combineReducers } from 'redux';
import { Location } from '@angular/common';
import { NgRedux } from '@angular-redux/store';
import { IAuthUserAppState, AUTH_USER_INITIAL_STATE, authUserReducer } from './auth-user-state/auth-user-store';

// Kindly ignore this for now
// Its simply getting the services without performing dependency Injection
// There was no other way at the moment
// export const AppInjector = {
//     location: {} as Location,
//     redux: {} as NgRedux<IAppState>
// }

/**
 * @description the has the whole state of the application
 */
export interface IAppState {
    authUser: IAuthUserAppState;
}

/**
 * @description the initial state when the application starts
 */
export const INITIAL_STATE: IAppState = {
    authUser: AUTH_USER_INITIAL_STATE,
}

/**
 * @description the reducer that gets the commands to perform actions
 */
export const rootReducer = combineReducers({
    authUser: authUserReducer
});

