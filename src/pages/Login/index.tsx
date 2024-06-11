import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Alert,
} from "@chakra-ui/react";
import { login } from "features/auth/authSlice";
import { RootState, AppDispatch } from "store";

const Login: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loading, error } = useSelector((state: RootState) => state.auth);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(login({ email, password }));
    };

    return (
        <Box maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="lg">
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
                    Login
                </Button>
            </form>
        </Box>
    );
};

export default Login;
