import { Box, Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import CButton from "../../components/Regular/CButton";
import catImage from "../../assets/cat-in-banner.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/products");
    };

    return (
        <Grid
            templateAreas={{ base: `"left" "right"`, lg: `"left right"` }}
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            w="100%"
        >
            <GridItem area="left" marginTop={{ base: "20px", lg: "120px" }}>
                <VStack spacing={4} align="flex-start">
                    <Text fontSize="6xl" fontWeight="bold">
                        Our shop is what your cat wants!
                    </Text>
                    <Text fontSize="lg" fontWeight="bold">
                        {/* 1% of your purchase goes to feeding stray animals */}
                        1% of your purchases will go to feed stray animals
                    </Text>
                    <Text fontSize="sm">
                        So what are you waiting for? Get quality products for
                        your furry friend along with helping the poor souls.
                    </Text>
                    <CButton onClick={handleClick}>
                        {`Explore Now`.toUpperCase()}
                    </CButton>
                </VStack>
            </GridItem>
            <GridItem
                area="right"
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="relative"
                marginTop={{
                    base: "170px",
                    sm: "180px",
                    md: "240px",
                    lg: "300px",
                }}
                marginBottom={{
                    base: "170px",
                    sm: "180px",
                    md: "240px",
                    lg: "300px",
                }}
            >
                <Image
                    src={catImage}
                    position="absolute"
                    zIndex="1"
                    boxSize={{
                        base: "350px",
                        sm: "400px",
                        md: "470px",
                        lg: "500px",
                    }}
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
                        w={{
                            base: "280px",
                            sm: "340px",
                            md: "450px",
                            lg: "520px",
                        }}
                        h={{
                            base: "280px",
                            sm: "340px",
                            md: "450px",
                            lg: "520px",
                        }}
                        bg="black"
                        opacity="0.1"
                        borderRadius="50%"
                        position="absolute"
                    />
                    <Box
                        w={{
                            base: "240px",
                            sm: "290px",
                            md: "390px",
                            lg: "450px",
                        }}
                        h={{
                            base: "240px",
                            sm: "290px",
                            md: "390px",
                            lg: "450px",
                        }}
                        bg="black"
                        opacity="0.1"
                        borderRadius="50%"
                        position="absolute"
                    />
                    <Box
                        w={{
                            base: "200px",
                            sm: "230px",
                            md: "330px",
                            lg: "380px",
                        }}
                        h={{
                            base: "200px",
                            sm: "250px",
                            md: "330px",
                            lg: "380px",
                        }}
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
