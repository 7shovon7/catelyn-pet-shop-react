import { useNavigate } from "react-router-dom";
import CButton from "../../Regular/CButton";
import { THEME_COLORS } from "misc/constants";

interface Props {
    text: string;
    to: string;
    onClose: () => void;
}

const NavItems = ({ text, to, onClose }: Props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        onClose();
        navigate(to);
    };
    return (
        <CButton
            bg={THEME_COLORS.primary}
            hoverBg={THEME_COLORS.secondary}
            onClick={handleClick}
        >
            {text}
        </CButton>
    );
};

export default NavItems;
