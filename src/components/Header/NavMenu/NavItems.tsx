import CButton from "../../Regular/CButton";

interface Props {
    text: string;
}

const NavItems = ({ text }: Props) => {
    return (
        <CButton bg="#17383E" hoverBg="coral">
            {text}
        </CButton>
    );
};

export default NavItems;
