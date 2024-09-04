import SectionHeader from "../SectionHeader";
import BlogGrid from "../../../components/Blogs/BlogGrid";
import { useBlogs } from "features/blog/hooks";
import { useEffect } from "react";

const AllBlogs = () => {
    const { blogs, loading, totalCount, fetchBlogs } = useBlogs();
    const offset = 0;
    const limit = 10;

    useEffect(() => {
        fetchBlogs({ limit, offset });
    }, [fetchBlogs]);

    const visibleBlogs =
        blogs.length >= limit
            ? blogs.slice(offset, limit)
            : blogs.slice(offset, totalCount);

    return (
        <>
            <SectionHeader title="Pet Blogs" to="/blogs" />
            <BlogGrid
                blogs={visibleBlogs}
                loading={loading}
                onLoadMore={() => fetchBlogs({ limit, offset: offset })}
                hasMore={false}
            />
        </>
    );
};

export default AllBlogs;
