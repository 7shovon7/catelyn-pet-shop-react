import { Image } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <Image src={logo} height={7} />
        </Link>
    );
};

export default Logo;
