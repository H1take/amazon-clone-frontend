import { bindActionCreators } from "redux";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
}