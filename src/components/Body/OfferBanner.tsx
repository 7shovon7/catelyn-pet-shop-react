import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { FaPaw } from "react-icons/fa";
import CButton from "../Regular/CButton";

const OfferBanner = () => {
    return (
        <Box bg="coral" borderRadius={2}>
            <HStack
                justifyContent="space-between"
                alignItems="center"
                paddingX={12}
                paddingY={12}
            >
                <FaPaw color="white" size="46px" />
                <VStack>
                    <Text fontSize="2xl" color="white" fontWeight="bold">
                        Get 10% OFF on your first order!
                    </Text>
                    <Text color="white" fontSize="lg">
                        Free delivery all over Dhaka!
                    </Text>
                </VStack>
                <CButton textColor="coral" bg="white">
                    Meow Meow
                </CButton>
            </HStack>
        </Box>
    );
};

export default OfferBanner;
