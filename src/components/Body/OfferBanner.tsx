import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { FaPaw } from "react-icons/fa";
import CButton from "../Regular/CButton";

const OfferBanner = () => {
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
                <CButton textColor="coral" bg="white">
                    Meow Meow
                </CButton>
            </Flex>
        </Box>
    );
};

export default OfferBanner;
