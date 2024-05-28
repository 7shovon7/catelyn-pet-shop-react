import { Card, Image, Text, VStack } from "@chakra-ui/react";

interface Props {
    imageSrc: string;
    title: string;
}

const CategoryCard = ({ imageSrc, title }: Props) => {
    return (
        <Card paddingX="16px" paddingY="32px" boxShadow="lg">
            <VStack>
                <Image
                    src={imageSrc}
                    alt={title}
                    boxSize="100px"
                    objectFit="cover"
                />
                <Text fontSize="2xl" fontWeight="600">
                    {title}
                </Text>
            </VStack>
        </Card>
    );
};

export default CategoryCard;
