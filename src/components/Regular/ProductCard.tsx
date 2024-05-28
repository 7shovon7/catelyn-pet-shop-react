import { Card, Image, Text, VStack } from "@chakra-ui/react";
import CButton from "./CButton";

interface Props {
    title: string;
    imageSrc: string;
    price: number;
    category: string;
}

const ProductCard = ({ title, imageSrc, price, category }: Props) => {
    return (
        <Card paddingY={4}>
            <VStack spacing={2}>
                <Image src={imageSrc} boxSize="100px" />
                <Text fontSize={16} fontWeight="bold">
                    {title}
                </Text>
                <Text color="coral" letterSpacing={1.5}>
                    ${price}
                </Text>
                <Text color="grey" fontSize={12}>
                    {category.toUpperCase()}
                </Text>
                <CButton>Add to cart</CButton>
            </VStack>
        </Card>
    );
};

export default ProductCard;
