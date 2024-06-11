import {
    Box,
    Divider,
    Flex,
    HStack,
    Icon,
    Link,
    Text,
    VStack,
} from "@chakra-ui/react";
import { COMPANY_DATA, THEME_COLORS } from "misc/constants";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdAlternateEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import { logout } from "features/auth/authSlice";

const Footer = () => {
    const { categories, status, error } = useSelector(
        (state: RootState) => state.category
    );

    const { user } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    const contacts = [
        {
            type: "phone",
            value: COMPANY_DATA.phoneDisplay,
            link: `tel:${COMPANY_DATA.phoneClean}`,
            icon: MdPhone,
        },
        {
            type: "email",
            value: COMPANY_DATA.email,
            link: `mailto:${COMPANY_DATA.email}`,
            icon: MdAlternateEmail,
        },
        {
            type: "address",
            value: COMPANY_DATA.address,
            link: COMPANY_DATA.map,
            icon: MdLocationOn,
        },
    ];

    const socialIcons = [
        { icon: MdAlternateEmail, link: `mailto:${COMPANY_DATA.email}` },
        {
            icon: FaFacebook,
            link: COMPANY_DATA.social.fb.url,
        },
        {
            icon: FaInstagram,
            link: COMPANY_DATA.social.insta.url,
        },
    ];

    const isLoggedIn = () => {
        return !!user;
    };

    return (
        <Box
            bg={THEME_COLORS.primary}
            paddingX={8}
            paddingY={12}
            bottom={0}
            as="footer"
        >
            <Flex
                direction={{ base: "column", sm: "row" }}
                justifyContent="space-around"
                gap={8}
            >
                <VStack>
                    <Text color={THEME_COLORS.secondary} fontWeight="bold">
                        Categories
                    </Text>
                    {status === "loading" ? (
                        <Text color="white">Loading...</Text>
                    ) : error ? (
                        <Text color="red.500">{error}</Text>
                    ) : (
                        categories.map((category) => (
                            <RouterLink
                                key={category.id}
                                to={`/products?category=${category.id}`}
                            >
                                <Text color="white">{category.title}</Text>
                            </RouterLink>
                        ))
                    )}
                </VStack>
                <VStack>
                    <Text color={THEME_COLORS.secondary} fontWeight="bold">
                        Account
                    </Text>
                    {!isLoggedIn() ? (
                        <>
                            <RouterLink to="/login">
                                <Text color="white">Login</Text>
                            </RouterLink>
                            <RouterLink to="/signup">
                                <Text color="white">Register</Text>
                            </RouterLink>
                        </>
                    ) : (
                        <Text
                            color="white"
                            cursor="pointer"
                            onClick={handleLogout}
                        >
                            Logout
                        </Text>
                    )}
                    <RouterLink to="/checkout">
                        <Text color="white">Cart</Text>
                    </RouterLink>
                    <RouterLink to="/checkout">
                        <Text color="white">Orders</Text>
                    </RouterLink>
                </VStack>
                <VStack>
                    <Text color={THEME_COLORS.secondary} fontWeight="bold">
                        Contacts
                    </Text>
                    {contacts.map((contact, index) => (
                        <HStack
                            key={index}
                            as={Link}
                            href={contact.link}
                            color="white"
                            isExternal
                            spacing={2}
                        >
                            <Icon as={contact.icon} />
                            <Text>{contact.value}</Text>
                        </HStack>
                    ))}
                </VStack>
            </Flex>
            <Divider marginY={4} />
            <HStack justifyContent="center" spacing={{ base: 4, sm: 12 }}>
                {socialIcons.map((social, index) => (
                    <Link key={index} href={social.link} isExternal>
                        <Icon
                            as={social.icon}
                            color={THEME_COLORS.secondary}
                            width="50px"
                            height="50px"
                        />
                    </Link>
                ))}
            </HStack>
            <Divider marginY={4} />
            <Text textAlign="center" fontSize={16} color="white">
                Copyright © {new Date().getFullYear()} Catelyn Pet Shop
            </Text>
        </Box>
    );
};

export default Footer;
