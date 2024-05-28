import { Text, SimpleGrid, VStack } from "@chakra-ui/react";
import CategoryCard from "./CategoryCard";
import petFoodIcon from "../../../assets/categories/pet-food.png";
import litterBoxIcon from "../../../assets/categories/litter-box.png";
import healthAndGroomingIcon from "../../../assets/categories/veterinary.png";
import toysIcon from "../../../assets/categories/cat-toy.png";

const CategoryCards = () => {
    return (
        <>
            <VStack justifyItems="center" paddingY="36px">
                <Text fontSize="4xl" fontWeight="bold">
                    Categories
                </Text>
                <Text>
                    Your cat deserves the bests!! From food to ball, we have it
                    all!!! Explore our collection of best Cat Supplies at
                    Unbeatable Prices!
                </Text>
            </VStack>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
                <CategoryCard imageSrc={petFoodIcon} title="Food" />
                <CategoryCard imageSrc={litterBoxIcon} title="Litter" />
                <CategoryCard
                    imageSrc={healthAndGroomingIcon}
                    title="Health & Grooming"
                />
                <CategoryCard imageSrc={toysIcon} title="Toys" />
            </SimpleGrid>
        </>
    );
};

export default CategoryCards;
