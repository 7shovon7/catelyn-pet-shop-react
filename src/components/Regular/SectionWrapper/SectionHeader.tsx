import { Flex, Text, Box } from "@chakra-ui/react";
import CButton from "components/Regular/CButton";

interface Props {
    title: string;
    onExploreClick: () => void;
}

const SectionHeader = ({ title, onExploreClick }: Props) => {
    return (
        <Flex
            justifyContent="space-between"
            align="center"
            paddingTop="44px"
            marginBottom="20px"
        >
            <Text fontSize="4xl" fontWeight="bold">
                {title}
            </Text>
            <Box display={{ base: "none", md: "block" }}>
                <CButton onClick={onExploreClick}>
                    {`Explore Now`.toUpperCase()}
                </CButton>
            </Box>
        </Flex>
    );
};

export default SectionHeader;
