import { Flex, HStack, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const index = () => {
    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            paddingY="32px"
        >
            <Text fontSize="6xl" fontWeight="bold">
                Products
            </Text>
            <HStack>
                <Link as={RouterLink} to="/" color="coral">
                    {`Home`.toUpperCase()}
                </Link>
                <Text> &gt; </Text>
                <Text>{`Products`.toUpperCase()}</Text>
            </HStack>
        </Flex>
    );
};

export default index;
