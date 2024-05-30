import { useNavigate } from "react-router-dom";
import CButton from "../../Regular/CButton";

interface Props {
    text: string;
    to: string;
}

const NavItems = ({ text, to }: Props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    };
    return (
        <CButton bg="#17383E" hoverBg="coral" onClick={handleClick}>
            {text}
        </CButton>
    );
};

export default NavItems;
