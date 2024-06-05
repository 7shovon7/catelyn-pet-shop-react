import { Image, Text, VStack } from "@chakra-ui/react";
import { THEME_COLORS } from "misc/constants";

interface Props {
    imageSrc: string;
    text: string;
    location: string;
}

const SinglePersonTestimonial = ({ imageSrc, text, location }: Props) => {
    return (
        <VStack paddingX={8} paddingTop={8} paddingBottom={12}>
            <Image src={imageSrc} boxSize="100px" borderRadius="50px" />
            <Text color="white" textAlign="center">
                {text}
            </Text>
            <Text color={THEME_COLORS.secondary}>{location}</Text>
        </VStack>
    );
};

export default SinglePersonTestimonial;
