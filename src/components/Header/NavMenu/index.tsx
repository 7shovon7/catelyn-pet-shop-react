import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    HStack,
    IconButton,
    VStack,
    useDisclosure,
} from "@chakra-ui/react";
import NavItems from "./NavItems";
import { CiMenuFries } from "react-icons/ci";
import Cart from "../Cart";
import { ReactNode } from "react";

const NavMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const simpleNavMenu: ReactNode = (
        <>
            <NavItems text="Home" to="/" />
            <NavItems text="Products" to="/products" />
            <NavItems text="Blog" to="/" />
            <NavItems text="About Us" to="/" />
        </>
    );

    return (
        <>
            {/* For larger screens */}
            <HStack display={{ base: "none", md: "none", lg: "flex" }}>
                {simpleNavMenu}
            </HStack>

            {/* Hamburger menu for smaller screens */}
            <IconButton
                aria-label="Open Menu"
                icon={<CiMenuFries />}
                // marginRight={10}
                display={{ base: "flex", md: "flex", lg: "none" }}
                onClick={onOpen}
            />

            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton zIndex={100} />
                    <DrawerBody>
                        <VStack align="stretch" paddingTop={10}>
                            <Cart />
                            {simpleNavMenu}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default NavMenu;
