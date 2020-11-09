export enum AuthActions {
  // state
  SAVE_USER = "[Sign up] save user"
}

export const saveUser = (action: {}): { type: string; payload: {} } => {
  return { type: AuthActions.SAVE_USER, payload: action };
};
