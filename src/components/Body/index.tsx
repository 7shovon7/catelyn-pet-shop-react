import { Box, Text } from "@chakra-ui/react";
import HeroSection from "./HeroSection";

const MainBody = () => {
    return (
        <>
            <HeroSection />
            <Box display="flex" justifyItems="center" justifyContent="center">
                <Text fontSize="6xl">We're coming soon...</Text>
            </Box>
        </>
    );
};

export default MainBody;
