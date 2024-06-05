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
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdAlternateEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
    const categories = ["Cat Food", "Cat Litter", "Health & Grooming", "Toy"];
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
                    {categories.map((category) => (
                        <Text color="white">{category}</Text>
                    ))}
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
