import { Store, createStore } from "redux";
import reducer from "./reducers";

const configureStore: () => Store = () => {
  const store: Store = createStore(reducer);

  return store;
};

export default configureStore;
