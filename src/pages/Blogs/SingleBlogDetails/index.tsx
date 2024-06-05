// src/pages/Blogs/SingleBlogDetails/index.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Text, Image } from "@chakra-ui/react";
import { BlogPost } from "components/Blogs/BlogGrid";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ChakraMarkdownRenderers from "utils/markdownRenderers";
import PageHeroSection from "components/Regular/PageHeroSection";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

const SingleBlogDetails: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [blog, setBlog] = useState<BlogPost | null>(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(
                    `${BASE_API_URL}/blog/posts/${slug}/`
                );
                setBlog(response.data);
            } catch (error) {
                console.error("Error fetching blog post:", error);
            }
        };

        fetchBlog();
    }, [slug]);

    if (!blog) return <Text>Loading...</Text>;

    const imageUrlMatch = blog.content.match(/!\[\]\((.*?)\)/);
    const imageUrl = imageUrlMatch
        ? `${BASE_API_URL}${imageUrlMatch[1]}`
        : null;

    return (
        <>
            <PageHeroSection
                pageTitle={blog.title}
                breadcrumbs={[
                    { title: "Home", to: "/" },
                    { title: "Blogs", to: "/blogs" },
                ]}
            />
            <Box>
                <Text mb={8}>
                    Posted on: {new Date(blog.created_at).toLocaleDateString()}
                </Text>
                {imageUrl && <Image src={imageUrl} alt={blog.title} />}
                <Box mb={8}>
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={ChakraMarkdownRenderers}
                    >
                        {blog.content}
                    </ReactMarkdown>
                </Box>
            </Box>
        </>
    );
};

export default SingleBlogDetails;
