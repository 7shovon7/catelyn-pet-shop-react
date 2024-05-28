import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import person1 from "../../../assets/person1.png";
import person2 from "../../../assets/person2.jpg";
import person3 from "../../../assets/person3.jpeg";
import SinglePersonTestimonial from "./SinglePersonTestimonial";

const Testimonials = () => {
    return (
        <Box bg="#17383E" marginTop={12}>
            <VStack paddingTop={12}>
                <Text color="white" fontSize={14}>
                    What pet parents say about Catelyn Pet Shop
                </Text>
                <Text color="white" fontSize="4xl" fontWeight="bold">
                    Parent's Testimonials
                </Text>
                <Flex direction={{ base: "column", md: "row" }}>
                    <SinglePersonTestimonial
                        imageSrc={person1}
                        text="Lorem ipsum is placeholder text commonly used in the
                            graphic, print, and publishing industries."
                        location="Savar, Dhaka"
                    />
                    <SinglePersonTestimonial
                        imageSrc={person2}
                        text="Lorem ipsum is placeholder text commonly used in the
                            graphic, print, and publishing industries."
                        location="Savar, Dhaka"
                    />
                    <SinglePersonTestimonial
                        imageSrc={person3}
                        text="Lorem ipsum is placeholder text commonly used in the
                            graphic, print, and publishing industries."
                        location="Savar, Dhaka"
                    />
                </Flex>
            </VStack>
        </Box>
    );
};

export default Testimonials;
