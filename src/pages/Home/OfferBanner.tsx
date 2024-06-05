import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { FaPaw } from "react-icons/fa";
import CButton from "../../components/Regular/CButton";
import { useNavigate } from "react-router-dom";

const OfferBanner = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/products");
    };

    return (
        <Box bg="coral" borderRadius={2}>
            <Flex
                direction={{ base: "column", md: "row" }}
                justifyContent="space-between"
                alignItems="center"
                gap={4}
                paddingX={12}
                paddingY={12}
            >
                <FaPaw color="white" size="52px" />
                <VStack>
                    <Text
                        fontSize="2xl"
                        color="white"
                        fontWeight="bold"
                        textAlign="center"
                    >
                        Get 10% OFF on your first order!
                    </Text>
                    <Text color="white" fontSize="lg" textAlign="center">
                        Free delivery all over Dhaka!
                    </Text>
                </VStack>
                <CButton onClick={handleClick} textColor="coral" bg="white">
                    Meow Meow
                </CButton>
            </Flex>
        </Box>
    );
};

export default OfferBanner;
