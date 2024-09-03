import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { FaPaw } from "react-icons/fa";
import CButton from "../../components/Regular/CButton";
import { useNavigate } from "react-router-dom";
import { THEME_COLORS } from "misc/constants";

const OfferBanner = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/products");
    };

    return (
        <Box bg={THEME_COLORS.secondary} borderRadius={2}>
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
                        This website is under development
                    </Text>
                    <Text color="white" fontSize="lg" textAlign="center">
                        Please confirm anything here through Call/WhatsApp
                    </Text>
                </VStack>
                <CButton
                    onClick={handleClick}
                    textColor={THEME_COLORS.secondary}
                    bg="white"
                >
                    Meow Meow
                </CButton>
            </Flex>
        </Box>
    );
};

export default OfferBanner;
