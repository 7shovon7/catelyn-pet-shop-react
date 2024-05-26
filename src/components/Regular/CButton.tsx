import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const CButton = ({ children }: Props) => {
    return <Button borderRadius={2}>{children}</Button>;
};

export default CButton;
