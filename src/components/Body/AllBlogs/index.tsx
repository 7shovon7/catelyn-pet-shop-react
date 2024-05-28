import { SimpleGrid } from "@chakra-ui/react";
import SectionHeader from "../SectionHeader";
import BlogCard from "../../Regular/BlogCard";
import earMitesImage from "../../../assets/ear-mites.jpg";

const AllBlogs = () => {
    return (
        <>
            <SectionHeader title="Pet Blogs" />
            <SimpleGrid
                columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
                spacing={8}
                marginY={4}
            >
                <BlogCard
                    title="বিড়ালের কানের ময়লা পরিষ্কার করুন"
                    imageSrc={earMitesImage}
                    postedAt="January 12, 2024"
                />
                <BlogCard
                    title="বিড়ালের কানের ময়লা পরিষ্কার করুন"
                    imageSrc={earMitesImage}
                    postedAt="March 23, 2024"
                />
                <BlogCard
                    title="বিড়ালের কানের ময়লা পরিষ্কার করুন"
                    imageSrc={earMitesImage}
                    postedAt="April 07, 2024"
                />
                <BlogCard
                    title="বিড়ালের কানের ময়লা পরিষ্কার করুন"
                    imageSrc={earMitesImage}
                    postedAt="May 08, 2024"
                />
            </SimpleGrid>
        </>
    );
};

export default AllBlogs;
