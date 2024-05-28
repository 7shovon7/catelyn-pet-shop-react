import { Flex, Text } from "@chakra-ui/react";
import CButton from "../../components/Regular/CButton";

interface Props {
    title: string;
}

const SectionHeader = ({ title }: Props) => {
    return (
        <Flex justifyContent="space-between" align="center" paddingTop="44px">
            <Text fontSize="4xl" fontWeight="bold">
                {title}
            </Text>
            <CButton>{`Explore Now`.toUpperCase()}</CButton>
        </Flex>
    );
};

export default SectionHeader;
