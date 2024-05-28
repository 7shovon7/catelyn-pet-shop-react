import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    bg?: string;
    textColor?: string;
    hoverBg?: string;
    hoverTextColor?: string;
}

const CButton = ({
    children,
    bg = "coral",
    textColor = "white",
    hoverBg = "#17383E",
    hoverTextColor = "white",
}: Props) => {
    return (
        <Button
            borderRadius={2}
            bg={bg}
            color={textColor}
            _hover={{ bg: hoverBg, color: hoverTextColor }}
        >
            {children}
        </Button>
    );
};

export default CButton;
