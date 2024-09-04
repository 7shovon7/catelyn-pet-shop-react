import { Flex, SimpleGrid } from "@chakra-ui/react";
import BlogCard from "./BlogCard";
import CButton from "components/Regular/CButton";
import blogPlaceHolderImage from "assets/blog/blog_img.webp";
import { Link } from "react-router-dom";
import { checkAndGetCompleteUrl, extractFirstImageUrl } from "utils/misc";
import { BlogPost } from "features/blog/types";

interface BlogGridProps {
    blogs: BlogPost[];
    loading: boolean;
    onLoadMore: () => void;
    hasMore: boolean;
}

const BlogGrid: React.FC<BlogGridProps> = ({
    blogs,
    loading,
    onLoadMore,
    hasMore,
}: BlogGridProps) => {
    return (
        <>
            <SimpleGrid
                columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
                spacing={8}
                marginY={4}
            >
                {blogs?.map((blog) => {
                    const imageUrlMatch = extractFirstImageUrl(blog.content);
                    const imageUrl =
                        blog.featured_image !== null
                            ? checkAndGetCompleteUrl(blog.featured_image)
                            : imageUrlMatch
                            ? imageUrlMatch
                            : blogPlaceHolderImage;
                    return (
                        <Link key={blog.id} to={`/blogs/${blog.slug}`}>
                            <BlogCard
                                title={blog.title}
                                imageSrc={imageUrl}
                                postedAt={new Date(
                                    blog.created_at
                                ).toLocaleDateString()}
                            />
                        </Link>
                    );
                })}
            </SimpleGrid>
            {hasMore && (
                <Flex justifyContent="center" marginTop="32px">
                    <CButton onClick={onLoadMore} disabled={loading}>
                        {loading ? "Loading..." : "Load More"}
                    </CButton>
                </Flex>
            )}
        </>
    );
};

export default BlogGrid;
