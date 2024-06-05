import { Flex, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import CButton from "../Regular/CButton";
import blogPlaceHolderImage from "assets/blog/blog_img.webp";
import { Link } from "react-router-dom";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    content: string;
    created_at: string;
    updated_at: string;
}

export interface BlogPostResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: BlogPost[];
}

export interface BlogPostResponseUI {
    count: number;
    resultsLength: number;
}

interface AllBlogsProps {
    limit?: number;
    onDataFetched?: (data: BlogPostResponseUI) => void;
    pagination?: boolean;
}

const BlogGrid: React.FC<AllBlogsProps> = ({
    limit = 10,
    onDataFetched,
    pagination = false,
}: AllBlogsProps) => {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [page, setPage] = useState<number>(1);
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const offset = pagination ? (page - 1) * limit : 0;
                const response = await axios.get(
                    `${BASE_API_URL}/blog/posts/?limit=${limit}&offset=${offset}`
                );
                const data: BlogPostResponse = response.data;
                console.log(data);
                setBlogs(data.results);
                setCount(data.count);
                if (onDataFetched) {
                    onDataFetched({
                        count: data.count,
                        resultsLength: data.results.length,
                    });
                }
            } catch (error) {
                console.error("Error fetching blog posts:", error);
            }
        };

        fetchBlogs();
    }, [limit, page, onDataFetched, pagination]);

    const totalPages = count ? Math.ceil(count / limit) : 1;

    const handlePreviousPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    return (
        <>
            <SimpleGrid
                columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
                spacing={8}
                marginY={4}
            >
                {blogs.map((blog) => {
                    const imageUrlMatch = blog.content.match(/!\[\]\((.*?)\)/);
                    console.log(imageUrlMatch);
                    const imageUrl = imageUrlMatch
                        ? `${BASE_API_URL}${imageUrlMatch[1]}`
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
            {pagination && (
                <Flex justifyContent="center" marginTop="32px">
                    <HStack spacing={4}>
                        <CButton
                            onClick={handlePreviousPage}
                            disabled={page === 1}
                        >
                            Previous
                        </CButton>
                        <Text>{page}</Text>
                        <CButton
                            onClick={handleNextPage}
                            disabled={page === totalPages}
                        >
                            Next
                        </CButton>
                    </HStack>
                </Flex>
            )}
        </>
    );
};

export default BlogGrid;
