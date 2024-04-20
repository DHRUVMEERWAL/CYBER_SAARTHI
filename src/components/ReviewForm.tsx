import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ReviewForm = () => {
    const [name, setname] = useState("");
    const [description, setdescription] = useState("");
    const [rating, setrating] = useState("");
    const [error, setError] = useState(""); 

    const navigate = useNavigate();

    const handleSubmit = async (e : any) => {
        e.preventDefault(); 

        // Form validation
        if (!name || !description || !rating) {
            setError("Please fill out all fields.");
            return;
        }

        const ratingInt = parseInt(rating);

        try {
            // Make POST request
            await axios.post('https://backend.dhruvmeerwal19.workers.dev/Reviews', {
                name,
                description,
                rating : ratingInt,
            });
            
            // Reset form fields
            setname("");
            setdescription("");
            setrating("");
            setError("");
            
            // Redirect to success page
            navigate('/Testimonials');
        } catch (error) {
            setError("Error while sending the form. Please try again later.");
            console.error('Error while sending the form. ', error);
        }
    };

    return (
        <section className="bg-white">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Liked Cyber Saarthi? </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Please Review Us...</p>
                <form className="space-y-8" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <input type="name" id="name" name="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="Your Full Name" required value={name} onChange={(e) => setname(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                        <textarea id="description" name="description" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500" placeholder="Let us know how we did..." required value={description} onChange={(e) => setdescription(e.target.value)}></textarea>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900">Rating</label>
                        <input type="number" min="0" max="5" id="rating" name="rating" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-orange-500 focus:border-orange-500" placeholder="Give rating out of 5" value={rating} onChange={(e) => setrating(e.target.value)}></input>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-400 sm:w-fit hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300">Submit</button>
                </form>
            </div>

        </section>
    );
};
