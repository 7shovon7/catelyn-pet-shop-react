import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Alert,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { SignupFormData } from "features/auth/types";
import { useAuth } from "features/auth/hooks";

const Signup: React.FC = () => {
    const { signupUser, isAuthenticated, error, loading } = useAuth();

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const signupData: SignupFormData = {
            email,
            password,
            full_name: fullName,
            user_role: "CUSTOMER",
        };
        signupUser(signupData);
    };

    return (
        <Box maxW="md" mx="auto" my={8} p={6} borderWidth={1} borderRadius="lg">
            {error && (
                <Alert status="error" mb={4}>
                    {error}
                </Alert>
            )}
            <form onSubmit={handleSubmit}>
                <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>
                <FormControl id="fullName" isRequired mt={4}>
                    <FormLabel>Full Name</FormLabel>
                    <Input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </FormControl>
                <FormControl id="password" isRequired mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormControl>
                <Button
                    type="submit"
                    colorScheme="teal"
                    size="md"
                    mt={6}
                    isLoading={loading}
                >
                    Sign Up
                </Button>
            </form>
        </Box>
    );
};

export default Signup;
