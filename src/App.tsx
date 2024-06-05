// src/App.tsx
import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logo from "./components/Header/Logo";
import NavMenu from "./components/Header/NavMenu";
import Cart from "./components/Header/Cart";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import SingleBlogDetails from "./pages/Blogs/SingleBlogDetails";
import { THEME_COLORS } from "misc/constants";

const App: React.FC = () => {
    return (
        <Router>
            <Box display="flex" flexDirection="column" minHeight="100vh">
                <Grid
                    templateAreas={{
                        base: `"header header" "main main" "footer footer"`,
                        lg: `"header header header" "main main main" "footer footer footer"`,
                    }}
                    templateColumns={{ base: "1fr 1fr", lg: "1fr 1fr 1fr" }}
                    templateRows={{ base: "auto auto", lg: "auto auto" }}
                    flex="1"
                >
                    <Box
                        gridArea="header"
                        bgSize="cover"
                        bgPosition="center"
                        backgroundColor={THEME_COLORS.primary}
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
                        flex="1"
                    >
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/blogs" element={<Blogs />} />
                            <Route
                                path="/blogs/:slug"
                                element={<SingleBlogDetails />}
                            />
                        </Routes>
                    </GridItem>
                </Grid>
                <Box mt="auto">
                    <Footer />
                </Box>
            </Box>
        </Router>
    );
};

export default App;
