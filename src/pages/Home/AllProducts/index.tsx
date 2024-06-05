import SectionHeader from "../SectionHeader";
import ProductGrid from "../../../components/Products/ProductGrid";

const AllProducts = () => {
    return (
        <>
            <SectionHeader title="Furries Best Choice" to="/products" />
            <ProductGrid />
        </>
    );
};

export default AllProducts;
