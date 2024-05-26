import { Button } from "@chakra-ui/react";

interface Props {
    text: string;
}

const NavItems = ({ text }: Props) => {
    return <Button borderRadius={4}>{text}</Button>;
};

export default NavItems;
