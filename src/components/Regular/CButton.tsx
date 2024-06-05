import { Button } from "@chakra-ui/react";
import { THEME_COLORS } from "misc/constants";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    bg?: string;
    textColor?: string;
    hoverBg?: string;
    hoverTextColor?: string;
}

const CButton = ({
    children,
    onClick,
    disabled = false,
    bg = THEME_COLORS.secondary,
    textColor = "white",
    hoverBg = THEME_COLORS.primary,
    hoverTextColor = "white",
}: Props) => {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            borderRadius={2}
            bg={disabled ? "grey" : bg}
            color={textColor}
            _hover={disabled ? {} : { bg: hoverBg, color: hoverTextColor }}
            _disabled={{
                cursor: "not-allowed",
            }}
        >
            {children}
        </Button>
    );
};

export default CButton;
