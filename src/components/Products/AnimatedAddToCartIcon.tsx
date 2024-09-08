import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon, IconButton } from "@chakra-ui/react";
import { FaPlus, FaCheck } from "react-icons/fa";
import { THEME_COLORS } from "misc/constants";

interface AnimatedAddToCartIconProps {
    onClick: () => void;
}

const AnimatedAddToCartIcon: React.FC<AnimatedAddToCartIconProps> = ({
    onClick,
}) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleClick = () => {
        setIsAdded(true);
        onClick();
        setTimeout(() => setIsAdded(false), 1000); // Reset after 1 second
    };

    return (
        <IconButton
            aria-label="Add to cart"
            color={THEME_COLORS.secondary}
            icon={
                <AnimatePresence mode="wait">
                    {isAdded ? (
                        <motion.div
                            key="check"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Icon as={FaCheck} color="green.500" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="plus"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Icon as={FaPlus} />
                        </motion.div>
                    )}
                </AnimatePresence>
            }
            onClick={handleClick}
            variant="ghost"
            _hover={{ bg: "transparent" }}
        />
    );
};

export default AnimatedAddToCartIcon;
