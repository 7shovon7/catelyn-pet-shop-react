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
import { Product } from "features/product/types";
import { THEME_COLORS } from "misc/constants";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch } from "store";
import { truncateTitle } from "utils/misc";

interface Props {
    product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleAddToCart = () => {
        const cartItem = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            categories:
                product.categories.length > 1
                    ? `${product.categories[0].title} & ${
                          product.categories.length - 1
                      } more`
                    : product.categories[0]?.title || null,
            quantity: 1,
        };
        dispatch(addToCart(cartItem));
    };

    // const isStockOut =
    //     product.custom_stock_out_signal === true ||
    //     product.available_stock === 0;

    const isStockOut = product.custom_stock_out_signal === true;

    const productBodyInCard = (
        <VStack spacing={2} paddingBottom={4} paddingX={4}>
            <Image
                src={product.image}
                fit="contain"
                height="250px"
                filter={isStockOut ? "grayscale(100%)" : "none"}
            />
            <Text fontSize={16} fontWeight="bold" textAlign="center">
                {truncateTitle(product.title, 50)}
            </Text>
        </VStack>
    );

    return (
        <Card
            minHeight="300px"
            position="relative"
            marginX={{ base: 4, sm: 0 }}
        >
            <Link to={`/products/${product.id}`}>{productBodyInCard}</Link>
            <Box position="absolute" top={2} left={2} textAlign="right">
                {product.categories.map((category) => (
                    <Badge
                        key={category.id}
                        color={THEME_COLORS.secondary}
                        colorScheme="white"
                        padding={1}
                        borderRadius="sm"
                        display="inline-block"
                        fontSize="xx-small"
                        mb={1}
                    >
                        {category.title.toUpperCase()}
                    </Badge>
                ))}
            </Box>
            {isStockOut && (
                <Box position="absolute" top={0} right={-4} textAlign={"right"}>
                    <Badge color={THEME_COLORS.danger}>
                        <Text>Stock Out</Text>
                    </Badge>
                </Box>
            )}
            {!isStockOut && (
                <Box position="absolute" top={-4} right={-4} textAlign="right">
                    <Badge
                        color={THEME_COLORS.secondary}
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
            )}
        </Card>
    );
};

export default ProductCard;
