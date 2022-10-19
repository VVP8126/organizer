import { IUser } from "../../../models/IUser";
import { AuthAction, AuthActionEnum, AuthState } from "./types/types";

const initialState: AuthState = {
    isAuthorized: false,
    user: {} as IUser,
    isLoading: false,
    error: ""
}

export default function authReducer(state = initialState, action:AuthAction):AuthState {
  switch (action.type) {
    case AuthActionEnum.SET_AUTH:
      return { ...state, isAuthorized:action.payload };
    case AuthActionEnum.SET_ERROR:
      return { ...state, error:action.payload };
    case AuthActionEnum.SET_IS_LOADING:
      return { ...state, isLoading:action.payload };
    case AuthActionEnum.SET_USER:
      return { ...state, user:action.payload };
    default:
      return state;
  }
}
