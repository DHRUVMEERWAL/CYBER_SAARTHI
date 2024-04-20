import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ContactForm = () => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(""); 

    const navigate = useNavigate();

    const handleSubmit = async (e : any) => {
        e.preventDefault(); 

        // Form validation
        if (!email || !subject || !content) {
            setError("Please fill out all fields.");
            return;
        }

        try {
            // Make POST request
            await axios.post('https://backend.dhruvmeerwal19.workers.dev/ContactUs', {
                email,
                subject,
                content,
            });
            
            // Reset form fields
            setEmail("");
            setSubject("");
            setContent("");
            setError("");
            
            // Redirect to success page
            navigate('/Helper');
        } catch (error) {
            setError("Error while sending the form. Please try again later.");
            console.error('Error while sending the form. ', error);
        }
    };

    return (
        <section className="bg-white">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Got a Cyber issue? Difficulties related to anything online or over internet. Let us know. Get connected with us on mail.</p>
                <form className="space-y-8" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                        <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="name@gmail.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                        <input type="text" id="subject" name="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500" placeholder="Let us know how we can help you" required value={subject} onChange={(e) => setSubject(e.target.value)} />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your Query</label>
                        <textarea id="message" name="message" className="block p-2.5 w-full min-h-48 text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-orange-500 focus:border-orange-500" placeholder="Explain your issue in detail..." value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-400 sm:w-fit hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300">Send Query</button>
                </form>
            </div>
        </section>
    );
};
