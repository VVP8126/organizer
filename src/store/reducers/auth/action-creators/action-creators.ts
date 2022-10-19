import { AppDispatch } from "../../..";
import { IUser } from "../../../../models/IUser";
import { AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "../types/types";
import axios from "axios";

export const AuthorizationActionCreators = {
    setUser: (user:IUser):
        SetUserAction => ({ type:AuthActionEnum.SET_USER, payload:user }),
    setIsAuthorized: (isAuthorized:boolean):
        SetAuthAction => ({ type:AuthActionEnum.SET_AUTH, payload:isAuthorized }),
    setIsLoading: (isLoading:boolean):
        SetIsLoadingAction => ({ type:AuthActionEnum.SET_IS_LOADING, payload:isLoading }),
    setError: (error: string):
        SetErrorAction => ({ type:AuthActionEnum.SET_ERROR, payload:error}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
            try {
                dispatch(AuthorizationActionCreators.setIsLoading(true));
                dispatch(AuthorizationActionCreators.setError(""));
                setTimeout(async () => {
                    const mockUsers = await axios.get<IUser[]>("./users.json");
                    const mockUser = mockUsers.data.find(user => user.username === username && user.password === password);
                    if(mockUser) {
                        localStorage.setItem("auth", "true");
                        localStorage.setItem("username", mockUser.username);
                        dispatch(AuthorizationActionCreators.setUser(mockUser));
                        dispatch(AuthorizationActionCreators.setIsAuthorized(true));
                    } else {
                        dispatch(AuthorizationActionCreators.setError("User or password not correct"));
                    }
                }, 1000);
            } catch (error) {
                console.log("Error while login: " + error);
                dispatch(AuthorizationActionCreators.setError("Error while login: " + error));
            } finally {
                dispatch(AuthorizationActionCreators.setIsLoading(false));
            }
       },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem("auth");
        localStorage.removeItem("username");
        dispatch(AuthorizationActionCreators.setIsAuthorized(false));
        dispatch(AuthorizationActionCreators.setUser({} as IUser));
    }
}
