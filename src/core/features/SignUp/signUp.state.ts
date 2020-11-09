export interface SignUpState {
  users: {
    [index: string]: {
      value: string;
      id: number;
    };
  }[];
  lastId: number;
}
