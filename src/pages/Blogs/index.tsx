import { useState } from "react";
import BlogGrid, { BlogPostResponseUI } from "../../components/Blogs/BlogGrid";
import { Box, Flex, Text } from "@chakra-ui/react";
import PageHeroSection from "components/Regular/PageHeroSection";

const BlogMainBody = () => {
    const limit = 10;
    const [count, setCount] = useState<number | null>(null);
    const [resultsLength, setResultsLength] = useState<number>(0);

    const handdleDataFetched = ({
        count,
        resultsLength,
    }: BlogPostResponseUI) => {
        setCount(count);
        setResultsLength(resultsLength);
    };

    return (
        <>
            <PageHeroSection
                pageTitle="Blogs"
                breadcrumbs={[{ title: "Home", to: "/" }]}
            />
            <Flex direction={{ base: "column", sm: "row" }}>
                <Text fontSize="14px" paddingY="12px">
                    {`Showing 1-${resultsLength} of ${count} results`.toUpperCase()}
                </Text>
            </Flex>
            <BlogGrid
                limit={limit}
                onDataFetched={handdleDataFetched}
                pagination={true}
            />
            <Box marginY="32px" />
        </>
    );
};

export default BlogMainBody;
