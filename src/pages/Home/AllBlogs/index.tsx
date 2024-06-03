import SectionHeader from "../SectionHeader";
import BlogGrid from "../../../components/Blogs/BlogGrid";

const AllBlogs = () => {
    return (
        <>
            <SectionHeader title="Pet Blogs" to="/blogs" />
            <BlogGrid />
        </>
    );
};

export default AllBlogs;
