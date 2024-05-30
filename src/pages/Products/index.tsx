import { useState } from "react";
import ProductGrid, {
    ProductResponseUI,
} from "../../components/Products/ProductGrid";
import ProductHero from "./ProductHero";
import { Box, Flex, Text } from "@chakra-ui/react";

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
            <ProductHero />
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
