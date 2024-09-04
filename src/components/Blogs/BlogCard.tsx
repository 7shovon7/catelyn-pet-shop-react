import { Card, Image, Text, VStack } from "@chakra-ui/react";
import { formatDate } from "utils/datetimeutil";
import { truncateTitle } from "utils/misc";

interface Props {
    title: string;
    imageSrc: string;
    postedAt: string;
}

const BlogCard = ({ title, imageSrc, postedAt }: Props) => {
    return (
        <Card padding={4} height="270px" position="relative">
            <VStack spacing={2} width="100%">
                <Image src={imageSrc} h="130px" w="100%" fit="cover" />
                <Text align="center" fontSize={16} fontWeight="bold">
                    {truncateTitle(title, 50)}
                </Text>
                <Text color="grey" fontSize={12} position="absolute" bottom={4}>
                    {formatDate(postedAt).toUpperCase()}
                </Text>
            </VStack>
        </Card>
    );
};

export default BlogCard;
