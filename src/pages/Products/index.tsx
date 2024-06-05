import { useState } from "react";
import ProductGrid, {
    ProductResponseUI,
} from "../../components/Products/ProductGrid";
import { Box, Flex, Text } from "@chakra-ui/react";
import PageHeroSection from "components/Regular/PageHeroSection";

const ProductMainBody = () => {
    const limit = 10;
    const [count, setCount] = useState<number | null>(null);
    const [resultsLength, setResultsLength] = useState<number>(0);

    const handdleDataFetched = ({
        count,
        resultsLength,
    }: ProductResponseUI) => {
        setCount(count);
        setResultsLength(resultsLength);
    };

    return (
        <>
            <PageHeroSection
                pageTitle="Products"
                breadcrumbs={[{ title: "Home", to: "/" }]}
            />
            <Flex direction={{ base: "column", sm: "row" }}>
                <Text fontSize="14px" paddingY="12px">
                    {`Showing 1-${resultsLength} of ${count} results`.toUpperCase()}
                </Text>
            </Flex>
            <ProductGrid
                limit={limit}
                onDataFetched={handdleDataFetched}
                pagination={true}
            />
            <Box marginY="32px" />
        </>
    );
};

export default ProductMainBody;
