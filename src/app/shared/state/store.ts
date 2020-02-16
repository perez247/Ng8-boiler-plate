import { combineReducers } from 'redux';
import { authUserReducer, AUTH_USER_INITIAL_STATE, IAuthUserAppState } from './auth-user-state/auth-user-store';
import { appStructurerReducer, APP_STRUCTURE_INITIAL_STATE, IStructureAppState } from './structure-state/structure-user-store';

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
    appStructure: IStructureAppState;
}

/**
 * @description the initial state when the application starts
 */
export const INITIAL_STATE: IAppState = {
    authUser: AUTH_USER_INITIAL_STATE,
    appStructure: APP_STRUCTURE_INITIAL_STATE
}

/**
 * @description the reducer that gets the commands to perform actions
 */
export const rootReducer = combineReducers({
    authUser: authUserReducer,
    appStructure: appStructurerReducer,
});

