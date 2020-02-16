import { tassign } from 'tassign';
import { AppStructureActionConstant } from './structure-action-constant';

/**
 * @description All the state/data related to the strucutre of the application
 */
export interface IStructureAppState {
  /**
   * @description state representing if the side bar is opened or not
   */
  sidebarOpened: boolean;
}

/**
 * @description implementation of IStructureAppState
 */
export const APP_STRUCTURE_INITIAL_STATE: IStructureAppState = {
  sidebarOpened: false,
}


/**
 * @description this is just a fancy way of executing different actions related to the state/data of the astructure of the application
 */
class AppStructureActions {

  constructor(private state: IStructureAppState, private action: any) {}

  /**
   * @description action to open side bar
   * @returns {IStructureAppState} IStructureAppState
   */
  openSidebar() {

    return tassign(this.state, { sidebarOpened: true});
  }

  /**
   * @description action to close side bar
   * @returns {IStructureAppState} IStructureAppState
   */
  closeSidebar() {
    return tassign(this.state, { sidebarOpened: false});
  }
}

/**
 * @description The redux action that is being called to perform all the actions mentioned above
 * @param state The state/data to manipulate
 * @param action The type of action to use to manipulate the state/data
 */
export function appStructurerReducer(state: IStructureAppState  = APP_STRUCTURE_INITIAL_STATE, action): IStructureAppState  {

  const obj = new AppStructureActions(state, action);

  switch (action.type) {
      case AppStructureActionConstant.CLOSE_SIDEBAR: return obj.closeSidebar();
      case AppStructureActionConstant.OPEN_SIDEBAR: return obj.openSidebar();
      default: return state;
  }

}

