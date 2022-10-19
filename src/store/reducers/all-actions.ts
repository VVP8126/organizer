import { EventActionCreators } from "./event/action-creators/action-creators";
import { AuthorizationActionCreators } from "./auth/action-creators/action-creators";

export const allActions = {
    ...AuthorizationActionCreators,
    ...EventActionCreators,
}
