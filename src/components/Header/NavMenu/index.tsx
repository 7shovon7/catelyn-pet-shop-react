import { HStack } from "@chakra-ui/react";
import NavItems from "./NavItems";

const NavMenu = () => {
    return (
        <HStack>
            <NavItems text="Home" />
            <NavItems text="Products" />
            <NavItems text="Blog" />
            <NavItems text="About Us" />
        </HStack>
    );
};

export default NavMenu;
