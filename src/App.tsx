import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Blogs from "pages/Blogs";
import Products from "pages/Products";
import SingleBlogDetails from "pages/Blogs/SingleBlogDetails";
import SingleProductDetails from "pages/Products/SingleProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppDispatch, RootState } from "store";
import Checkout from "pages/Checkout";
import Login from "pages/Login";
import Signup from "pages/Signup";
import OrderHistory from "pages/OrderHistory";
import OrderDetails from "pages/OrderDetails";
import ThankYouPage from "pages/ThankYouPage";
import authService from "features/auth/service";
import MainLayout from "components/Layout/MainLayout";
import { fetchCurrentUser } from "features/auth/slice";

const App: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        const accessToken = authService.getAccessToken();
        if (accessToken && !isAuthenticated) {
            dispatch(fetchCurrentUser());
        }
    }, [dispatch, isAuthenticated]);

    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route
                        path="/products/:id"
                        element={<SingleProductDetails />}
                    />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route
                        path="/blogs/:slug"
                        element={<SingleBlogDetails />}
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/orders" element={<OrderHistory />} />
                    <Route path="/orders/:id" element={<OrderDetails />} />
                    <Route path="/thank-you" element={<ThankYouPage />} />
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default App;
