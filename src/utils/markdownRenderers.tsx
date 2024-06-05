// src/pages/Blogs/SingleBlogDetails/markdownRenderers.tsx
import {
    Heading,
    Text,
    Image,
    Link,
    Box,
    List,
    ListItem,
    Code,
} from "@chakra-ui/react";

const ChakraMarkdownRenderers = {
    h1: (props: any) => <Heading as="h1" size="xl" mt={4} mb={8} {...props} />,
    h2: (props: any) => <Heading as="h2" size="lg" mt={4} mb={2} {...props} />,
    h3: (props: any) => <Heading as="h3" size="md" mt={4} mb={2} {...props} />,
    h4: (props: any) => <Heading as="h4" size="sm" mt={4} mb={2} {...props} />,
    h5: (props: any) => <Heading as="h5" size="xs" mt={4} mb={2} {...props} />,
    h6: (props: any) => <Heading as="h6" size="xs" mt={4} mb={2} {...props} />,
    p: (props: any) => <Text mb={2} {...props} />,
    a: (props: any) => <Link color="teal.500" isExternal {...props} />,
    img: (props: any) => <Image mb={2} {...props} />,
    ul: (props: any) => <List styleType="disc" spacing={2} mb={2} {...props} />,
    ol: (props: any) => (
        <List styleType="decimal" spacing={2} mb={2} {...props} />
    ),
    li: (props: any) => <ListItem {...props} />,
    code: (props: any) => <Code {...props} />,
    inlineCode: (props: any) => <Code {...props} />,
    blockquote: (props: any) => (
        <Box
            as="blockquote"
            pl={4}
            borderLeft="4px"
            borderColor="gray.200"
            mb={2}
            {...props}
        />
    ),
};

export default ChakraMarkdownRenderers;
