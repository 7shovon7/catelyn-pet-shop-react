import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import { BlogAPIParameters } from "./types";
import { getBlogs } from "./slice";

export const useBlogs = () => {
    const dispatch: AppDispatch = useDispatch();
    const { blogs, totalCount, loading } = useSelector(
        (state: RootState) => state.blog
    );

    const fetchBlogs = useCallback(
        (params: BlogAPIParameters) => {
            const { limit, offset } = params;
            const totalFetched = blogs.length;

            if (loading) {
                return;
            } else if (
                (totalFetched > 0 &&
                    totalFetched >= totalCount &&
                    totalCount > 0) ||
                totalFetched >= offset + limit
            ) {
                return;
            } else {
                dispatch(getBlogs(params));
            }
        },
        [dispatch, blogs, totalCount]
    );

    return { blogs, loading, totalCount, fetchBlogs };
};
