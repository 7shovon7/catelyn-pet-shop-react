// src/pages/Products/SingleProductDetails/index.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import PageHeroSection from "components/Regular/PageHeroSection";
import { Product } from "components/Products/ProductGrid";
import { getCompleteUrl } from "utils/misc";
import CButton from "components/Regular/CButton";

const SingleProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(
                    getCompleteUrl(`/product/list/${id}/`)
                );
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) return <Text>Loading...</Text>;

    return (
        <>
            <PageHeroSection
                pageTitle={product.title}
                breadcrumbs={[
                    { title: "Home", to: "/" },
                    { title: "Products", to: "/products" },
                ]}
            />
            <Flex justify="center" align="center" pb={8}>
                <Box>
                    <Text mb={8}>
                        Added on:{" "}
                        {new Date(product.created_at).toLocaleDateString()}
                    </Text>
                    {product.image && (
                        <Image src={product.image} alt={product.title} />
                    )}
                    <Text fontSize="2xl" fontWeight="bold" mb={2}>
                        {product.title}
                    </Text>
                    <Text fontSize="lg" color="gray.700" mb={4}>
                        ${product.price.toFixed(2)}
                    </Text>
                    <Text mb={8}>{product.description}</Text>
                    <CButton>Add to Cart</CButton>
                </Box>
            </Flex>
        </>
    );
};

export default SingleProductDetails;
