import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import { getCategories } from "../slices/category";
import { useEffect } from "react";

export const useCategories = () => {
    const dispatch: AppDispatch = useDispatch();

    const { initiated, categories, loading, error } = useSelector(
        (state: RootState) => state.category
    );

    // const fetchCategories = () => {
    //     dispatch(getCategories());
    // };

    useEffect(() => {
        dispatch(getCategories());
    }, [initiated, dispatch]);

    return { categories, loading, error };
};
