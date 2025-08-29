import { createContext, useContext, useState } from "react";

export type BlogContextType = {
    blogs: any[];
    setBlogs: (blogs: any[]) => void;
};

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: React.ReactNode }) => {
    const [blogs, setBlogs] = useState<any[]>([]);
    return (
        <BlogContext.Provider value={{ blogs, setBlogs }}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlogContext = () => {
    const context = useContext(BlogContext);
    if (!context) {
        throw new Error("useBlogContext must be used within a BlogProvider");
    }
    return context;
};
