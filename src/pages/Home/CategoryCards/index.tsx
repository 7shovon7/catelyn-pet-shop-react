// src/pages/Categories/CategoryCards.tsx
import { Text, SimpleGrid, VStack } from "@chakra-ui/react";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "store";

const CategoryCards: React.FC = () => {
    const { categories, status } = useSelector(
        (state: RootState) => state.category
    );

    if (status === "loading") {
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
                    <Link
                        key={category.id}
                        to={`/products?category=${category.id}`}
                    >
                        <CategoryCard
                            imageSrc={category.image}
                            title={category.title}
                        />
                    </Link>
                ))}
            </SimpleGrid>
        </>
    );
};

export default CategoryCards;
