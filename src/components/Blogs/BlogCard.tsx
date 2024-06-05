import { Card, Image, Text, VStack } from "@chakra-ui/react";
import { formatDate } from "utils/datetimeutil";

interface Props {
    title: string;
    imageSrc: string;
    postedAt: string;
}

const BlogCard = ({ title, imageSrc, postedAt }: Props) => {
    return (
        <Card paddingY={8} paddingX={4} minHeight="200px">
            <VStack spacing={2} width="100%">
                <Image src={imageSrc} w="100%" fit="cover" />
                <Text fontSize={16} fontWeight="bold">
                    {title}
                </Text>
                <Text color="grey" fontSize={12}>
                    {formatDate(postedAt).toUpperCase()}
                </Text>
            </VStack>
        </Card>
    );
};

export default BlogCard;
