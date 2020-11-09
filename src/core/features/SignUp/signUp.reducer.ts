import { SignUpState } from "./signUp.state";
import { AuthActions } from "./signUp.actions";

export interface UserInterface {
  [index: string]: { value: string; id: number };
}

const initialState: SignUpState = { users: [], lastId: 1 };

const reducer = (
  state = initialState,
  action: { type: string; payload: {} }
): SignUpState => {
  switch (action.type) {
    case AuthActions.SAVE_USER:
      const { users } = state;
      users.push({ ...action.payload });

      return {
        lastId: state.lastId + 1,
        users: [...users]
      };
    default:
      return state;
  }
};

export default reducer;
