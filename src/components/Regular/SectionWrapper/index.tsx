import React from "react";
import { Box } from "@chakra-ui/react";
import SectionHeader from "./SectionHeader";
import CButton from "components/Regular/CButton";
import { useNavigate } from "react-router-dom";

interface SectionWrapperProps {
    title: string;
    to: string;
    children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
    title,
    to,
    children,
}) => {
    const navigate = useNavigate();

    const handleExploreClick = () => {
        navigate(to);
    };

    return (
        <Box>
            <SectionHeader title={title} onExploreClick={handleExploreClick} />
            {children}
            <Box
                display={{ base: "flex", md: "none" }}
                justifyContent="center"
                mt={4}
            >
                <CButton onClick={handleExploreClick}>
                    {`Explore Now`.toUpperCase()}
                </CButton>
            </Box>
        </Box>
    );
};

export default SectionWrapper;
