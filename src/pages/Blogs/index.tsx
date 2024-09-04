import BlogGrid from "components/Blogs/BlogGrid";
import { Box, Flex, Text } from "@chakra-ui/react";
import PageHeroSection from "components/Regular/PageHeroSection";
import { useBlogs } from "features/blog/hooks";
import { useEffect } from "react";
import { goToPageTop } from "utils/misc";

const BlogMainBody = () => {
    const limit = 20;
    const offset = 0;
    const { totalCount, blogs, loading, fetchBlogs } = useBlogs();

    useEffect(() => {
        goToPageTop();
        fetchBlogs({
            limit: limit,
            offset: offset,
        });
    }, [fetchBlogs]);

    // const visibleBlogs =
    //     blogs.length >= limit
    //         ? blogs.slice(offset, limit)
    //         : blogs.slice(offset, totalCount);

    return (
        <>
            <PageHeroSection
                pageTitle="Blogs"
                breadcrumbs={[{ title: "Home", to: "/" }]}
            />
            <Flex direction={{ base: "column", sm: "row" }}>
                <Text fontSize="14px" paddingY="12px">
                    {`Showing 1-${blogs.length} of ${totalCount} results`.toUpperCase()}
                </Text>
            </Flex>
            <BlogGrid
                blogs={blogs}
                loading={loading}
                onLoadMore={() =>
                    fetchBlogs({
                        limit: limit,
                        offset: blogs.length,
                    })
                }
                hasMore={blogs.length < totalCount}
            />
            <Box marginY="32px" />
        </>
    );
};

export default BlogMainBody;
