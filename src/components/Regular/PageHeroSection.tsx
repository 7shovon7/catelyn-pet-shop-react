import { Flex, HStack, Heading, Link, Text } from "@chakra-ui/react";
import { THEME_COLORS } from "misc/constants";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

export interface BreadCrumb {
    title: string;
    to: string;
}

interface Props {
    pageTitle: string;
    breadcrumbs: BreadCrumb[];
}

const PageHeroSection = ({ pageTitle, breadcrumbs }: Props) => {
    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            paddingY="32px"
        >
            <Heading fontSize="6xl" fontWeight="bold" textAlign="center" mb={8}>
                {pageTitle}
            </Heading>
            <HStack>
                {breadcrumbs.map((breadcrumb, index) => (
                    <React.Fragment key={index}>
                        <Link
                            as={RouterLink}
                            to={breadcrumb.to}
                            color={THEME_COLORS.secondary}
                        >
                            {breadcrumb.title.toUpperCase()}
                        </Link>{" "}
                        <Text> &gt; </Text>
                    </React.Fragment>
                ))}
                <Text>{pageTitle.toUpperCase()}</Text>
            </HStack>
        </Flex>
    );
};

export default PageHeroSection;
