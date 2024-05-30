import { Flex, Text } from "@chakra-ui/react";
import CButton from "../../components/Regular/CButton";
import { useNavigate } from "react-router-dom";

interface Props {
    title: string;
    to?: string;
}

const SectionHeader = ({ title, to }: Props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (to) {
            navigate(to);
        }
    };
    return (
        <Flex justifyContent="space-between" align="center" paddingTop="44px">
            <Text fontSize="4xl" fontWeight="bold">
                {title}
            </Text>
            <CButton onClick={handleClick}>
                {`Explore Now`.toUpperCase()}
            </CButton>
        </Flex>
    );
};

export default SectionHeader;
