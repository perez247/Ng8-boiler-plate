

/**
 * @description Errors sent back from the server
 */
export interface IServerError {
  error: string;
  errors: {};
  stackTrace: string[];
}
