import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import Logo from "./components/Header/Logo";
import NavMenu from "./components/Header/NavMenu";
import Cart from "./components/Header/Cart";
import MainBody from "./pages/Home";

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
                // bgImage={pawPattern}
                // bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
                backgroundColor="#17383E"
                backgroundBlendMode="overlay"
                display="flex"
                flexDirection="row"
                w="100%"
                h={81}
            >
                <Grid
                    templateAreas={{
                        base: `"logo nav"`,
                        lg: `"logo nav account"`,
                    }}
                    templateColumns={{
                        base: "250px 1fr",
                        md: "350px 1fr",
                        lg: "450px 1fr 1fr",
                    }}
                    alignItems="center"
                    paddingX={{
                        base: "12px",
                        sm: "20px",
                        md: "28px",
                        lg: "36px",
                        xl: "40",
                        "2xl": "60",
                    }}
                    w="100%"
                >
                    <GridItem area="logo">
                        <Logo />
                    </GridItem>
                    <GridItem
                        area="nav"
                        display="flex"
                        justifyContent={{
                            base: "flex-end",
                            xl: "center",
                        }}
                    >
                        <NavMenu />
                    </GridItem>
                    <Show above="lg">
                        <GridItem
                            area="account"
                            display="flex"
                            justifyContent="flex-end"
                        >
                            <Cart />
                        </GridItem>
                    </Show>
                </Grid>
            </Box>
            <GridItem
                area="main"
                paddingX={{
                    base: "12px",
                    sm: "20px",
                    md: "28px",
                    lg: "36px",
                    xl: "40",
                    "2xl": "60",
                }}
            >
                <MainBody />
            </GridItem>
        </Grid>
    );
}

export default App;
