import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { bindActionCreators } from "redux";
import { allActions } from "../store/reducers/all-actions";

export const useActions = () => {
    const dispatch = useDispatch<AppDispatch>();
    return bindActionCreators(allActions, dispatch);
}
