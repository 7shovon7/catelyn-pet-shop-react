import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import Logo from "./components/Logo";
import pawPattern from "./assets/paw-pattern.svg";

function App() {
    return (
        <Grid
            templateAreas={{
                base: `"header header" "main main"`,
                lg: `"header header header" "main main main"`,
            }}
            templateColumns={{ base: "1fr 1fr", lg: "1fr 1fr 1fr" }}
            templateRows={{ base: "auto auto", lg: "auto auto" }}
            // gap={4}
            // p={4}
        >
            <Box
                gridArea="header"
                bgImage={pawPattern}
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
                backgroundColor="#17383E"
                backgroundBlendMode="overlay"
                display="flex"
                flexDirection={{ base: "column", lg: "row" }}
                w="100%"
                h={81}
            >
                <Grid
                    templateAreas={{
                        base: `"logo nav"`,
                        lg: `"logo nav account"`,
                    }}
                    templateColumns={{
                        base: "350px 1fr",
                        md: "350px 1fr 1fr",
                        lg: "450px 1fr 1fr",
                    }}
                    alignItems="center"
                    w="100%"
                >
                    <GridItem area="logo">
                        <Logo />
                    </GridItem>
                    <GridItem area="nav" display="flex" justifyContent="center">
                        Nav
                    </GridItem>
                    <Show above="lg">
                        <GridItem
                            area="account"
                            display="flex"
                            justifyContent="flex-end"
                        >
                            Cart
                        </GridItem>
                    </Show>
                </Grid>
            </Box>
            <GridItem area="main" bg="dodgerblue">
                Main
            </GridItem>
        </Grid>
    );
}

export default App;
