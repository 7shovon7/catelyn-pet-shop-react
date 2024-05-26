import { Box, Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import CButton from "../Regular/CButton";
import catImage from "../../assets/cat-in-banner.png";

const HeroSection = () => {
    return (
        <Grid
            templateAreas={{ base: `"left" "right"`, lg: `"left right"` }}
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            paddingX={10}
            w="100%"
        >
            <GridItem area="left" marginTop={{ base: "20px", lg: "120px" }}>
                <VStack spacing={4} align="flex-start" p={4}>
                    <Text fontSize="6xl" fontWeight="bold">
                        Our shop is what your pet wants!
                    </Text>
                    <Text fontSize="lg" fontWeight="bold">
                        1% of your purchase goes to feeding stray animals
                    </Text>
                    <Text fontSize="sm">
                        So what are you waiting for? Get quality products for
                        your furry friend along with helping the poor souls.
                    </Text>
                    <CButton>Explore Now</CButton>
                </VStack>
            </GridItem>
            <GridItem
                area="right"
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="relative"
                marginTop={{ base: "200px", lg: "120px" }}
            >
                <Image
                    src={catImage}
                    position="absolute"
                    zIndex="1"
                    boxSize="500px"
                    objectFit="cover"
                    paddingBottom="100px"
                />
                <Box
                    position="relative"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box
                        w={{ base: "400px", md: "450px", lg: "520px" }}
                        h={{ base: "400px", md: "450px", lg: "520px" }}
                        bg="black"
                        opacity="0.1"
                        borderRadius="50%"
                        position="absolute"
                    />
                    <Box
                        w={{ base: "340px", md: "390px", lg: "450px" }}
                        h={{ base: "340px", md: "390px", lg: "450px" }}
                        bg="black"
                        opacity="0.1"
                        borderRadius="50%"
                        position="absolute"
                    />
                    <Box
                        w={{ base: "280px", md: "330px", lg: "380px" }}
                        h={{ base: "280px", md: "330px", lg: "380px" }}
                        bg="black"
                        opacity="0.1"
                        borderRadius="50%"
                        position="absolute"
                    />
                </Box>
            </GridItem>
        </Grid>
    );
};

export default HeroSection;
