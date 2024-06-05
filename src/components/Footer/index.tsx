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
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdAlternateEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
    const categories = ["Cat Food", "Cat Litter", "Health & Grooming", "Toy"];
    const contacts = [
        {
            type: "phone",
            value: "01800-072-072",
            link: "tel:01800072072",
            icon: MdPhone,
        },
        {
            type: "email",
            value: "catelynpetshop@gmail.com",
            link: "mailto:catelynpetshop@gmail.com",
            icon: MdAlternateEmail,
        },
        {
            type: "address",
            value: "Bottola Railgate, Uttara, Dhaka",
            link: "https://maps.app.goo.gl/1gKT7GnKxUueWpAz8",
            icon: MdLocationOn,
        },
    ];
    const socialIcons = [
        { icon: MdAlternateEmail, link: "mailto:catelynpetshop@gmail.com" },
        {
            icon: FaFacebook,
            link: "https://www.facebook.com/profile.php?id=100071532367874",
        },
        {
            icon: FaInstagram,
            link: "https://www.instagram.com/catelyn_pet_shop",
        },
    ];

    return (
        <Box bg="#17383E" paddingX={8} paddingY={12} bottom={0} as="footer">
            <Flex
                direction={{ base: "column", sm: "row" }}
                justifyContent="space-around"
                gap={8}
            >
                <VStack>
                    <Text color="coral" fontWeight="bold">
                        Categories
                    </Text>
                    {categories.map((category) => (
                        <Text color="white">{category}</Text>
                    ))}
                </VStack>
                <VStack>
                    <Text color="coral" fontWeight="bold">
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
                            color="white"
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
