import { Card, Image, Text, VStack } from "@chakra-ui/react";

interface Props {
    title: string;
    imageSrc: string;
    postedAt: string;
}

const BlogCard = ({ title, imageSrc, postedAt }: Props) => {
    return (
        <Card paddingY={8}>
            <VStack spacing={2}>
                <Image src={imageSrc} h="100px" fit="cover" />
                <Text fontSize={16} fontWeight="bold">
                    {title}
                </Text>
                <Text color="grey" fontSize={12}>
                    {postedAt.toUpperCase()}
                </Text>
            </VStack>
        </Card>
    );
};

export default BlogCard;
