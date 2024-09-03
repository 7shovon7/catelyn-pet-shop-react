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
import { MdEmail, MdLocationOn, MdPhone, MdWhatsapp } from "react-icons/md";
import { useCategories } from "features/product/hooks/useCategories";
import { useAuth } from "features/auth/hooks";
import { goToPageTop } from "utils/misc";

const Footer = () => {
    const { categories, loading, error } = useCategories();
    const { isAuthenticated, logoutUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser();
        navigate("/");
        goToPageTop();
    };

    const contacts = [
        {
            type: "phone",
            value: COMPANY_DATA.phoneDisplay,
            link: `tel:${COMPANY_DATA.phoneClean}`,
            icon: MdPhone,
        },
        // {
        //     type: "email",
        //     value: COMPANY_DATA.email,
        //     link: `mailto:${COMPANY_DATA.email}`,
        //     icon: MdAlternateEmail,
        // },
        {
            type: "whatsapp",
            value: COMPANY_DATA.social.whatsApp.title,
            link: COMPANY_DATA.social.whatsApp.url,
            icon: MdWhatsapp,
        },
    ];

    const socialIcons = [
        { icon: MdEmail, link: `mailto:${COMPANY_DATA.email}` },
        {
            icon: MdWhatsapp,
            link: COMPANY_DATA.social.whatsApp.url,
        },
        {
            icon: FaFacebook,
            link: COMPANY_DATA.social.fb.url,
        },
        {
            icon: FaInstagram,
            link: COMPANY_DATA.social.insta.url,
        },
    ];

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
                    {loading ? (
                        <Text color="white">Loading...</Text>
                    ) : error ? (
                        <Text color="red.500">{error}</Text>
                    ) : (
                        categories.map((category) => (
                            <RouterLink
                                key={category.id}
                                to={`/products?categories=${category.id}`}
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
                    {!isAuthenticated ? (
                        <>
                            <RouterLink to="/login" onClick={goToPageTop}>
                                <Text color="white">Login</Text>
                            </RouterLink>
                            <RouterLink to="/signup" onClick={goToPageTop}>
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
                    <RouterLink to="/orders">
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
                    {COMPANY_DATA.locations.map((location, index) => (
                        <HStack
                            key={index}
                            as={Link}
                            href={location.map}
                            color="white"
                            isExternal
                            spacing={2}
                        >
                            <Icon as={MdLocationOn} />
                            <Text>{location.address}</Text>
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
                Developed by{" "}
                <Text as="span" color={THEME_COLORS.secondary}>
                    {COMPANY_DATA.name} Team
                </Text>
            </Text>
        </Box>
    );
};

export default Footer;
