import { Box, Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
    const categories = ["Cat Food", "Cat Litter", "Health & Grooming", "Toy"];
    const contacts = [
        "Phone: 01800-072-072",
        "Email: catelynpetshop@gmail.com",
        "Address: Uttara, Dhaka",
    ];
    const socialIcons: IconType[] = [MdAlternateEmail, FaFacebook, FaInstagram];

    return (
        <Box bg="#17383E" paddingX={8} paddingY={12}>
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
                    {contacts.map((contact) => (
                        <Text color="white">{contact}</Text>
                    ))}
                </VStack>
            </Flex>
            <Divider marginY={4} />
            <HStack justifyContent="center">
                {socialIcons.map((Icon, index) => (
                    <Icon key={index} color="white" size={24} />
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
