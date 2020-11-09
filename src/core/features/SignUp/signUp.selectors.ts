import { AppState } from "../../store/store";
import { UserInterface } from "./signUp.reducer";

export const getUsers = ({
  signUpReducer: { users }
}: AppState): UserInterface[] => users;

export const getUserById = (
  { signUpReducer: { users } }: AppState,
  id: number
): {} => users.filter(user => Number(user.id) === id)[0];

export const getLastId = ({ signUpReducer: { lastId } }: AppState): number =>
  lastId;
