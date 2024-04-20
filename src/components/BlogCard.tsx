import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


// Define TypeScript interfaces for the API response
interface Blog {
    id_Blogs: number;
    title: string;
    content: string;
}

const Blogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading ,setloading] = useState(true);
    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                const response = await axios.get<Blog[]>('https://backend.dhruvmeerwal19.workers.dev/Blogs');
                setBlogs(response.data);
                setloading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    // BlogCard component now inside the Blogs component
    const BlogCard = ({ blog }: { blog: Blog }) => {
        return (
            <div className="p-6 bg-white border border-gray-200 shadow">
                <Link to={`../Blogdetails/${blog.id_Blogs}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{blog.title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700">{blog.content}</p>
                <Link to={`../Blogdetails/${blog.id_Blogs}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        );
    };

    if (loading) {
        return <div>
            <div role="status" className="p-6 bg-white border border-gray-200 shadow animate-pulse">
                    <div className="h-2.5 px-4 py-3 bg-gray-200 rounded-full w-48 mb-4"></div>
                    <div className="h-2 px-4 py-3 bg-gray-200 rounded-full mb-6 w-9/12"></div>
                    <div className="h-2 px-4 py-3 bg-gray-200 rounded-full mb-6 w-8/12"></div>
                    <div className="h-2 px-4 py-3 bg-gray-200 rounded-full mb-6 w-7/12"></div>
                    <div className="h-2 px-4 py-3 bg-gray-200 rounded-full mb-12 w-10/12"></div>
                    <div className="h-2 px-4 py-3 bg-gray-200 rounded-full mb-4"></div>
                    <div className="h-2 px-4 py-3 bg-gray-200 rounded-full mb-6 w-3/12"></div>
                    
                </div>
        </div>
    }

    return (
        <div>
            {blogs.map(blog => (
                <BlogCard key={blog.id_Blogs} blog={blog} />
            ))}
        </div>
    );
};

export default Blogs;
