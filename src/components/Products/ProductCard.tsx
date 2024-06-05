import {
    Badge,
    Box,
    Card,
    IconButton,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";
import { THEME_COLORS } from "misc/constants";
import { FaPlus } from "react-icons/fa";

interface Props {
    title: string;
    imageSrc: string;
    price: number;
    category: string;
}

const ProductCard = ({ title, imageSrc, price, category }: Props) => {
    return (
        <Card minHeight="300px" position="relative">
            <VStack spacing={2} paddingBottom={4} paddingX={4}>
                <Image src={imageSrc} fit="contain" height="250px" />
                <Text fontSize={16} fontWeight="bold" textAlign="center">
                    {title}
                </Text>
            </VStack>
            <Box position="absolute" top={2} left={2} textAlign="right">
                {/* <Badge
                    color={THEME_COLORS.secondary}
                    // variant="solid"
                    verticalAlign="middle"
                    padding={2}
                    borderRadius="md"
                    display="inline-block"
                    fontSize="md"
                    mb={1}
                > */}
                <Text fontWeight="bold" fontSize="sm">
                    {category.toUpperCase()}
                </Text>
                {/* </Badge> */}
            </Box>
            <Box position="absolute" top={0} right={-4} textAlign="right">
                <Badge
                    color={THEME_COLORS.secondary}
                    // variant="solid"
                    verticalAlign="middle"
                    padding={2}
                    borderRadius="md"
                    display="inline-block"
                    fontSize="md"
                    mb={1}
                >
                    <VStack>
                        <Text>৳{price}</Text>
                        <IconButton
                            aria-label="Add to cart"
                            icon={<FaPlus />}
                            color={THEME_COLORS.secondary}
                            variant="solid"
                            size="sm"
                        />
                    </VStack>
                </Badge>
            </Box>
        </Card>
    );
};

export default ProductCard;
