import CButton from "../../Regular/CButton";

interface Props {
    text: string;
}

const NavItems = ({ text }: Props) => {
    return <CButton>{text}</CButton>;
};

export default NavItems;
