
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Blog {
    id_Blogs: number;
    title: string;
    content: string; // assuming blogs also have a 'content' field
}


export const FullBlog = () => {
    const { id_Blogs } = useParams();
    const [blog, setBlog] = useState<Blog | null>(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get<Blog>(`https://backend.dhruvmeerwal19.workers.dev/Blogs/${id_Blogs}`);
                setBlog(response.data);
            } catch (error) {
                console.error('Failed to fetch blog:', error);
            }
        };

        fetchBlog();
    }, [id_Blogs]);

    if (!blog) return <div>
        <div role="status" className="p-6 bg-white border border-gray-200 shadow animate-pulse">
                    <div className="h-2.5 px-4 py-3 bg-gray-200 rounded-full w-48 mb-4"></div>
                    <div className="h-2 px-4 py-3 bg-gray-200 rounded-full mb-6 w-9/12"></div>
                    <div className="h-2 px-4 py-3 bg-gray-200 rounded-full mb-6 w-8/12"></div>
                    <div className="h-2 px-4 py-3 bg-gray-200 rounded-full mb-6 w-7/12"></div>
                    <div className="h-2 px-4 py-3 bg-gray-200 rounded-full mb-12 w-10/12"></div>
                    <div className="h-2 px-4 py-3 bg-gray-200 rounded-full mb-4"></div>
                    <div className="h-2 px-4 py-3 bg-gray-200 rounded-full mb-6 w-3/12"></div>
                    
                </div>
    </div>;

    return (
        <div>
            <div className="p-6 bg-white border border-gray-200 shadow">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{blog.title}</h5>
                </div>
                <p className="mb-3 font-normal text-gray-700">{blog.content}</p>
            </div>
            
        </div>
    );
}
