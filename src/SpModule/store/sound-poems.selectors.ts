import { useSelector } from "react-redux"
import { SpState } from "./sound-poems.reducers";

export const SpSelectors = () => {
    const SelectCurrentSearchResults = useSelector((state: SpState) => state.currentSearchResults);
    const SelectSearchLoading = useSelector((state: SpState) => state.searchLoading);
}
