import {
    Badge,
    Box,
    Card,
    IconButton,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";
import { addToCart } from "components/Order/cartSlice";
import { THEME_COLORS } from "misc/constants";
import { Product } from "misc/types";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store";

// interface Props {
//     title: string;
//     imageSrc: string;
//     price: number;
//     category: string;
// }

interface Props {
    product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleAddToCart = () => {
        const cartItem = {
            ...product,
            quantity: 1,
        };
        dispatch(addToCart(cartItem));
    };
    return (
        <Card minHeight="300px" position="relative">
            <VStack spacing={2} paddingBottom={4} paddingX={4}>
                <Image src={product.image} fit="contain" height="250px" />
                <Text fontSize={16} fontWeight="bold" textAlign="center">
                    {product.title}
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
                    {product.category && product.category.toUpperCase()}
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
                        <Text>৳{product.price}</Text>
                        <IconButton
                            aria-label="Add to cart"
                            icon={<FaPlus />}
                            color={THEME_COLORS.secondary}
                            variant="solid"
                            size="sm"
                            onClick={handleAddToCart}
                        />
                    </VStack>
                </Badge>
            </Box>
        </Card>
    );
};

export default ProductCard;
