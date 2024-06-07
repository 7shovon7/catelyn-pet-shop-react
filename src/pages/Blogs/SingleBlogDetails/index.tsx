// src/pages/Blogs/SingleBlogDetails/index.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Text } from "@chakra-ui/react";
import { BlogPost } from "components/Blogs/BlogGrid";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ChakraMarkdownRenderers from "utils/markdownRenderers";
import PageHeroSection from "components/Regular/PageHeroSection";
import { checkAndGetCompleteUrl, getCompleteUrl } from "utils/misc";

const SingleBlogDetails: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [blog, setBlog] = useState<BlogPost | null>(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(
                    getCompleteUrl(`/blog/posts/${slug}/`)
                );
                setBlog(response.data);
                console.log(response.data.content);
            } catch (error) {
                console.error("Error fetching blog post:", error);
            }
        };

        fetchBlog();
    }, [slug]);

    if (!blog) return <Text>Loading...</Text>;

    const imageRegex = /!\[.*?\]\((.*?)\)/g;
    const matches = [...blog.content.matchAll(imageRegex)];
    matches.forEach((el) => {
        // console.log(checkAndGetCompleteUrl(el[1]));
        blog.content = blog.content.replace(
            el[1],
            checkAndGetCompleteUrl(el[1])
        );
    });

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
                {/* {imageUrl && <Image src={imageUrl} alt={blog.title} />} */}
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
