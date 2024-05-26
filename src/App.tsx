import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
    return (
        <Grid
            templateAreas={{
                base: `"logo nav" "main main"`,
                lg: `"logo nav account" "main main main"`,
            }}
        >
            <GridItem area="logo" bg="coral">
                Logo
            </GridItem>
            <GridItem area="nav" bg="green">
                Nav
                {/* <Show below="lg">
                    <GridItem area="account" bg="blue">
                        Cart
                    </GridItem>
                </Show> */}
            </GridItem>
            <Show above="lg">
                <GridItem area="account" bg="blue">
                    Cart
                </GridItem>
            </Show>
            <GridItem area="main" bg="dodgerblue">
                Main
            </GridItem>
        </Grid>
    );
}

export default App;
