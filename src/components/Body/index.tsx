import { Box, Text } from "@chakra-ui/react";
import HeroSection from "./HeroSection";
import OfferBanner from "./OfferBanner";
import CategoryCards from "./CategoryCards";

const MainBody = () => {
    return (
        <>
            <HeroSection />
            <OfferBanner />
            <CategoryCards />
            <Box
                display="flex"
                justifyItems="center"
                justifyContent="center"
                paddingY="16px"
            >
                <Text fontSize="2xl">Exciting stuffs are coming...</Text>
            </Box>
        </>
    );
};

export default MainBody;
