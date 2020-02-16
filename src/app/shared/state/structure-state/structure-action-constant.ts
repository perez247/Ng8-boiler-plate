
/**
 * @description Interface the reppresent all the actions used to manipulate the state (data) of the structure
 * of the application
 */
export interface IAuthUserActionConstant {

  // Sider -------------------------------------------------------------------------------------------------------------
  /**
   * @description Open the sidebar menu
   */
  OPEN_SIDEBAR: string;

  /**
   * @description Close the sidebar menu
   */
  CLOSE_SIDEBAR: string;


}

/**
 * @description the implementation of the IAuthUserActionConstant
 */
export const AppStructureActionConstant: IAuthUserActionConstant = {
  OPEN_SIDEBAR: 'OPEN_SIDEBAR',
  CLOSE_SIDEBAR: 'CLOSE_SIDEBAR',
};

