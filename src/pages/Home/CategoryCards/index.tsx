// src/pages/Categories/CategoryCards.tsx
import { useEffect, useState } from "react";
import { Text, SimpleGrid, VStack } from "@chakra-ui/react";
import axios from "axios";
import CategoryCard from "./CategoryCard";
import { Category } from "misc/types/index";
import { getCompleteUrl } from "utils/misc";

const CategoryCards: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(
                    getCompleteUrl("/product/categories/")
                );
                setCategories(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching categories:", error);
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    return (
        <>
            <VStack justifyItems="center" paddingY="36px">
                <Text fontSize="4xl" fontWeight="bold">
                    Categories
                </Text>
                <Text textAlign="justify">
                    Your cat deserves the bests!! From food to ball, we have it
                    all!!! Explore our collection of best Cat Supplies at
                    Unbeatable Prices!
                </Text>
            </VStack>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4}>
                {categories.map((category) => (
                    <CategoryCard
                        key={category.id}
                        imageSrc={category.image}
                        title={category.title}
                    />
                ))}
            </SimpleGrid>
        </>
    );
};

export default CategoryCards;
