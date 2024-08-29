import { Text, SimpleGrid, VStack } from "@chakra-ui/react";
import { useCategories } from "features/product/hooks/useCategories";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";

const CategoryCards: React.FC = () => {
    const { categories, loading } = useCategories();

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
                    <Link
                        key={category.id}
                        to={`/products?categories=${category.id}`}
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
