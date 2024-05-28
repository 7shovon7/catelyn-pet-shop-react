import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../../../components/Regular/ProductCard";
import toysIcon from "../../../assets/categories/cat-toy.png";
import SectionHeader from "../SectionHeader";

const AllProducts = () => {
    return (
        <>
            <SectionHeader title="FURRIES BEST CHOICE" />
            <SimpleGrid
                columns={{ base: 1, sm: 2, md: 3, lg: 4, "2xl": 5 }}
                spacing={8}
                marginY={4}
            >
                <ProductCard
                    title="Cat Tree Tower"
                    imageSrc={toysIcon}
                    price={14.0}
                    category="Misc"
                />
                <ProductCard
                    title="Cat Tree Tower"
                    imageSrc={toysIcon}
                    price={14.0}
                    category="Misc"
                />
                <ProductCard
                    title="Cat Tree Tower"
                    imageSrc={toysIcon}
                    price={14.0}
                    category="Misc"
                />
                <ProductCard
                    title="Cat Tree Tower"
                    imageSrc={toysIcon}
                    price={14.0}
                    category="Misc"
                />
            </SimpleGrid>
        </>
    );
};

export default AllProducts;
